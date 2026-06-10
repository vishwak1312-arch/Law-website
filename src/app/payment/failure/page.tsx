import Link from "next/link";
import { XCircle } from "lucide-react";

export default function PaymentFailure() {
  return (
    <section className="py-32 lg:py-40">
      <div className="max-w-lg mx-auto px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-10 h-10 text-red-500" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-navy mb-4">Payment Failed</h1>
        <p className="text-gray-600 mb-8">We were unable to process your payment. Please try again or contact our office for assistance.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/payment" className="px-8 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all text-sm">Try Again</Link>
          <Link href="/contact" className="px-8 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all text-sm">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
