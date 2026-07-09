'use client';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';

const SERVICES = [
  {
    icon: '👷',
    badge: 'Most Popular',
    name: 'Manpower',
    cta: 'Apply Now',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    color: '#38BDF8',
  },
  {
    icon: '🇮🇳',
    badge: 'Quick Processing',
    name: 'Indian Visa',
    cta: 'Apply Now',
    img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80',
    color: '#38BDF8',
  },
  {
    icon: '🌍',
    badge: '40+ Countries',
    name: 'Tourist Visa',
    cta: 'Apply Now',
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
    color: '#38BDF8',
  },
  {
    icon: '✈️',
    badge: 'Best Prices',
    name: 'Air Ticketing',
    cta: 'Book Now',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
    color: '#38BDF8',
  },
  {
    icon: '🕌',
    badge: 'Govt. Approved',
    name: 'Hajj & Umrah',
    cta: 'View Packages',
    img: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&q=80',
    color: '#38BDF8',
  },
  {
    icon: '📋',
    badge: 'Gulf & Asia',
    name: 'Work Permit',
    cta: 'Apply Now',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
    color: '#38BDF8',
  },
  {
    icon: '🏥',
    badge: 'India & Thailand',
    name: 'Medical Visa',
    cta: 'Apply Now',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    color: '#38BDF8',
  },
  {
    icon: '🎓',
    badge: 'Canada • Australia • UK',
    name: 'Student Visa',
    cta: 'Apply Now',
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
    color: '#38BDF8',
  },
  {
    icon: '📘',
    badge: 'Fast Service',
    name: 'Passport',
    cta: 'Apply Now',
    img: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80',
    color: '#38BDF8',
  },
  {
    icon: '🛡️',
    badge: 'Official Clearance',
    name: 'Police Clearance',
    cta: 'Apply Now',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
    color: '#38BDF8',
  },
  {
    icon: '🏋️',
    badge: 'Govt. Certified',
    name: 'PDO / Training',
    cta: 'Enroll Now',
    img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80',
    color: '#38BDF8',
  },
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
            {/* Image area */}
            <div className="svc-img-wrap">
              <Image
                src={svc.img}
                alt={svc.name}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="svc-img"
              />
              <div className="svc-img-overlay" />
              <div
                className="svc-float-icon"
                style={{
                  background: svc.color + '22',
                  borderColor: svc.color + '66',
                  color: '#fff',
                }}
              >
                {svc.icon}
              </div>
              <div
                className="svc-float-badge"
                style={{
                  background: svc.color + '22',
                  borderColor: svc.color + '66',
                  color: '#fff',
                }}
              >
                {svc.badge}
              </div>
            </div>

            {/* Content */}
            <div className="svc-body">
              <h3 className="svc-title">{svc.name}</h3>
              <div className="svc-cta">
                <span>{svc.cta}</span>
                <span className="svc-arrow">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
