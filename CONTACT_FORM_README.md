# Contact Form Implementation

This document explains the implementation of the EmailJS-powered contact form for Linda Hillman Chayes' website.

## Overview

The contact form has been enhanced with EmailJS integration, allowing it to send emails directly from the browser to the specified email address without the need for a backend server. This makes it easy to deploy on static hosting platforms like Vercel while still providing full contact form functionality.

## Key Features

- **Direct Email Delivery**: Form submissions are sent directly to Linda's email
- **No Backend Required**: Works with static site hosting
- **Error Handling**: Proper error messages and retry functionality
- **Loading States**: Visual feedback during form submission
- **Form Validation**: Client-side validation for required fields
- **Spam Protection**: Basic protections through EmailJS
- **Reply-To Header**: Email replies go directly to the sender

## Implementation Details

### Dependencies

- **@emailjs/browser**: Handles the email sending functionality

### Files Modified

1. **package.json**: Added EmailJS dependency
2. **src/components/ContactForm.js**: Updated with EmailJS integration
3. **src/components/ContactForm.module.css**: Added styles for new UI states

### Key Code Changes

1. Form submission now uses EmailJS:
```javascript
const emailResult = await emailjs.sendForm(
  serviceId, 
  templateId, 
  form.current, 
  publicKey
);
```

2. Added timeout handling to prevent hanging requests:
```javascript
const timeout = new Promise((_, reject) => 
  setTimeout(() => reject(new Error('Request timed out')), 20000)
);

const emailResult = await Promise.race([
  emailjs.sendForm(serviceId, templateId, form.current, publicKey),
  timeout
]);
```

3. Enhanced error handling:
```javascript
try {
  // Email sending logic
} catch (error) {
  console.error('Error sending email:', error);
  setFormStatus({
    submitted: true,
    success: false,
    message: 'Sorry, there was a problem sending your message. Please try again or email directly.',
    isSubmitting: false
  });
}
```

4. Added loading states:
```javascript
{formStatus.isSubmitting && (
  <div className={styles.loadingIndicator}>
    <p>Sending your message...</p>
  </div>
)}
```

5. Included privacy notice:
```jsx
<p className={styles.privacyNote}>
  Your information will only be used to respond to your inquiry and will not be shared with third parties.
</p>
```

## Setup Instructions

Detailed setup instructions for EmailJS can be found in the `EMAILJS_SETUP.md` file. The implementation requires three key values from EmailJS:

1. **Service ID**: Identifies your email service
2. **Template ID**: Identifies your email template
3. **Public Key**: Authenticates your account

These values need to be inserted into the ContactForm.js file before the form will work properly.

## Testing

After setting up EmailJS, test the form by:

1. Filling out all fields
2. Submitting the form
3. Verifying receipt of the email
4. Testing error states by temporarily using incorrect EmailJS credentials

## Future Enhancements

Possible future improvements to consider:

- Add reCAPTCHA integration for better spam protection
- Implement form analytics to track inquiry types
- Create an auto-responder to confirm receipt
- Set up email templates for different inquiry types
- Implement email forwarding rules for different subjects