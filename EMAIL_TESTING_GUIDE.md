# Email Testing Guide

## Current Status

The contact form is currently set up to work with ZeptoMail SMTP, but Nodemailer needs to be installed first.

## Testing Steps

### 1. Test Form Functionality (Current)

The form is currently using a test endpoint that logs form data without sending emails:

- **Endpoint**: `/api/test-email`
- **Status**: ✅ Working (logs form data to console)
- **Server**: Should be running on http://localhost:3000 or http://localhost:3001

**To test:**
1. Go to the contact page
2. Fill out the form
3. Submit the form
4. Check the browser console and server logs for the form data

### 2. Install Nodemailer

Run the installation script:
```bash
./install-nodemailer.sh
```

Or manually:
```bash
sudo chown -R $(whoami) ~/.npm
npm install nodemailer @types/nodemailer --save
```

### 3. Set Up Environment Variables

Create `.env.local` file:
```env
# ZeptoMail SMTP Configuration
SMTP_HOST=smtp.zeptomail.com
SMTP_PORT=587
SMTP_USER=your-zepto-username
SMTP_PASS=your-zepto-password
CONTACT_EMAIL=info@swaddigitalsolutions.com
```

### 4. Switch to Production Email Endpoint

Update `src/components/ContactForm.tsx`:
```typescript
// Change this line:
const response = await fetch('/api/test-email', {

// To this:
const response = await fetch('/api/send-email', {
```

### 5. Test Email Sending

1. Restart the development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the submission

## Troubleshooting

### Form Not Submitting
- Check browser console for errors
- Verify the API endpoint is accessible
- Check server logs for errors

### Email Not Sending
- Verify ZeptoMail credentials in `.env.local`
- Check ZeptoMail dashboard for SMTP settings
- Verify domain is verified in ZeptoMail (if using custom domain)
- Check server logs for SMTP errors

### Nodemailer Installation Issues
- Try: `sudo chown -R $(whoami) ~/.npm`
- Try: `npm cache clean --force`
- Try: `sudo npm install nodemailer @types/nodemailer --save`

## Current Test Endpoint Features

The test endpoint (`/api/test-email`) provides:
- ✅ Form validation
- ✅ Email format validation
- ✅ Console logging of form data
- ✅ Success/error responses
- ✅ Proper HTTP status codes

## Production Email Endpoint Features

The production endpoint (`/api/send-email`) will provide:
- ✅ All test endpoint features
- ✅ Actual email sending via ZeptoMail SMTP
- ✅ HTML-formatted emails
- ✅ Professional email templates
- ✅ Reply-to functionality

## Next Steps

1. **Install Nodemailer** using the provided script
2. **Set up ZeptoMail credentials** in `.env.local`
3. **Switch to production endpoint** in ContactForm.tsx
4. **Test email sending** with real SMTP
5. **Verify email delivery** in your inbox
