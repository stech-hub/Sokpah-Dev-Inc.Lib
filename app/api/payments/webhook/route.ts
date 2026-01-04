
import { adminDb } from "../../../lib/firebase-admin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const secret = req.headers.get("verif-hash");
  if (secret !== process.env.FLW_WEBHOOK_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }
  const payload = await req.json();
  if (payload.status === "successful") {
    await adminDb.collection("subscriptions").doc(payload.customer.email).set({
      plan: payload.meta.plan,
      status: "active",
      provider: "flutterwave",
      paymentMethod: payload.payment_type,
      createdAt: new Date()
    });
  }
  return NextResponse.json({ ok: true });
}
