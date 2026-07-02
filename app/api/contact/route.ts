import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { message: "Please complete all fields with a valid email address." },
      { status: 422 }
    );
  }

  // TODO: Connect a real email or storage provider before going live, e.g.:
  //   - Resend (https://resend.com) with an API key in RESEND_API_KEY
  //   - Nodemailer with SMTP credentials
  //   - Save to a database (Firebase Firestore, MySQL via PlanetScale, etc.)
  // For now this route only validates the submission.

  console.log("New portfolio contact message:", { name, email, message });

  return NextResponse.json({
    message: "Thank you for reaching out. Your message has been received — I'll get back to you soon.",
  });
}
