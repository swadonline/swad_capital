'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Send form data to API route (using test endpoint for now)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      console.log('Email sent successfully:', result);
      
      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      setSubmitStatus('success');
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-bold text-primary mb-6 animate-fade-in-down">
        Send us a Message
      </h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-bounce-in">
            Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg animate-bounce-in">
            Sorry, there was an error sending your message. Please try again or contact us directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 stagger-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="animate-fade-in-left">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover-scale transition-all duration-300"
            />
          </div>
          
          <div className="animate-fade-in-right">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover-scale transition-all duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover-scale transition-all duration-300"
            />
          </div>
          
          <div className="animate-fade-in-right" style={{ animationDelay: '0.1s' }}>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover-scale transition-all duration-300"
            />
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover-scale transition-all duration-300"
          >
            <option value="">Select a subject</option>
            <option value="enterprise-software">Enterprise Software</option>
            <option value="cloud-infrastructure">Cloud Infrastructure</option>
            <option value="cybersecurity">Cybersecurity & Data Protection</option>
            <option value="managed-services">Managed IT Services</option>
            <option value="partnership">Partnership Opportunities</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical hover-scale transition-all duration-300"
            placeholder="Tell us about your project or requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white text-lg py-4 px-6 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
          style={{ animationDelay: '0.4s' }}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin-slow mr-2">⏳</span>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}
