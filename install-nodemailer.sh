#!/bin/bash

echo "Installing Nodemailer packages..."

# Try to fix npm permissions first
echo "Attempting to fix npm permissions..."
sudo chown -R $(whoami) ~/.npm

# Install nodemailer
echo "Installing nodemailer..."
npm install nodemailer @types/nodemailer --save

echo "Installation complete!"
echo ""
echo "Next steps:"
echo "1. Create .env.local file with your ZeptoMail credentials"
echo "2. Update ContactForm.tsx to use /api/send-email instead of /api/test-email"
echo "3. Test the contact form"
