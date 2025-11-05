# Nodemailer Setup Instructions

## 1. Install Required Packages

Run the following command to install Nodemailer:

```bash
npm install nodemailer @types/nodemailer
```

If you encounter permission issues, try:

```bash
sudo npm install nodemailer @types/nodemailer
```

## 2. Environment Variables

Create a `.env.local` file in your project root:

```env
# ZeptoMail SMTP Configuration
SMTP_HOST=smtp.zeptomail.com
SMTP_PORT=587
SMTP_USER=your-zepto-username
SMTP_PASS=your-zepto-password
CONTACT_EMAIL=info@swaddigitalsolutions.com
```

## 3. ZeptoMail Setup

1. **Sign up for ZeptoMail**: Go to [ZeptoMail](https://zeptomail.com/)
2. **Get SMTP Credentials**:
   - Log into your ZeptoMail dashboard
   - Go to Settings → SMTP Configuration
   - Copy your SMTP username and password
   - Use these credentials in your `.env.local` file
3. **Verify Domain** (if using custom domain):
   - Add your domain in ZeptoMail dashboard
   - Verify domain ownership
   - Update DNS records as required

## 4. Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the submission

## 5. API Endpoint

The contact form now sends emails via:
- **Endpoint**: `/api/send-email`
- **Method**: POST
- **Content-Type**: application/json

## Features

✅ **Server-side Email Sending**: Uses Nodemailer with SMTP  
✅ **Professional Email Templates**: HTML formatted emails  
✅ **Form Validation**: Client and server-side validation  
✅ **Error Handling**: Comprehensive error handling  
✅ **Security**: Environment variables for credentials  
✅ **Reply-to Support**: Emails can be replied to directly  

## Troubleshooting

- **Permission Issues**: Fix npm permissions with `sudo chown -R 501:20 "/Users/opulencedeveloper/.npm"`
- **SMTP Errors**: Check your ZeptoMail SMTP settings in the dashboard
- **Authentication**: Make sure you're using the correct ZeptoMail username and password
- **Port Issues**: ZeptoMail uses port 587 with `secure: false`
- **Domain Issues**: If using custom domain, ensure it's verified in ZeptoMail
