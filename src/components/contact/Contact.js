import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_4a9yfup",       // Replace with EmailJS service ID
        "template_2tpurcj",      // Replace with EmailJS template ID
        formRef.current,
        "Tjre9B3vhQcw3mLQs"        // Replace with EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              id="name" 
              name="name" 
              required 
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required 
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="sending">
                <span className="spinner" /> Sending...
              </span>
            ) : (
              <span className="send-btn">
                Send Message <Send size={16} />
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;