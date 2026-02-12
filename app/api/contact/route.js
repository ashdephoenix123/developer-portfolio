import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: `${name} (via Portfolio)`,
          email: "akashsarki24@gmail.com",
        },
        to: [{ email: "akashsarki12345@gmail.com", name: "Akash Sarki" }],
        replyTo: { email, name },
        subject: subject || `Portfolio message from ${name}`,
        htmlContent: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #6366f1;">New message from your portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr style="border: 1px solid #eee;" />
            <p style="white-space: pre-wrap;">${message}</p>
            <hr style="border: 1px solid #eee;" />
            <p style="color: #999; font-size: 12px;">
              You can reply directly to ${email}
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Brevo error:", error);
      return NextResponse.json(
        { message: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "Some error occurred, Please try again!" },
      { status: 500 }
    );
  }
}