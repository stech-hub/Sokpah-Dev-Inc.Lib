
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { email, amount, plan } = await req.json();
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
  return NextResponse.json(await res.json());
}
