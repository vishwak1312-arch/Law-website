"use client";
import { useState, useCallback } from "react";
import { FadeUp } from "@/components/Motion";
import { CreditCard, Shield, Lock, AlertCircle, IndianRupee } from "lucide-react";

// Dynamically load Razorpay checkout.js on demand
let razorpayPromise: Promise<void> | null = null;
function loadRazorpayScript(): Promise<void> {
  if (window.Razorpay) return Promise.resolve();
  if (razorpayPromise) return razorpayPromise;
  razorpayPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      razorpayPromise = null;
      reject(new Error("Failed to load payment gateway. Please check your internet connection and try again."));
    };
    document.body.appendChild(script);
  });
  return razorpayPromise;
}

const paymentTypes = [
  { id: "consultation", label: "Consultation Fee", amount: 25000 },
  { id: "retainer", label: "Retainer Payment", amount: 0 },
  { id: "invoice", label: "Invoice Payment", amount: 0 },
];

type PaymentStatus = "idle" | "creating" | "processing" | "verifying" | "success" | "error";

export default function PaymentPage() {
  const [type, setType] = useState("consultation");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [invoiceNum, setInvoiceNum] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<PaymentStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Amount in paise (smallest currency unit)
  const getAmountInPaise = (): number => {
    if (type === "consultation") return 25000; // ₹250
    const parsed = parseFloat(customAmount);
    if (isNaN(parsed) || parsed < 1) return 0;
    return Math.round(parsed * 100);
  };

  const handlePayment = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setErrorMsg("");

      const amountInPaise = getAmountInPaise();

      if (amountInPaise < 100) {
        setErrorMsg("Minimum payment amount is ₹1.");
        return;
      }

      // Step 0: Ensure Razorpay script is loaded
      setStatus("creating");
      try {
        await loadRazorpayScript();

        // Step 1: Create order on backend
        const orderRes = await fetch("/api/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: amountInPaise,
            currency: "INR",
            receipt: `rcpt_${type}_${Date.now()}`,
            notes: {
              payer_name: name,
              payer_email: email,
              payment_type: type,
              ...(invoiceNum ? { invoice_number: invoiceNum } : {}),
              ...(notes ? { additional_notes: notes } : {}),
            },
          }),
        });

        if (!orderRes.ok) {
          const errData = await orderRes.json();
          throw new Error(errData.error || "Failed to create order");
        }

        const orderData = await orderRes.json();

        // Step 2: Open Razorpay checkout modal
        setStatus("processing");
        const options: RazorpayOptions = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
          amount: orderData.amount,
          currency: orderData.currency,
          name: "DSP Law Associates",
          description: `${type === "consultation" ? "Consultation Fee" : type === "retainer" ? "Retainer Payment" : "Invoice Payment"}`,
          order_id: orderData.order_id,
          handler: async (response: RazorpayResponse) => {
            // Step 3: Verify payment on backend
            setStatus("verifying");
            try {
              const verifyRes = await fetch("/api/verify-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });

              if (!verifyRes.ok) {
                const errData = await verifyRes.json();
                throw new Error(errData.error || "Payment verification failed");
              }

              setStatus("success");
              window.location.href = "/payment/success";
            } catch (verifyErr: unknown) {
              const message = verifyErr instanceof Error ? verifyErr.message : "Payment verification failed";
              setErrorMsg(message);
              setStatus("error");
            }
          },
          prefill: {
            name,
            email,
            contact: phone,
          },
          theme: {
            color: "#0a0a0a",
          },
          modal: {
            ondismiss: () => {
              setStatus("idle");
              setErrorMsg("Payment was cancelled.");
            },
            confirm_close: true,
          },
        };

        const rzp = new window.Razorpay(options);

        rzp.on("payment.failed", (response: { error: RazorpayError }) => {
          setErrorMsg(
            response.error.description || "Payment failed. Please try again."
          );
          setStatus("error");
        });

        rzp.open();
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
        setErrorMsg(message);
        setStatus("error");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [type, name, email, phone, customAmount, invoiceNum, notes]
  );

  const isLoading = status === "creating" || status === "processing" || status === "verifying";

  const statusMessages: Record<string, string> = {
    creating: "Creating order...",
    processing: "Opening payment gateway...",
    verifying: "Verifying payment...",
  };

  return (
    <>
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">
              Secure Payment
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Payment Portal
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Make a secure payment for legal services.
            </p>
            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Lock className="w-4 h-4 text-gold" />
                256-bit SSL Encrypted
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Shield className="w-4 h-4 text-gold" />
                PCI Compliant
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6">
          <FadeUp>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="font-heading text-xl font-bold text-navy mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-gold" /> Select Payment
                Type
              </h2>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {paymentTypes.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setType(pt.id)}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${
                      type === pt.id
                        ? "border-gold bg-gold/5"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <p className="font-semibold text-navy text-sm">
                      {pt.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {pt.amount
                        ? `₹${(pt.amount / 100).toLocaleString("en-IN")}`
                        : "Custom Amount"}
                    </p>
                  </button>
                ))}
              </div>

              {/* Error message */}
              {errorMsg && (
                <div className="flex items-start gap-3 p-4 mb-6 bg-red-50 border border-red-200 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-800">
                      {errorMsg}
                    </p>
                    <button
                      onClick={() => {
                        setErrorMsg("");
                        setStatus("idle");
                      }}
                      className="text-xs text-red-600 hover:underline mt-1"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handlePayment} className="space-y-4">
                <div>
                  <label
                    htmlFor="payer"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="payer"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pemail"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="pemail"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pphone"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="pphone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-sm"
                  />
                </div>
                {type !== "consultation" && (
                  <div>
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Amount (₹)
                    </label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id="amount"
                        type="number"
                        min="1"
                        step="0.01"
                        required
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-sm"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                )}
                {type === "invoice" && (
                  <div>
                    <label
                      htmlFor="invoice-num"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Invoice Number
                    </label>
                    <input
                      id="invoice-num"
                      type="text"
                      required
                      value={invoiceNum}
                      onChange={(e) => setInvoiceNum(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-sm"
                      placeholder="INV-001"
                    />
                  </div>
                )}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Notes (optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-sm resize-none"
                  />
                </div>

                {/* Payment summary */}
                <div className="p-4 bg-light rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Amount</span>
                    <span className="text-lg font-bold text-navy">
                      ₹
                      {(getAmountInPaise() / 100).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    GST will be applied as applicable
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all shadow-lg shadow-gold/25 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      {statusMessages[status] || "Processing..."}
                    </>
                  ) : (
                    "Pay Securely"
                  )}
                </button>
              </form>

              <p className="text-center text-xs text-gray-400 mt-4">
                Powered by Razorpay. Your payment information is encrypted and
                secure.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
