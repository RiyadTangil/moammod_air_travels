'use client';
import { useState } from 'react';

const INITIAL_ENQUIRIES = [
  { id: '#001', name: 'Rahim Karim', phone: '+880 1711-XXXXXX', service: 'Indian Visa', district: 'Chittagong', date: '07 Jul 2025', status: 'New' },
  { id: '#002', name: 'Nasreen Begum', phone: '+880 1812-XXXXXX', service: 'Manpower', district: 'Dhaka', date: '07 Jul 2025', status: 'New' },
  { id: '#003', name: 'Khalid Hossain', phone: '+880 1955-XXXXXX', service: 'Hajj & Umrah', district: 'Sylhet', date: '06 Jul 2025', status: 'In Review' },
  { id: '#004', name: 'Fatema Akter', phone: '+880 1622-XXXXXX', service: 'Student Visa', district: 'Sylhet', date: '06 Jul 2025', status: 'Replied' },
  { id: '#005', name: 'Mizanur Rahman', phone: '+880 1733-XXXXXX', service: 'Medical Visa', district: 'Rajshahi', date: '05 Jul 2025', status: 'Replied' },
  { id: '#006', name: 'Jamal Uddin', phone: '+880 1900-XXXXXX', service: 'Work Permit', district: 'Khulna', date: '04 Jul 2025', status: 'Replied' },
];

export default function EnquiriesTable() {
  const [enquiries, setEnquiries] = useState(INITIAL_ENQUIRIES);

  const deleteEnquiry = (id: string) => {
    if (confirm('Remove this enquiry?')) {
      setEnquiries(e => e.filter(x => x.id !== id));
    }
  };

  const statusClass = (s: string) => s === 'New' ? 'status-new' : s === 'In Review' ? 'status-pending' : 'status-active';

  return (
    <div className="dash-table-wrap">
      <div className="table-head">
        <h3>📩 Client Enquiries</h3>
        <div className="table-actions">
          <input className="search-input" type="text" placeholder="🔍 Search..." />
          <select className="search-input" style={{ width: 130 }}>
            <option>All Status</option>
            <option>New</option><option>In Review</option><option>Replied</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Phone</th><th>Service</th>
            <th>District</th><th>Date</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map(enq => (
            <tr key={enq.id}>
              <td style={{ color: 'var(--gray-soft)' }}>{enq.id}</td>
              <td><strong>{enq.name}</strong></td>
              <td>{enq.phone}</td>
              <td>{enq.service}</td>
              <td>{enq.district}</td>
              <td>{enq.date}</td>
              <td><span className={`status-pill ${statusClass(enq.status)}`}>{enq.status}</span></td>
              <td>
                <div className="action-btns">
                  <button className="btn-icon edit" title="View">👁️</button>
                  <button className="btn-icon del" title="Delete" onClick={() => deleteEnquiry(enq.id)}>🗑️</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
