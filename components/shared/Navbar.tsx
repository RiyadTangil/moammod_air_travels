'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <Link href="/" className="nav-logo">
        <Image src="/images/logo.png" alt="Mohammad Air International Travels Logo" width={46} height={46} style={{ height: 46, width: 'auto' }} />
        <div className="nav-logo-text">
          <span className="brand-name">Mohammad Air International Travels</span>
          <span className="brand-tagline">Your Journey, Our Promise</span>
        </div>
      </Link>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/#services">Services</Link></li>
        <li><Link href="/profile">About Us</Link></li>
        <li><Link href="/profile#contact-section">Contact</Link></li>
        <li>
          <Link href="/dashboard" className="nav-cta">Admin Login</Link>
        </li>
      </ul>

      <button
        className="hamburger"
        id="hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
