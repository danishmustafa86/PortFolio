"use client";
import { useState } from 'react';
import Navbar from "@/app/components/Navbar";
import Section from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

const styles = {
  container: {
    margin: '0 auto',
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '40px 20px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    lineHeight: '1.6',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#2a2a2a',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '1rem',
    color: '#fff',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #444',
    borderRadius: '4px',
    backgroundColor: '#333',
    color: '#fff',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #444',
    borderRadius: '4px',
    backgroundColor: '#333',
    color: '#fff',
    height: '150px',
    resize: 'vertical',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '1.2rem',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#ff1a1a',
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setSuccess('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Failed to send the message. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while sending the message.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.about}>
        <h1 style={styles.title}>Contact Me</h1>
        <p style={styles.description}>
          Hello, I&apos;m Danish! If you have any questions, need assistance, or want to collaborate, feel free to reach out. I&apos;m always happy to connect and help in any way I can!
        </p>
      </div>
      <div style={styles.sectionContainer}>
        <Section />
      </div>
      <Footer />
    </div>
  );
}