const TESTIMONIALS = [
  { initials: 'RK', name: 'Rahim Karim', role: 'Businessman, Chittagong', stars: 5, quote: 'Indian visa approved in just 4 days! The team at Mohammod Air International Travels handled everything professionally. No hidden charges, very honest service. Highly recommended for anyone needing visa assistance.' },
  { initials: 'JH', name: 'Jamal Hossain', role: 'Factory Owner, Gazipur', stars: 5, quote: 'I sent 3 workers to Malaysia through Mohammod Air International Travels. The whole process — medical, visa, flight — was handled smoothly. My workers got jobs safely and are doing great. Trust them 100%.' },
  { initials: 'FA', name: 'Fatema Akter', role: 'Teacher, Sylhet', stars: 5, quote: 'Our Umrah package was excellent. Hotel was close to Haram, flights on time, and the group guide was very knowledgeable. Mohammod Air International Travels made our spiritual journey truly unforgettable.' },
  { initials: 'SA', name: 'Sabbir Ahmed', role: 'Student, Dhaka', stars: 4, quote: 'Got my UK student visa processed through them. The team explained every document I needed. It took a bit longer than expected but in the end everything worked perfectly.' },
  { initials: 'MR', name: 'Mizanur Rahman', role: 'Service Holder, Rajshahi', stars: 5, quote: 'Medical visa to India for my mother — they arranged everything within 2 days including hospital appointment confirmation. Very caring and professional staff. May Allah bless them.' },
  { initials: 'NK', name: 'Nasreen Khan', role: 'HR Manager, Dhaka', stars: 5, quote: 'Best air ticket prices in Dhaka! Booked 5 tickets to Dubai for my team through Mohammod Air International Travels. They provided all airline choices and we got a great deal. Will definitely use again.' },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" style={{ padding: '100px 8%', background: 'linear-gradient(180deg, var(--dark-bg) 0%, var(--dark-card) 100%)' }}>
      <div style={{ textAlign: 'center', marginBottom: '52px' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>Client Reviews</div>
        <h2 className="section-title">What Our <span>Clients Say</span></h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>Don&apos;t just take our word for it. Here&apos;s what our happy clients have to say about our services.</p>
      </div>
      
      <div className="testimonials-grid" style={{ gap: '30px' }}>
        {TESTIMONIALS.map((t, i) => (
          <div 
            className="testimonial-card" 
            key={t.name}
            style={{ 
              position: 'relative', 
              background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '24px',
              padding: '40px 30px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              overflow: 'hidden'
            }}
          >
            {/* Large decorative quote mark */}
            <div style={{ position: 'absolute', top: '10px', right: '20px', fontSize: '5rem', color: 'rgba(66,165,245,0.1)', fontFamily: 'serif', lineHeight: 1 }}>&rdquo;</div>
            
            <div className="stars" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>{'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}</div>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '30px', position: 'relative', zIndex: 1, minHeight: '120px' }}>&quot;{t.quote}&quot;</p>
            
            <div className="t-author" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
              <div className="t-avatar" style={{ width: '50px', height: '50px', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(21,101,192,0.4)' }}>{t.initials}</div>
              <div>
                <div className="name" style={{ fontSize: '1rem', fontWeight: 700 }}>{t.name}</div>
                <div className="role" style={{ fontSize: '0.8rem', color: 'var(--blue-glow)' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
