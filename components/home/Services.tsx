'use client';
import { useModal } from '@/context/ModalContext';

const SERVICES = [
  { icon: '👷', badge: 'Most Popular', name: 'Manpower Recruitment', desc: 'We source and deploy skilled Bangladeshi workers to Malaysia, Qatar, Saudi Arabia, UAE and more with full legal documentation.', cta: 'Apply Now' },
  { icon: '🇮🇳', badge: 'Quick Processing', name: 'Indian Visa', desc: 'Tourist, medical, and business visa for India. Single & multiple entry options available with door-to-door service across Bangladesh.', cta: 'Apply Now' },
  { icon: '🌍', badge: '40+ Countries', name: 'Tourist Visa', desc: 'Schengen, UK, USA, Thailand, Singapore, Malaysia, and more. We handle all paperwork so you can focus on your trip.', cta: 'Apply Now' },
  { icon: '✈️', badge: 'Best Prices', name: 'Air Ticketing', desc: 'Domestic & international flight bookings at the best rates. All major airlines — Biman, Emirates, Qatar Airways, Air Arabia, and more.', cta: 'Book Now' },
  { icon: '🕌', badge: 'Govt. Approved', name: 'Hajj & Umrah', desc: 'Comprehensive Hajj & Umrah packages including visa, flights, accommodation in Makkah & Madinah, transport and group guidance.', cta: 'View Packages' },
  { icon: '📋', badge: 'Gulf & Asia', name: 'Work Permit', desc: 'Legal work permit processing for Saudi Arabia, Malaysia, Qatar, UAE, Oman, Bahrain. Full documentation and embassy follow-up.', cta: 'Apply Now' },
  { icon: '🏥', badge: 'India & Thailand', name: 'Medical Visa', desc: 'Urgent medical visa for India, Thailand, Singapore. Hospital appointment assistance, language support, and accommodation help.', cta: 'Apply Now' },
  { icon: '🎓', badge: 'Canada • Australia • UK', name: 'Student Visa', desc: 'Complete student visa consultancy — IELTS guidance, university admission support, visa filing for Canada, Australia, UK, USA, Malaysia.', cta: 'Apply Now' },
];

export default function Services() {
  const { openModal } = useModal();

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <div>
          <div className="section-tag">What We Offer</div>
          <h2 className="section-title">Our <span>Premium</span> Services</h2>
          <p className="section-sub">Complete travel solutions tailored for Bangladeshi clients — from document processing to international placements.</p>
        </div>
        <button className="btn-primary" onClick={() => openModal('General Inquiry')}>
          💬 Get Free Consultation
        </button>
      </div>

      <div className="services-grid" id="servicesGrid">
        {SERVICES.map(svc => (
          <div className="service-card" key={svc.name} onClick={() => openModal(svc.name)}>
            <div className="service-icon">{svc.icon}</div>
            <div className="card-badge">{svc.badge}</div>
            <h3>{svc.name}</h3>
            <p>{svc.desc}</p>
            <div className="card-link">{svc.cta} <span>→</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}
