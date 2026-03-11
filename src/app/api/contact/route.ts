import { NextRequest, NextResponse } from 'next/server';
import { getUncachableResendClient } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const { client, fromEmail } = await getUncachableResendClient();

    const senderAddress = fromEmail || 'onboarding@resend.dev';

    await client.emails.send({
      from: `Colin McGinness Website <${senderAddress}>`,
      to: 'colin_mcginness@yahoo.com',
      replyTo: email,
      subject: `Contact Form: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 1px solid #eee;" />
          <h3 style="color: #333;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr style="border: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Sent from colinmcginness.com contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
