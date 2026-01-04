
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { email, amount, plan } = await req.json();

  if (!process.env.FLW_SECRET_KEY) {
    return NextResponse.json(
      { error: "Flutterwave secret key not configured" },
      { status: 500 }
    );
  }

  const res = await fetch("https://api.flutterwave.com/v3/payments", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      tx_ref: `sokpah_${Date.now()}`,
      amount,
      currency: "USD",
      redirect_url: "https://example.com/success",
      customer: { email },
      meta: { plan },
      payment_options: "mobilemoney,banktransfer"
    })
  });

  const data = await res.json();
  return NextResponse.json(data);
}
