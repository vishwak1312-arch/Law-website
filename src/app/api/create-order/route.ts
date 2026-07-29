import { NextRequest, NextResponse } from "next/server";
import { getRazorpay } from "@/lib/razorpay";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, currency = "INR", receipt, notes } = body;

    // Validate amount (minimum 100 paise = ₹1)
    if (!amount || typeof amount !== "number" || amount < 100) {
      return NextResponse.json(
        { error: "Amount must be at least 100 paise (₹1)" },
        { status: 400 }
      );
    }

    // Validate receipt
    if (!receipt || typeof receipt !== "string") {
      return NextResponse.json(
        { error: "Receipt ID is required" },
        { status: 400 }
      );
    }

    const razorpay = getRazorpay();
    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt,
      notes: notes || {},
    });

    return NextResponse.json(
      {
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Razorpay create order error:", error);

    // Handle Razorpay authentication errors
    if (
      error &&
      typeof error === "object" &&
      "statusCode" in error &&
      (error as { statusCode: number }).statusCode === 401
    ) {
      return NextResponse.json(
        { error: "Payment gateway authentication failed" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create payment order. Please try again." },
      { status: 500 }
    );
  }
}
