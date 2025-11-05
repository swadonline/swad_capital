# Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# ZeptoMail SMTP Configuration
SMTP_HOST=smtp.zeptomail.com
SMTP_PORT=587
SMTP_USER=your-zepto-username
SMTP_PASS=your-zepto-password

# Contact Email (where form submissions will be sent)
CONTACT_EMAIL=info@swaddigitalsolutions.com
```

## ZeptoMail Setup Instructions

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

## Other Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

### ZeptoMail (Current Configuration)
```env
SMTP_HOST=smtp.zeptomail.com
SMTP_PORT=587
SMTP_USER=your-zepto-username
SMTP_PASS=your-zepto-password
```

### Custom SMTP
Check with your hosting provider or email service for SMTP settings.

## Security Notes

- Never commit `.env.local` to version control
- Use strong passwords for SMTP authentication
- Consider using environment-specific configurations for production
- ZeptoMail provides secure SMTP with authentication
