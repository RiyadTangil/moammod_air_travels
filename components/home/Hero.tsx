'use client';
import { useEffect, useState } from 'react';
import { useModal } from '@/context/ModalContext';

const PARTICLE_COUNT = 25;

export default function Hero() {
  const { openModal } = useModal();
  const [particles, setParticles] = useState<Array<{
    left: string; width: string; height: string;
    duration: string; delay: string; opacity: number;
  }>>([]);

  const [counts, setCounts] = useState({ years: 0, clients: 0, success: 0, countries: 0 });

  useEffect(() => {
    // Generate particles client-side only to avoid hydration mismatch
    setParticles(
      Array.from({ length: PARTICLE_COUNT }, () => ({
        left: Math.random() * 100 + '%',
        width: (Math.random() * 3 + 1) + 'px',
        height: (Math.random() * 3 + 1) + 'px',
        duration: (Math.random() * 15 + 10) + 's',
        delay: (Math.random() * 10) + 's',
        opacity: Math.random() * 0.6 + 0.2,
      }))
    );

    // Counter animation
    const targets = { years: 12, clients: 5000, success: 98, countries: 15 };
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCounts({
        years: Math.round(progress * targets.years),
        clients: Math.round(progress * targets.clients),
        success: Math.round(progress * targets.success),
        countries: Math.round(progress * targets.countries),
      });
      if (progress < 1) requestAnimationFrame(tick);
    };
    const timer = setTimeout(() => requestAnimationFrame(tick), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-particles" id="particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left,
              width: p.width,
              height: p.height,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        {/* Company name — top highlight */}
        <div className="hero-company-wrap">
          <span className="hero-company-text">
            ✈️ Mohammod Air International Travels
          </span>
        </div>

        <div className="hero-badge">
          <span className="dot" />
          🇧🇩 Bangladesh&apos;s Trusted Travel Partner
        </div>
        <h1>
          Fly <span className="highlight">Further</span>, Dream <span className="highlight">Bigger</span>
        </h1>
        <p>
          From manpower recruitment to visa processing, air ticketing to Hajj &amp; Umrah — we handle every step of your journey with care, speed, and expertise.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => openModal('General Inquiry')}>
            ✈️ Book a Service
          </button>
          <a href="#services" className="btn-outline">
            🔍 Explore Services
          </a>
        </div>
      </div>

      {/* <div className="hero-stats">
        <div className="stat-card">
          <div className="num">{counts.years}+</div>
          <div className="label">Years Experience</div>
        </div>
        <div className="stat-card">
          <div className="num">{counts.clients.toLocaleString()}+</div>
          <div className="label">Happy Clients</div>
        </div>
        <div className="stat-card">
          <div className="num">{counts.success}%</div>
          <div className="label">Visa Success Rate</div>
        </div>
        <div className="stat-card">
          <div className="num">{counts.countries}+</div>
          <div className="label">Countries Covered</div>
        </div>
      </div> */}
    </section>
  );
}
