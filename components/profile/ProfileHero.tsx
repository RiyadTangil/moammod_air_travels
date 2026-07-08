'use client';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';

export default function ProfileHero() {
  const { openModal } = useModal();

  return (
    <section className="profile-hero">
      <div className="profile-hero-inner">
        {/* Owner Card */}
        <div className="profile-owner-card">
          <div className="owner-photo-wrap">
            <Image
              src="/images/owner.jpg"
              alt="Mohammod Air International Travels Owner"
              width={140}
              height={140}
              className="owner-photo"
            />
            <div className="owner-badge">✓</div>
          </div>
          <h2>Md. Salah Uddin</h2>
          <div className="title">Founder &amp; Managing Director</div>
          <div className="exp">15+ Years in Travel Industry</div>

          <ul className="owner-contact-list">
            <li><span>📞</span> 01775725566</li>
            <li><span>📱</span> 01879994701 (WhatsApp)</li>
            <li><span>✉️</span>mohammadairtravels1@gmail.com</li>
            <li><span>✉️</span>reservation@mohammadairint.com</li>
            <li><span>📍</span> Head office: 14/6 lift 13 west, China Town Nayapaltan,Dhaka</li>
            <li><span>🕐</span> Sat–Thu: 9AM – 7PM</li>
          </ul>

          <div className="owner-action-btns">
            <a href="https://wa.me/8801879994701" className="btn-wa">💬 WhatsApp</a>
            <button className="btn-inquiry" onClick={() => openModal('General Inquiry')}>✈️ Inquiry</button>
          </div>
        </div>

        {/* Agency Info */}
        <div className="profile-agency-info">
          <div className="section-tag">About the Company</div>
          <h1 className="agency-name">MA <span>Travels</span></h1>
          <div className="agency-tagline">✈️ আপনার বিশ্বস্ত ভ্রমণ সঙ্গী — Your Trusted Travel Companion</div>
          <p className="agency-desc">
            Mohammod Air International Travels is a government-registered travel and immigration consultancy firm based in Dhaka, Bangladesh. Since our establishment in 2012, we have been helping thousands of Bangladeshi citizens — workers, students, pilgrims, tourists, and medical patients — achieve their travel goals safely and legally.
            <br /><br />
            We specialize in visa processing, air ticketing, manpower recruitment, Hajj &amp; Umrah arrangements, and work permit services across the Gulf, South East Asia, and beyond.
          </p>

          <div className="info-tags">
            {['🏛️ ATAB Member', '✈️ IATA Accredited', '🏢 BAIRA Registered', '📜 Govt. Licensed (RL No. XXXXXX)', '📅 Est. 2012'].map(tag => (
              <div key={tag} className="info-tag">
                <span>{tag.split(' ')[0]}</span>
                <span>{tag.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>

          <div className="agency-stats-row">
            {[['12+', 'Years Active'], ['5000+', 'Happy Clients'], ['98%', 'Success Rate'], ['15+', 'Countries']].map(([n, l]) => (
              <div key={l} className="agency-stat">
                <div className="n">{n}</div>
                <div className="l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
