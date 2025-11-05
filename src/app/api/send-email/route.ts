import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || "smtp.zeptomail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // Use TLS (STARTTLS)
  auth: {
    user: process.env.SMTP_USER || "emailapikey",
    pass: process.env.SMTP_PASS || "",
  },
  tls: {
    rejectUnauthorized: false,
  },
};

// ✅ Email Template
const createEmailTemplate = (formData: any) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
      New Contact Form Submission
    </h2>

    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Company:</strong> ${formData.company || "Not provided"}</p>
      <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
    </div>

    <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h3 style="color: #1e40af; margin-top: 0;">Message</h3>
      <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
    </div>

    <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 14px; color: #6b7280;">
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Source:</strong> SWAD Digital Solutions Website Contact Form</p>
    </div>
  </div>
`;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // ✅ Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ✅ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport(SMTP_CONFIG);

    // Optional: verify SMTP connection
    await transporter.verify();

    // ✅ Email options
    const mailOptions = {
      from: `"SWAD Digital Solutions" <${process.env.CONTACT_EMAIL}>`, // Verified sender domain
      to: process.env.CONTACT_EMAIL, // Your receiving address
      replyTo: formData.email, // The user’s email
      subject: `Contact Form: ${formData.subject}`,
      html: createEmailTemplate(formData),
      text: `
        New Contact Form Submission

        Name: ${formData.name}
        Email: ${formData.email}
        Company: ${formData.company || "Not provided"}
        Phone: ${formData.phone || "Not provided"}
        Subject: ${formData.subject}

        Message:
        ${formData.message}

        Submitted: ${new Date().toLocaleString()}
      `,
    };

    // ✅ Send email
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result.messageId);

    return NextResponse.json(
      { success: true, message: "Email sent successfully", messageId: result.messageId },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

// Handle unsupported GET requests
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
