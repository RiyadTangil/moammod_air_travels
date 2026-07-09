const FEATURES = [
  { icon: '⚡', title: 'Lightning Fast Processing', desc: 'We process Indian visa applications in as little as 3 working days and air tickets within 2 hours. Speed is our priority.' },
  { icon: '🛡️', title: '100% Legal & Transparent', desc: 'Government-registered agency with ATAB & BAIRA membership. No hidden fees, full documentation, complete transparency.' },
  { icon: '🌐', title: 'Pan-Bangladesh Coverage', desc: 'Serving clients from Dhaka, Chittagong, Sylhet, Rajshahi, Khulna and beyond. Home visit service available.' },
  { icon: '🤝', title: 'Dedicated Client Support', desc: 'Each client gets a dedicated case manager. WhatsApp, phone, and in-person support — we are always reachable.' },
  { icon: '💰', title: 'Best Price Guarantee', desc: 'Competitive and transparent pricing. We match or beat any comparable offer. Flexible payment plans available.' },
];

export default function WhyUs() {
  return (
    <section className="why-section">
      <div className="section-tag">Why Mohammad Air International Travels</div>
      <h2 className="section-title">Why <span>Thousands Trust</span> Us</h2>

      <div className="why-grid">
        <div className="why-left">
          <div className="why-visual">
            <div style={{ fontSize: '5rem' }}>✈️</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, background: 'linear-gradient(90deg, #42A5F5, #66BB6A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>12+</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Years of Excellence</div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {['ATAB', 'IATA', 'Govt'].map((label, i) => (
                <div key={label} style={{ background: i === 1 ? 'rgba(76,175,80,0.15)' : 'rgba(21,101,192,0.2)', border: `1px solid ${i === 1 ? 'rgba(76,175,80,0.25)' : 'rgba(66,165,245,0.2)'}`, borderRadius: 12, padding: '10px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: i === 1 ? '#66BB6A' : '#42A5F5' }}>{label}</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)' }}>{i === 0 ? 'Member' : i === 1 ? 'Accredited' : 'Approved'}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="why-features">
          {FEATURES.map(f => (
            <div className="feature-item" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
