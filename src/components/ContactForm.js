"use client";

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    isSubmitting: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (formStatus.isSubmitting) return;
    
    // Set submitting state
    setFormStatus(prev => ({
      ...prev,
      isSubmitting: true,
      message: 'Sending your message...'
    }));

    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      const serviceId = 'YOUR_SERVICE_ID'; // e.g., 'service_abc123'
      const templateId = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xyz789'
      const publicKey = 'YOUR_PUBLIC_KEY'; // e.g., 'user_abcdef123456'
      
      // Create a maximum timeout of 20 seconds
      const timeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timed out')), 20000)
      );
      
      // Send the email with a timeout
      const emailResult = await Promise.race([
        emailjs.sendForm(serviceId, templateId, form.current, publicKey),
        timeout
      ]);
      
      console.log('Email sent successfully:', emailResult.text);
      
      // Success state
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent. Thank you!',
        isSubmitting: false
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Error state with user-friendly message
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Sorry, there was a problem sending your message. Please try again or email directly.',
        isSubmitting: false
      });
    }
  };
  
  const handleTryAgain = () => {
    setFormStatus({
      submitted: false,
      success: false,
      message: '',
      isSubmitting: false
    });
  };
  
  return (
    <div className={styles.formContainer}>
      {formStatus.submitted ? (
        <div className={formStatus.success ? styles.success : styles.error}>
          <p>{formStatus.message}</p>
          {!formStatus.success && (
            <button 
              onClick={handleTryAgain}
              className={styles.tryAgainButton}
            >
              Try Again
            </button>
          )}
        </div>
      ) : (
        <form ref={form} className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={formStatus.isSubmitting}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={formStatus.isSubmitting}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={formStatus.isSubmitting}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              disabled={formStatus.isSubmitting}
            ></textarea>
          </div>
          
          {/* Hidden field for recipient email - update this with the actual recipient email */}
          <input 
            type="hidden" 
            name="to_email" 
            value="linda@lindahillmanchayes.com" 
          />
          
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={formStatus.isSubmitting}
          >
            {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {formStatus.isSubmitting && (
            <div className={styles.loadingIndicator}>
              <p>Sending your message...</p>
            </div>
          )}
        </form>
      )}
      
      <p className={styles.privacyNote}>
        Your information will only be used to respond to your inquiry and will not be shared with third parties.
      </p>
    </div>
  );
}