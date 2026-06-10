import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  return (
    <section className="py-32 lg:py-40">
      <div className="max-w-lg mx-auto px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-navy mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">Thank you for your payment. A confirmation email has been sent to your address. Our team will be in touch shortly.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-8 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-all text-sm">Return Home</Link>
          <Link href="/contact" className="px-8 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all text-sm">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
