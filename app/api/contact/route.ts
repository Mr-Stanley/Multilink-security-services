import { NextResponse } from "next/server"
import { sendContactNotification } from "@/lib/mailersend"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email notification via MailerSend
    try {
      await sendContactNotification({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service || "General Inquiry",
        message: data.message,
      })

      console.log("Contact form notification email sent successfully")
    } catch (emailError) {
      // Log the error but don't fail the request
      // This allows the contact form to be submitted even if email fails
      console.error("Failed to send contact form notification email:", emailError)
      
      // In production, you might want to queue the email for retry
      // or store it in a database for later processing
    }

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}

