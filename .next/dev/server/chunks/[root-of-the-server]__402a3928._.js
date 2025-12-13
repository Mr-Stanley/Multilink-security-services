module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/mailersend.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendBookingNotification",
    ()=>sendBookingNotification,
    "sendContactNotification",
    ()=>sendContactNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mailersend$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mailersend/lib/index.js [app-route] (ecmascript)");
;
// Initialize MailerSend client
function getMailerSendClient() {
    const apiKey = process.env.MAILERSEND_API_KEY;
    if (!apiKey) {
        throw new Error("MAILERSEND_API_KEY is not configured");
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mailersend$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MailerSend"]({
        apiKey: apiKey
    });
}
async function sendContactNotification(data) {
    // Validate environment variables
    if (!process.env.MAILERSEND_API_KEY) {
        console.error("MAILERSEND_API_KEY is not set");
        throw new Error("Email service is not configured - MAILERSEND_API_KEY missing");
    }
    if (!process.env.MAILERSEND_FROM_EMAIL || !process.env.MAILERSEND_TO_EMAIL) {
        console.error("MAILERSEND_FROM_EMAIL or MAILERSEND_TO_EMAIL is not set");
        throw new Error("Email addresses are not configured");
    }
    // Initialize MailerSend client
    const mailersend = getMailerSendClient();
    // Trim whitespace from email addresses
    const fromEmail = process.env.MAILERSEND_FROM_EMAIL?.trim();
    const toEmail = process.env.MAILERSEND_TO_EMAIL?.trim();
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fromEmail || !emailRegex.test(fromEmail)) {
        throw new Error(`Invalid FROM_EMAIL format: ${fromEmail}`);
    }
    if (!toEmail || !emailRegex.test(toEmail)) {
        throw new Error(`Invalid TO_EMAIL format: ${toEmail}`);
    }
    const sentFrom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mailersend$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Sender"](fromEmail, "Multilink Security & Logistics LTD");
    const recipients = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mailersend$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Recipient"](toEmail, "Contact Team")
    ];
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
  `;
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
  `;
    const emailParams = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mailersend$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmailParams"]().setFrom(sentFrom).setTo(recipients).setReplyTo(sentFrom).setSubject(`New Contact Form Inquiry: ${data.service}`).setHtml(htmlContent).setText(textContent);
    try {
        const response = await mailersend.email.send(emailParams);
        return response;
    } catch (error) {
        console.error("Error sending email via MailerSend:", error);
        throw error;
    }
}
async function sendBookingNotification(data) {
    // Validate environment variables
    if (!process.env.MAILERSEND_API_KEY) {
        console.error("MAILERSEND_API_KEY is not set");
        throw new Error("Email service is not configured - MAILERSEND_API_KEY missing");
    }
    if (!process.env.MAILERSEND_FROM_EMAIL || !process.env.MAILERSEND_TO_EMAIL) {
        console.error("MAILERSEND_FROM_EMAIL or MAILERSEND_TO_EMAIL is not set");
        throw new Error("Email addresses are not configured");
    }
    // Initialize MailerSend client
    const mailersend = getMailerSendClient();
    // Trim whitespace from email addresses
    const fromEmail = process.env.MAILERSEND_FROM_EMAIL?.trim();
    const toEmail = process.env.MAILERSEND_TO_EMAIL?.trim();
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fromEmail || !emailRegex.test(fromEmail)) {
        throw new Error(`Invalid FROM_EMAIL format: ${fromEmail}`);
    }
    if (!toEmail || !emailRegex.test(toEmail)) {
        throw new Error(`Invalid TO_EMAIL format: ${toEmail}`);
    }
    const sentFrom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mailersend$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Sender"](fromEmail, "Multilink Security & Logistics LTD");
    const recipients = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mailersend$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Recipient"](toEmail, "Booking Team")
    ];
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
  `;
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
  `;
    const emailParams = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mailersend$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmailParams"]().setFrom(sentFrom).setTo(recipients).setReplyTo(sentFrom).setSubject(`New Booking Request: ${data.service}`).setHtml(htmlContent).setText(textContent);
    try {
        const response = await mailersend.email.send(emailParams);
        return response;
    } catch (error) {
        console.error("Error sending email via MailerSend:", error);
        throw error;
    }
}
}),
"[project]/app/api/contact/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mailersend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mailersend.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const data = await request.json();
        // Validate required fields
        if (!data.name || !data.email || !data.phone || !data.message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing required fields"
            }, {
                status: 400
            });
        }
        // Send email notification via MailerSend
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mailersend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendContactNotification"])({
                name: data.name,
                email: data.email,
                phone: data.phone,
                service: data.service || "General Inquiry",
                message: data.message
            });
            console.log("Contact form notification email sent successfully");
        } catch (emailError) {
            // Log the error but don't fail the request
            // This allows the contact form to be submitted even if email fails
            console.error("Failed to send contact form notification email:", emailError);
        // In production, you might want to queue the email for retry
        // or store it in a database for later processing
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Contact form submitted successfully"
        });
    } catch (error) {
        console.error("Error processing contact form:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to process contact form"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__402a3928._.js.map