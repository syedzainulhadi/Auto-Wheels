// ============================================================
// EmailJS Configuration
// Step 1: Go to https://emailjs.com → create account
// Step 2: Create a Service (Gmail etc.) → copy SERVICE_ID
// Step 3: Create an Email Template → copy TEMPLATE_ID
// Step 4: Account → API Keys → copy PUBLIC_KEY
// Step 5: Paste all three into your .env file
// ============================================================

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}