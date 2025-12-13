import { MailerSend, EmailParams, Sender, Recipient } from "mailersend"

// Initialize MailerSend client
function getMailerSendClient() {
  const apiKey = process.env.MAILERSEND_API_KEY
  if (!apiKey) {
    throw new Error("MAILERSEND_API_KEY is not configured")
  }
  return new MailerSend({
    apiKey: apiKey,
  })
}

export interface BookingEmailData {
  name: string
  email: string
  phone: string
  company?: string
  service: string
  preferredDate?: string
  preferredTime?: string
  message?: string
}

export interface ContactEmailData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export async function sendContactNotification(data: ContactEmailData) {
  // Validate environment variables
  if (!process.env.MAILERSEND_API_KEY) {
    console.error("MAILERSEND_API_KEY is not set")
    throw new Error("Email service is not configured - MAILERSEND_API_KEY missing")
  }

  if (!process.env.MAILERSEND_FROM_EMAIL || !process.env.MAILERSEND_TO_EMAIL) {
    console.error("MAILERSEND_FROM_EMAIL or MAILERSEND_TO_EMAIL is not set")
    throw new Error("Email addresses are not configured")
  }

  // Initialize MailerSend client
  const mailersend = getMailerSendClient()

  // Trim whitespace from email addresses
  const fromEmail = process.env.MAILERSEND_FROM_EMAIL?.trim()
  const toEmail = process.env.MAILERSEND_TO_EMAIL?.trim()

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!fromEmail || !emailRegex.test(fromEmail)) {
    throw new Error(`Invalid FROM_EMAIL format: ${fromEmail}`)
  }
  if (!toEmail || !emailRegex.test(toEmail)) {
    throw new Error(`Invalid TO_EMAIL format: ${toEmail}`)
  }

  const sentFrom = new Sender(fromEmail, "Multilink Security & Logistics LTD")
  const recipients = [new Recipient(toEmail, "Contact Team")]

  // HTML email content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #2e2d4d; color: #f5edf0; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: #faf4d3; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { margin-bottom: 20px; }
        .label { font-weight: bold; color: #2e2d4d; }
        .value { margin-left: 10px; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Inquiry</h2>
        </div>
        <div class="content">
          <div class="section">
            <h3>Contact Information</h3>
            <p><span class="label">Name:</span> <span class="value">${data.name}</span></p>
            <p><span class="label">Email:</span> <span class="value">${data.email}</span></p>
            <p><span class="label">Phone:</span> <span class="value">${data.phone}</span></p>
            <p><span class="label">Service Interested In:</span> <span class="value">${data.service}</span></p>
          </div>
          
          <div class="section">
            <h3>Message</h3>
            <p>${data.message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div class="footer">
            <p>This inquiry was submitted from the MULTILINK SECURITY & Logistics LTD website contact form.</p>
            <p>Please respond to the client within 24 hours.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  // Plain text version
  const textContent = `
New Contact Form Inquiry

Contact Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Service Interested In: ${data.service}

Message:
${data.message}

---
This inquiry was submitted from the MULTILINK SECURITY & Logistics LTD website contact form.
Please respond to the client within 24 hours.
  `

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(`New Contact Form Inquiry: ${data.service}`)
    .setHtml(htmlContent)
    .setText(textContent)

  try {
    const response = await mailersend.email.send(emailParams)
    return response
  } catch (error) {
    console.error("Error sending email via MailerSend:", error)
    throw error
  }
}

export async function sendBookingNotification(data: BookingEmailData) {
  // Validate environment variables
  if (!process.env.MAILERSEND_API_KEY) {
    console.error("MAILERSEND_API_KEY is not set")
    throw new Error("Email service is not configured - MAILERSEND_API_KEY missing")
  }

  if (!process.env.MAILERSEND_FROM_EMAIL || !process.env.MAILERSEND_TO_EMAIL) {
    console.error("MAILERSEND_FROM_EMAIL or MAILERSEND_TO_EMAIL is not set")
    throw new Error("Email addresses are not configured")
  }

  // Initialize MailerSend client
  const mailersend = getMailerSendClient()

  // Trim whitespace from email addresses
  const fromEmail = process.env.MAILERSEND_FROM_EMAIL?.trim()
  const toEmail = process.env.MAILERSEND_TO_EMAIL?.trim()

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!fromEmail || !emailRegex.test(fromEmail)) {
    throw new Error(`Invalid FROM_EMAIL format: ${fromEmail}`)
  }
  if (!toEmail || !emailRegex.test(toEmail)) {
    throw new Error(`Invalid TO_EMAIL format: ${toEmail}`)
  }

  const sentFrom = new Sender(fromEmail, "Multilink Security & Logistics LTD")
  const recipients = [new Recipient(toEmail, "Booking Team")]

  // HTML email content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #2e2d4d; color: #f5edf0; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: #faf4d3; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { margin-bottom: 20px; }
        .label { font-weight: bold; color: #2e2d4d; }
        .value { margin-left: 10px; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Security Service Booking Request</h2>
        </div>
        <div class="content">
          <div class="section">
            <h3>Client Information</h3>
            <p><span class="label">Name:</span> <span class="value">${data.name}</span></p>
            <p><span class="label">Email:</span> <span class="value">${data.email}</span></p>
            <p><span class="label">Phone:</span> <span class="value">${data.phone}</span></p>
            <p><span class="label">Company:</span> <span class="value">${data.company || "N/A"}</span></p>
          </div>
          
          <div class="section">
            <h3>Service Details</h3>
            <p><span class="label">Requested Service:</span> <span class="value">${data.service}</span></p>
            <p><span class="label">Preferred Date:</span> <span class="value">${data.preferredDate || "Not specified"}</span></p>
            <p><span class="label">Preferred Time:</span> <span class="value">${data.preferredTime || "Not specified"}</span></p>
          </div>
          
          ${data.message ? `
          <div class="section">
            <h3>Additional Details</h3>
            <p>${data.message.replace(/\n/g, "<br>")}</p>
          </div>
          ` : ""}
          
          <div class="footer">
            <p>This booking was submitted from the MULTILINK SECURITY & Logistics LTD website.</p>
            <p>Please respond to the client within 24 hours.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  // Plain text version
  const textContent = `
New Security Service Booking Request

Client Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Company: ${data.company || "N/A"}

Service Details:
- Requested Service: ${data.service}
- Preferred Date: ${data.preferredDate || "Not specified"}
- Preferred Time: ${data.preferredTime || "Not specified"}

Additional Details:
${data.message || "No additional details provided"}

---
This booking was submitted from the MULTILINK SECURITY & Logistics LTD website.
Please respond to the client within 24 hours.
  `

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(`New Booking Request: ${data.service}`)
    .setHtml(htmlContent)
    .setText(textContent)

  try {
    const response = await mailersend.email.send(emailParams)
    return response
  } catch (error) {
    console.error("Error sending email via MailerSend:", error)
    throw error
  }
}

