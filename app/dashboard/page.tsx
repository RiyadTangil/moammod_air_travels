'use client';
import { useState, useEffect } from 'react';
import LoginScreen from '@/components/dashboard/LoginScreen';
import Sidebar from '@/components/dashboard/Sidebar';
import ServicesTable from '@/components/dashboard/ServicesTable';
import EnquiriesTable from '@/components/dashboard/EnquiriesTable';
import { useToast } from '@/context/ToastContext';

type Section = 'overview' | 'services' | 'enquiries' | 'profile' | 'gallery' | 'testimonials';

const SECTION_TITLES: Record<Section, string> = {
  overview: 'Overview', services: 'Services', enquiries: 'Enquiries',
  profile: 'Business Profile', gallery: 'Gallery', testimonials: 'Testimonials',
};

const STATS = [
  { label: 'Total Services', value: '8', change: '↑ All Active', icon: '🛠️', colorCls: 'ds-blue', iconCls: 'ds-icon-blue' },
  { label: 'New Enquiries', value: '12', change: '↑ 4 today', icon: '📩', colorCls: 'ds-yellow', iconCls: 'ds-icon-yellow' },
  { label: 'Processed', value: '348', change: '↑ +28 this month', icon: '✅', colorCls: 'ds-green', iconCls: 'ds-icon-green' },
  { label: 'Website Visits', value: '1,240', change: '↑ +120 this week', icon: '🌐', colorCls: 'ds-purple', iconCls: 'ds-icon-purple' },
];

const RECENT_ENQUIRIES = [
  { name: 'Rahim Karim', phone: '+880 1711-XXXXXX', service: 'Indian Visa', date: '07 Jul 2025', status: 'New', cls: 'status-new' },
  { name: 'Nasreen Begum', phone: '+880 1812-XXXXXX', service: 'Manpower Recruitment', date: '07 Jul 2025', status: 'New', cls: 'status-new' },
  { name: 'Khalid Hossain', phone: '+880 1955-XXXXXX', service: 'Hajj & Umrah', date: '06 Jul 2025', status: 'In Review', cls: 'status-pending' },
  { name: 'Fatema Akter', phone: '+880 1622-XXXXXX', service: 'Student Visa', date: '06 Jul 2025', status: 'Replied', cls: 'status-active' },
];

function Overview({ onSwitch }: { onSwitch: (s: Section) => void }) {
  return (
    <>
      <div className="stats-row">
        {STATS.map(s => (
          <div key={s.label} className="dash-stat">
            <div className="ds-top">
              <span className="ds-label">{s.label}</span>
              <div className={`ds-icon ${s.iconCls}`}>{s.icon}</div>
            </div>
            <div className={`ds-value ${s.colorCls}`}>{s.value}</div>
            <div className="ds-change">{s.change}</div>
          </div>
        ))}
      </div>

      {/* Recent Enquiries */}
      <div className="dash-table-wrap" style={{ marginBottom: 24 }}>
        <div className="table-head">
          <h3>📩 Recent Enquiries</h3>
          <div className="table-actions">
            <button className="btn-add" onClick={() => onSwitch('enquiries')}>View All</button>
          </div>
        </div>
        <table>
          <thead><tr><th>Name</th><th>Phone</th><th>Service</th><th>Date</th><th>Status</th></tr></thead>
          <tbody>
            {RECENT_ENQUIRIES.map(e => (
              <tr key={e.name}><td><strong>{e.name}</strong></td><td>{e.phone}</td><td>{e.service}</td><td>{e.date}</td><td><span className={`status-pill ${e.cls}`}>{e.status}</span></td></tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Service Summary */}
      <div className="dash-table-wrap">
        <div className="table-head">
          <h3>🛠️ Service Summary</h3>
          <div className="table-actions">
            <button className="btn-add" onClick={() => onSwitch('services')}>Manage Services</button>
          </div>
        </div>
        <table>
          <thead><tr><th>Service</th><th>Status</th><th>Enquiries</th><th>This Month</th></tr></thead>
          <tbody>
            {[['Manpower Recruitment',84,'+12'],['Indian Visa',67,'+9'],['Tourist Visa',45,'+6'],['Air Ticketing',112,'+18'],['Hajj & Umrah',28,'+3']].map(([s,e,m]) => (
              <tr key={String(s)}><td><strong>{s}</strong></td><td><span className="status-pill status-active">Active</span></td><td>{e}</td><td>{m}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function ProfileEdit() {
  const { showToast } = useToast();
  return (
    <div className="profile-edit-card">
      <h3>🏢 Edit Business Profile</h3>
      <div className="profile-edit-grid">
        <div className="form-group"><label>Business Name</label><input type="text" defaultValue="Mohammod Air International Travels" /></div>
        <div className="form-group"><label>Owner Name</label><input type="text" defaultValue="Md. Salah Uddin" /></div>
        <div className="form-group"><label>Phone</label><input type="tel" defaultValue="01775725566" /></div>
        <div className="form-group"><label>Email</label><input type="email" defaultValue="mohammadairtravels1@gmail.com" /></div>
        <div className="form-group full"><label>Address</label><input type="text" defaultValue="Head office: 14/6 lift 13 west, China Town Nayapaltan,Dhaka" /></div>
        <div className="form-group full"><label>Business Description</label><textarea defaultValue="Your trusted travel and visa consultancy in Bangladesh since 2012." style={{ minHeight: 80 }} /></div>
      </div>
      <button className="btn-add" style={{ marginTop: 20, padding: '12px 28px', fontSize: '0.9rem' }} onClick={() => showToast('✅', 'Profile Updated!', 'Changes saved successfully.')}>
        💾 Save Changes
      </button>
    </div>
  );
}

function Placeholder({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="dash-placeholder">
      <div className="ph-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checked, setChecked] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('overview');

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem('ma_admin') === '1');
    setChecked(true);
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem('ma_admin', '1');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('ma_admin');
    setIsLoggedIn(false);
  };

  if (!checked) return null;

  if (!isLoggedIn) return <LoginScreen onLogin={handleLogin} />;

  return (
    <div className="dashboard-layout">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} onLogout={handleLogout} />

      <main className="dashboard-main">
        <div className="topbar">
          <div>
            <span className="topbar-title">{SECTION_TITLES[activeSection]}</span>
          </div>
          <div className="topbar-right">
            <span className="topbar-live">🟢 Live</span>
            <div className="topbar-notif">🔔 3 New</div>
            <div className="topbar-avatar" title="Admin">AD</div>
          </div>
        </div>

        <div className="dash-content">
          {activeSection === 'overview'      && <Overview onSwitch={setActiveSection} />}
          {activeSection === 'services'      && <ServicesTable />}
          {activeSection === 'enquiries'     && <EnquiriesTable />}
          {activeSection === 'profile'       && <ProfileEdit />}
          {/* {activeSection === 'gallery'       && <Placeholder icon="🖼️" title="Gallery Management" desc="Coming soon — upload office photos, success stories & more." />}
          {activeSection === 'testimonials'  && <Placeholder icon="⭐" title="Testimonials Management" desc="Coming soon — manage client reviews and ratings." />} */}
        </div>
      </main>
    </div>
  );
}
