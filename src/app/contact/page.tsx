'use client';

import { useState } from 'react';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { sendEmail } from './actions';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('loading');

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      setFormStatus('success');
    } else {
      setFormStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8" style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-indigo-600">Contact Us</h1>
        <p className="text-xl mb-8 text-center text-gray-600">
          We&apos;d love to hear from you. Get in touch with our team.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button type="submit" 
                className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {formStatus === 'success' && (
              <p className="mt-4 text-green-600">Your message has been sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="mt-4 text-red-600">There was an error sending your message. Please try again.</p>
            )}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Have questions about our AI image generation platform? Want to learn more about our pricing or features? Our team is here to help.
            </p>
            <ul className="text-gray-600 mb-4">
              <li className="mb-2"><strong>Email:</strong> support@yourcompany.com</li>
              <li className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</li>
              <li><strong>Address:</strong> 123 AI Street, Tech City, TC 12345</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Business Hours</h2>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM (EST)<br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}