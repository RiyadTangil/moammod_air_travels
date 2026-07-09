'use client';
import Image from 'next/image';

type Section = 'overview' | 'services' | 'enquiries' | 'profile' | 'gallery' | 'testimonials';

interface Props {
  activeSection: Section;
  onSectionChange: (s: Section) => void;
  onLogout: () => void;
}

const NAV_ITEMS: { section: Section; icon: string; label: string; badge?: number }[] = [
  { section: 'overview', icon: '📊', label: 'Overview' },
  { section: 'services', icon: '🛠️', label: 'Services', badge: 8 },
  { section: 'enquiries', icon: '📩', label: 'Enquiries', badge: 12 },
  { section: 'profile', icon: '🏢', label: 'Business Profile' },
];

export default function Sidebar({ activeSection, onSectionChange, onLogout }: Props) {
  return (
    <aside className="sidebar" id="sidebar">
      <div className="sidebar-logo">
        <Image src="/images/logo.png" alt="Logo" width={36} height={36} />
        <div>
          <div className="s-name">Mohammad Air International Travels</div>
          <div className="s-sub">Admin Panel</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">Main</div>
        {NAV_ITEMS.slice(0, 3).map(item => (
          <button
            key={item.section}
            className={`sidebar-item${activeSection === item.section ? ' active' : ''}`}
            onClick={() => onSectionChange(item.section)}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
            {item.badge && <span className="badge">{item.badge}</span>}
          </button>
        ))}

        <div className="nav-section-label">Manage</div>
        {NAV_ITEMS.slice(3).map(item => (
          <button
            key={item.section}
            className={`sidebar-item${activeSection === item.section ? ' active' : ''}`}
            onClick={() => onSectionChange(item.section)}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
          </button>
        ))}

        <div className="nav-section-label">System</div>
        <a className="sidebar-item" href="/" target="_blank">
          <span className="icon">🌐</span> View Website
        </a>
        <button className="sidebar-item" onClick={onLogout}>
          <span className="icon">🚪</span> Logout
        </button>
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-user">
          <div className="sidebar-avatar">AD</div>
          <div>
            <div className="sidebar-user-name">Admin</div>
            <div className="sidebar-user-role">Super Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
