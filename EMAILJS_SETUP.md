# Setting Up EmailJS for Linda's Website Contact Form

This guide explains how to set up EmailJS to enable the contact form to send emails directly without a backend server.

## Prerequisites

- An EmailJS account (free tier is sufficient)
- Access to the email address where you want to receive form submissions
- The updated website code with EmailJS integration

## Step 1: Install Dependencies

The EmailJS library has already been added to the project's package.json. Install it by running:

```bash
cd /path/to/leh-website
npm install
```

## Step 2: Create an EmailJS Account

1. Visit [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free"
3. Complete the registration process
4. Verify your email address

## Step 3: Set Up an Email Service

1. Log in to your EmailJS dashboard
2. Navigate to "Email Services" in the left sidebar
3. Click "Add New Service"
4. Choose your email provider (Gmail, Outlook, or another provider)
5. Follow the authentication steps:
   - For Gmail, you'll need to grant permission for EmailJS to send emails on your behalf
   - For other providers, you'll need to provide SMTP details
6. Name your service (e.g., "Linda Website Contact")
7. Click "Create Service"
8. Note down the **Service ID** (it should look like "service_abc123")

## Step 4: Create an Email Template

1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Configure the template:

   **Subject Line:**
   ```
   New contact from {{name}}: {{subject}}
   ```

   **Content:**
   ```html
   <h2>New message from your website contact form</h2>
   <p><strong>From:</strong> {{name}} ({{email}})</p>
   <p><strong>Subject:</strong> {{subject}}</p>
   <h3>Message:</h3>
   <p>{{message}}</p>
   ```

4. In the right sidebar, under "To Email", enter your email address where you want to receive the messages
5. Under "Reply-To", enter `{{email}}` so you can reply directly to the person who contacted you
6. Save the template
7. Note down the **Template ID** (it should look like "template_xyz789")

## Step 5: Get Your Public Key

1. Go to "Account" in the dashboard
2. Find your **Public Key** under "API Keys" (it should look like "user_abcdef123456")

## Step 6: Update the Code

In the `src/components/ContactForm.js` file, replace the placeholder values with your actual EmailJS credentials:

```javascript
// Replace these with your actual EmailJS service, template, and user IDs
const serviceId = 'YOUR_SERVICE_ID'; // e.g., 'service_abc123'
const templateId = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xyz789'
const publicKey = 'YOUR_PUBLIC_KEY'; // e.g., 'user_abcdef123456'
```

Also, update the recipient email address in the hidden field if needed:

```javascript
<input 
  type="hidden" 
  name="to_email" 
  value="linda@lindahillmanchayes.com" 
/>
```

## Step 7: Test the Form

1. Run the website locally:
   ```bash
   npm run dev
   ```
2. Open http://localhost:3000/contact
3. Fill out the form and submit it
4. Check your email to see if you received the test message
5. If successful, commit and push your changes to GitHub, which will trigger a Vercel deployment

## Troubleshooting

If emails aren't being received:

1. **Check your spam folder**: Initially, emails might be marked as spam
2. **Verify your EmailJS credentials**: Ensure service ID, template ID, and public key are correct
3. **Check browser console**: Look for error messages in the browser's developer tools
4. **Email provider restrictions**: Some email providers may block automated emails

## Email Volume and Limits

The free tier of EmailJS includes:
- 200 emails per month
- 2 email templates
- 1 email service

This should be sufficient for Linda's website unless it receives a high volume of inquiries.

## Security Considerations

- The EmailJS public key is visible in the client-side code (this is normal and by design)
- EmailJS has built-in protection against form spam
- For additional security, consider enabling reCAPTCHA in your EmailJS dashboard

## Support and Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS FAQ](https://www.emailjs.com/docs/faq/)
- [Contact EmailJS Support](https://www.emailjs.com/contact/)
