import Image from 'next/image';

export default function FounderBio() {
  return (
    <section className="founder-section">
      <div className="founder-card">
        <div className="founder-photo">
          <Image src="/images/owner.jpg" alt="MD Salahuddin Sarker" width={160} height={160} style={{ borderRadius: 20, objectFit: 'cover' }} />
          <div className="f-name">MD Salahuddin Sarker</div>
          <div className="f-title">Founder &amp; MD</div>
        </div>
        <div className="founder-content">
          <div className="section-tag">Meet the Owner</div>
          <h2 className="section-title" style={{ fontSize: '1.6rem' }}>
            A Message from Our <span>Founder</span>
          </h2>
          <p>
            &quot;আমি বিশ্বাস করি প্রতিটি মানুষের স্বপ্ন পূরণ করার অধিকার আছে — be it working abroad to support their family, performing Hajj, receiving medical care, or pursuing education. Mohammad Air International Travels was born from this belief.&quot;
          </p>
          <p>
            With over 15 years of hands-on experience in travel and immigration, I founded Mohammad Air International Travels to provide honest, affordable, and government-compliant travel services to everyday Bangladeshis. Every case we handle, we treat as if it were our own family member&apos;s journey. That&apos;s the Mohammad Air International Travels promise.
          </p>
          <div className="founder-stats">
            {[['15+', 'Years Experience'], ['5000+', 'Clients Served'], ['15+', 'Countries']].map(([n, l]) => (
              <div key={l} className="founder-stat">
                <div className="fs-n">{n}</div>
                <div className="fs-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
