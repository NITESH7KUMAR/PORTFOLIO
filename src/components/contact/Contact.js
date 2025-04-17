import React, { useState } from "react";
import { Send } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // simulate sending
    setTimeout(() => {
      alert("Message sent!");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
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
