'use client';
import { useModal } from '@/context/ModalContext';

export default function CTABanner() {
  const { openModal } = useModal();
  return (
    <section className="cta-section" style={{ 
      padding: '100px 8%',
      background: 'linear-gradient(135deg, #07111E 0%, #0D47A1 50%, #1565C0 100%)',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', opacity: 0.5 }}></div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
        <div className="section-tag" style={{ justifyContent: 'center', color: '#A5D6A7' }}>Start Now</div>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2 }}>Ready to Start Your <span style={{ color: '#42A5F5' }}>Journey?</span></h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', marginBottom: '40px', lineHeight: 1.6 }}>Talk to our travel experts today — free consultation, no commitment required. Let us handle the paperwork while you focus on packing your bags.</p>
        <div className="cta-btns" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-white" onClick={() => openModal('General Inquiry')} style={{ padding: '16px 40px', fontSize: '1.05rem', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            ✈️ Book Free Consultation
          </button>
          <a href="tel:01879994701" className="btn-cta-outline" style={{ padding: '16px 40px', fontSize: '1.05rem', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
            📞 Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
