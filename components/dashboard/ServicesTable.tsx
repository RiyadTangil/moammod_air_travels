'use client';
import { useState } from 'react';
import { useToast } from '@/context/ToastContext';

const INITIAL_SERVICES = [
  { name: 'Manpower Recruitment', category: 'Employment', status: 'Active', enquiries: 84, updated: '01 Jul 2025' },
  { name: 'Indian Visa', category: 'Visa Service', status: 'Active', enquiries: 67, updated: '01 Jul 2025' },
  { name: 'Tourist Visa', category: 'Visa Service', status: 'Active', enquiries: 45, updated: '02 Jul 2025' },
  { name: 'Air Ticketing', category: 'Ticketing', status: 'Active', enquiries: 112, updated: '03 Jul 2025' },
  { name: 'Hajj & Umrah', category: 'Pilgrimage', status: 'Active', enquiries: 28, updated: '01 Jul 2025' },
  { name: 'Work Permit', category: 'Employment', status: 'Active', enquiries: 33, updated: '02 Jul 2025' },
  { name: 'Medical Visa', category: 'Visa Service', status: 'Seasonal', enquiries: 19, updated: '29 Jun 2025' },
  { name: 'Student Visa', category: 'Education', status: 'Active', enquiries: 41, updated: '01 Jul 2025' },
];

interface Service { name: string; category: string; status: string; enquiries: number; updated: string; }

export default function ServicesTable() {
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSvc, setNewSvc] = useState({ name: '', category: '', desc: '', icon: '' });
  const { showToast } = useToast();

  const deleteService = (name: string) => {
    if (confirm('Remove this service?')) {
      setServices(s => s.filter(x => x.name !== name));
    }
  };

  const addService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSvc.name || !newSvc.category) return;
    setServices(s => [{
      name: newSvc.name,
      category: newSvc.category,
      status: 'Active',
      enquiries: 0,
      updated: 'Just now',
    }, ...s]);
    setShowAddModal(false);
    setNewSvc({ name: '', category: '', desc: '', icon: '' });
    showToast('✅', 'Service Added!', `"${newSvc.name}" is now live on the website.`);
  };

  const statusClass = (s: string) => s === 'Active' ? 'status-active' : 'status-pending';

  return (
    <>
      <div className="dash-table-wrap">
        <div className="table-head">
          <h3>🛠️ Manage Services</h3>
          <div className="table-actions">
            <input className="search-input" type="text" placeholder="🔍 Search services..." />
            <button className="btn-add" id="addServiceBtn" onClick={() => setShowAddModal(true)}>+ Add Service</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Service Name</th><th>Category</th><th>Status</th>
              <th>Enquiries</th><th>Last Updated</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(svc => (
              <tr key={svc.name}>
                <td><strong>{svc.name}</strong></td>
                <td>{svc.category}</td>
                <td><span className={`status-pill ${statusClass(svc.status)}`}>{svc.status}</span></td>
                <td>{svc.enquiries}</td>
                <td>{svc.updated}</td>
                <td>
                  <div className="action-btns">
                    <button className="btn-icon edit" title="Edit">✏️</button>
                    <button className="btn-icon del" title="Delete" onClick={() => deleteService(svc.name)}>🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Service Modal */}
      <div className={`modal-overlay${showAddModal ? ' active' : ''}`} id="addServiceModal">
        <div className="modal-box" style={{ maxWidth: 460 }}>
          <button className="modal-close" id="addServiceClose" onClick={() => setShowAddModal(false)}>✕</button>
          <div className="service-badge">Dashboard</div>
          <h2>Add New Service</h2>
          <p className="sub">This service will appear on the public website home page.</p>
          <form id="addServiceForm" onSubmit={addService}>
            <div className="form-grid">
              <div className="form-group full">
                <label>Service Name *</label>
                <input type="text" placeholder="e.g. Dubai Tourist Visa" required value={newSvc.name} onChange={e => setNewSvc(p => ({ ...p, name: e.target.value }))} />
              </div>
              <div className="form-group">
                <label>Category *</label>
                <select required value={newSvc.category} onChange={e => setNewSvc(p => ({ ...p, category: e.target.value }))}>
                  <option value="">Select</option>
                  <option>Visa Service</option><option>Employment</option>
                  <option>Ticketing</option><option>Pilgrimage</option>
                  <option>Education</option><option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Icon (emoji)</label>
                <input type="text" placeholder="e.g. 🌍" maxLength={4} value={newSvc.icon} onChange={e => setNewSvc(p => ({ ...p, icon: e.target.value }))} />
              </div>
              <div className="form-group full">
                <label>Short Description</label>
                <textarea placeholder="Brief description..." style={{ minHeight: 80 }} value={newSvc.desc} onChange={e => setNewSvc(p => ({ ...p, desc: e.target.value }))} />
              </div>
            </div>
            <button type="submit" className="modal-submit">➕ Add Service</button>
          </form>
        </div>
      </div>
    </>
  );
}
