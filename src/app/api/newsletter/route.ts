import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || "smtp.zeptomail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "emailapikey",
    pass: process.env.SMTP_PASS || "",
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const createNewsletterEmailTemplate = (email: string) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
      New Newsletter Subscription
    </h2>

    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #1e40af; margin-top: 0;">Subscriber Information</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subscribed:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Source:</strong> SWAD Digital Solutions Website Newsletter Form</p>
    </div>
  </div>
`;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport(SMTP_CONFIG);

    // Verify SMTP connection
    await transporter.verify();

    // Email options for notification
    const mailOptions = {
      from: `"SWAD Digital Solutions" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Newsletter Subscription: ${email}`,
      html: createNewsletterEmailTemplate(email),
      text: `
        New Newsletter Subscription

        Email: ${email}
        Subscribed: ${new Date().toLocaleString()}
        Source: SWAD Digital Solutions Website Newsletter Form
      `,
    };

    // Send notification email
    const result = await transporter.sendMail(mailOptions);
    console.log("Newsletter subscription notification sent:", result.messageId);

    // TODO: In production, you might want to:
    // 1. Store the email in a database
    // 2. Send a confirmation email to the subscriber
    // 3. Add to your email marketing platform (Mailchimp, SendGrid, etc.)

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing newsletter subscription:", error);
    return NextResponse.json(
      {
        error: "Failed to process subscription",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

