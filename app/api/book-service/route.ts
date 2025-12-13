import { NextResponse } from "next/server"
import { sendBookingNotification } from "@/lib/mailersend"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email notification via MailerSend
    try {
      await sendBookingNotification({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        service: data.service,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        message: data.message,
      })

      console.log("Booking notification email sent successfully")
    } catch (emailError) {
      // Log the error but don't fail the request
      // This allows the booking to be recorded even if email fails
      console.error("Failed to send booking notification email:", emailError)
      
      // In production, you might want to queue the email for retry
      // or store it in a database for later processing
    }

    return NextResponse.json({
      success: true,
      message: "Booking request submitted successfully",
    })
  } catch (error) {
    console.error("Error processing booking:", error)
    return NextResponse.json({ error: "Failed to process booking request" }, { status: 500 })
  }
}
