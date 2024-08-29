import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.NEXT_APP_EMAIL,
    pass: process.env.NEXT_APP_EMAIL_PASS,
  },
});

async function sendEmail(data: EmailData): Promise<void> {
  const { fullName, email, subject, message } = data;

  const mailOptions = {
    from: '"Contact Form" <toksozhalil@gmail.com>',
    to: "toksozhalil@gmail.com",
    subject: `New Contact Form Submission: ${subject}`,
    text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { fullName, email, subject, message } = body;

  if (!fullName || !email || !subject || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    await sendEmail({ fullName, email, subject, message });
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
