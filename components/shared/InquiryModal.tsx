'use client';
import { useState, FormEvent } from 'react';
import { useModal } from '@/context/ModalContext';
import { useToast } from '@/context/ToastContext';

const SERVICES = [
  'Manpower Recruitment', 'Indian Visa', 'Tourist Visa', 'Air Ticketing',
  'Hajj & Umrah', 'Work Permit', 'Medical Visa', 'Student Visa', 'General Inquiry',
];

const DISTRICTS = [
  'Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna',
  'Barishal', 'Mymensingh', 'Rangpur', 'Other',
];

export default function InquiryModal() {
  const { isOpen, serviceName, closeModal } = useModal();
  const { showToast } = useToast();
  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    closeModal();
    showToast('✅', 'Inquiry Sent!', 'We will contact you within 24 hours.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className={`modal-overlay${isOpen ? ' active' : ''}`} id="inquiryModal">
      <div className="modal-box">
        <button className="modal-close" onClick={closeModal}>✕</button>
        <div className="service-badge">{serviceName}</div>
        <h2>Send an Inquiry</h2>
        <p className="sub">Fill in your details and our team will contact you within 24 hours.</p>

        <form onSubmit={handleSubmit} id="inquiryForm">
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" placeholder="Your full name" required />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" placeholder="01879994701" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>District</label>
              <select>
                <option value="">Select District</option>
                {DISTRICTS.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div className="form-group full">
              <label>Service Required *</label>
              <select
                value={selectedService || serviceName}
                onChange={e => setSelectedService(e.target.value)}
                required
              >
                <option value="">Select a Service</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group full">
              <label>Your Message</label>
              <textarea placeholder="Briefly describe your requirement..." />
            </div>
          </div>
          <button type="submit" className="modal-submit">
            📨 Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
