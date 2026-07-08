'use client';
import { useModal } from '@/context/ModalContext';
import Image from 'next/image';

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src="/images/logo.png" alt="Mohammod Air International Travels" width={50} height={50} className="footer-logo" />
          <div className="brand">Mohammod Air International Travels</div>
          <p>Your trusted travel and visa consultancy in Bangladesh. Serving clients across the nation with professionalism, transparency, and heart since 2012.</p>
          <div className="social-links">
            <a className="social-btn" href="#" title="Facebook">📘</a>
            <a className="social-btn" href="https://wa.me/8801879994701" title="WhatsApp">💬</a>
            <a className="social-btn" href="#" title="YouTube">▶️</a>
            <a className="social-btn" href="#" title="Instagram">📸</a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><span>→</span> <a href="/">Home</a></li>
            <li><span>→</span> <a href="/#services">Services</a></li>
            <li><span>→</span> <a href="/profile">About Us</a></li>
            <li><span>→</span> <a href="/profile#contact-section">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Our Services</h4>
          <ul>
            <li onClick={() => openModal('Manpower Recruitment')}><span>✈️</span> Manpower Recruitment</li>
            <li onClick={() => openModal('Indian Visa')}><span>🇮🇳</span> Indian Visa</li>
            <li onClick={() => openModal('Tourist Visa')}><span>🌍</span> Tourist Visa</li>
            <li onClick={() => openModal('Hajj & Umrah')}><span>🕌</span> Hajj & Umrah</li>
            <li onClick={() => openModal('Air Ticketing')}><span>🎫</span> Air Ticketing</li>
            <li onClick={() => openModal('Student Visa')}><span>🎓</span> Student Visa</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><span>📍</span> Head office: 14/6 lift 13 west, China Town Nayapaltan,Dhaka</li>
            <li><span>📞</span> 01775725566</li>
            <li><span>📱</span> 01879994701 (WhatsApp)</li>
            <li><span>✉️</span> mohammadairtravels1@gmail.com</li>
            <li><span>✉️</span> reservation@mohammadairint.com</li>
            <li><span>🕐</span> Sat–Thu: 9AM – 7PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Mohammod Air International Travels. All rights reserved. | ATAB Reg. | BAIRA Member</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
