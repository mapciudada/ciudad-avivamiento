import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const data = await req.formData();
  return NextResponse.json({ ok: true, message: "¡Gracias! Hemos recibido tu mensaje.", data: Object.fromEntries(data) });
}
