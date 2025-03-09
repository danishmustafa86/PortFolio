"use client";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        toast.success('Message sent successfully!', { position: 'top-center' });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        toast.error('Failed to send the message.', { position: 'top-center' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred while sending the message.', { position: 'top-center' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-20 p-8 bg-white rounded-lg shadow-lg">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <FaEnvelope className="text-red-600 mr-4" size={24} />
              <p className="text-gray-700">danishmustafa86@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-red-600 mr-4" size={24} />
              <p className="text-gray-700">Faisalabad, Pakistan</p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/danishmustafa86/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/danishmustafa86"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.facebook.com/danish.jajja.56"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-400 transition-colors duration-300"
              >
                <FaFacebook size={28} />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Location</h2>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.036120600963!2d73.0805313151363!3d31.48188198138774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0x4c4a7e5a8a5a5a5a!2sFaisalabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1621234567890!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}