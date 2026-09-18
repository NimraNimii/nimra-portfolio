import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Valid email address is required." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
      return NextResponse.json(
        { error: "Subject is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      // Send email via Resend API
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ["nimiiwritess@gmail.com"],
          reply_to: sanitizedData.email,
          subject: `Portfolio Contact: ${sanitizedData.subject} (from ${sanitizedData.name})`,
          html: `
            <h2>New Portfolio Message</h2>
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f4f4f5; padding: 12px; border-left: 4px solid #2DD4BF;">
              ${sanitizedData.message.replace(/\n/g, "<br>")}
            </blockquote>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json();
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          { error: "Failed to send message via email provider." },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: true, message: "Your message has been sent successfully!" },
        { status: 200 }
      );
    } else {
      // Fallback mode when RESEND_API_KEY is not configured yet
      console.log("Contact submission received (Demo mode):", sanitizedData);

      return NextResponse.json(
        {
          success: true,
          mode: "demo",
          message:
            "Your message has been received! (Production RESEND_API_KEY can be added to .env to enable instant email delivery).",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
