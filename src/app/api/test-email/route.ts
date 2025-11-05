import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the form data (for testing purposes)
    console.log('Form submission received:', {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending (replace with actual Nodemailer code once installed)
    const emailContent = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}

Submitted: ${new Date().toLocaleString()}
Source: SWAD Digital Solutions Website Contact Form
    `;

    console.log('Email content that would be sent:', emailContent);

    // For now, just return success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully (test mode)',
        data: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          timestamp: new Date().toISOString()
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing form:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process form submission',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
