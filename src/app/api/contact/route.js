// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { firstName, lastName, email, phone, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json(
      { success: false, msg: "Missing required fields" },
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail", // or your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Company email
    subject: `New Contact from ${firstName} ${lastName}`,
    html: `
      <h3>New Message from Contact Form</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: true, msg: "Email sent successfully" },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
