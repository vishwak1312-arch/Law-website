"use client";
import { useState } from "react";
import { FadeUp } from "@/components/Motion";
import { CreditCard, Shield, Lock, CheckCircle } from "lucide-react";

const paymentTypes = [
  { id: "consultation", label: "Consultation Fee", amount: "$250.00" },
  { id: "retainer", label: "Retainer Payment", amount: "Custom Amount" },
  { id: "invoice", label: "Invoice Payment", amount: "Custom Amount" },
];

export default function PaymentPage() {
  const [type, setType] = useState("consultation");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Stripe integration would go here
    setTimeout(() => { window.location.href = "/payment/success"; }, 2000);
  };

  return (
    <>
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">Secure Payment</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Payment Portal</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Make a secure payment for legal services.</p>
            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-white/60 text-sm"><Lock className="w-4 h-4 text-gold" />256-bit SSL Encrypted</div>
              <div className="flex items-center gap-2 text-white/60 text-sm"><Shield className="w-4 h-4 text-gold" />PCI Compliant</div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6">
          <FadeUp>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="font-heading text-xl font-bold text-navy mb-6 flex items-center gap-2"><CreditCard className="w-5 h-5 text-gold" /> Select Payment Type</h2>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {paymentTypes.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setType(pt.id)}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${type === pt.id ? 'border-gold bg-gold/5' : 'border-gray-100 hover:border-gray-200'}`}
                  >
                    <p className="font-semibold text-navy text-sm">{pt.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{pt.amount}</p>
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="payer" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input id="payer" type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-sm" />
                </div>
                <div>
                  <label htmlFor="pemail" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input id="pemail" type="email" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-sm" />
                </div>
                {type !== "consultation" && (
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1.5">Amount ($)</label>
                    <input id="amount" type="number" min="1" step="0.01" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-sm" placeholder="0.00" />
                  </div>
                )}
                {type === "invoice" && (
                  <div>
                    <label htmlFor="invoice-num" className="block text-sm font-medium text-gray-700 mb-1.5">Invoice Number</label>
                    <input id="invoice-num" type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-sm" placeholder="INV-001" />
                  </div>
                )}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1.5">Notes (optional)</label>
                  <textarea id="notes" rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-sm resize-none" />
                </div>

                {/* Stripe placeholder */}
                <div className="p-4 bg-light rounded-lg border border-gray-200 text-center text-sm text-gray-500">
                  <CreditCard className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                  Stripe payment form will load here.<br />
                  <span className="text-xs">Connect your Stripe account via environment variables.</span>
                </div>

                <button type="submit" disabled={loading} className="w-full py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all shadow-lg shadow-gold/25 text-sm disabled:opacity-50">
                  {loading ? "Processing..." : "Pay Securely"}
                </button>
              </form>

              <p className="text-center text-xs text-gray-400 mt-4">Powered by Stripe. Your payment information is encrypted and secure.</p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
