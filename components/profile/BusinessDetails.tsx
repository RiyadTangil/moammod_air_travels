const INFO_ROWS = {
  'Company Information': [
    ['Company Name', 'Mohammad Air International Travels'],
    ['Full Name (Bangla)', 'এমএ ট্রাভেলস'],
    ['Established', '2012'],
    ['Business Type', 'Travel & Immigration Agency'],
    ['Trade Licence No.', 'XXXXXXXXX'],
    ['TIN Number', 'XXX-XXX-XXXX'],
    ['Recruitment Licence', 'RL-XXXXXX (BMET)'],
  ],
  'Office Location': [
    ['Address', 'Debidwar, Chandina Road'],
    ['Area', 'Debidwar Cumilla'],
    ['District', 'Dhaka'],
    ['Postcode', '1216'],
    ['Country', 'Bangladesh 🇧🇩'],
    ['Nearest Landmark', 'Nayapaltan'],
    ['Parking', 'Available'],
  ],
  'Contact Details': [
    ['Phone 1', '01775725566'],
    ['Phone 2', '01775725566'],
    ['WhatsApp', '01879994701'],
    ['Email 1', 'mohammadairtravels1@gmail.com'],
    ['Email 2', 'reservation@mohammadairint.com'],
    ['Website', 'www.matravels.com.bd'],
    ['Facebook', 'fb.com/matravelsbd'],
    ['Office Hours', 'Sat–Thu 9AM–7PM'],
  ],
  'Memberships & Licences': [
    ['ATAB', '✓ Member', true],
    ['BAIRA', '✓ Registered', true],
    ['IATA', '✓ Accredited Agent', true],
    ['BMET', '✓ Recruitment Licensed', true],
    ['Tourism Board', '✓ Govt. Registered', true],
    ['Hajj Licence', '✓ Ministry Approved', true],
    ['ISO', 'In Progress', false],
  ],
};

const ICONS: Record<string, string> = {
  'Company Information': '🏢',
  'Office Location': '📍',
  'Contact Details': '📞',
  'Memberships & Licences': '📜',
};

export default function BusinessDetails() {
  return (
    <section className="profile-details">
      <div className="section-tag">Company Info</div>
      <h2 className="section-title">Business <span>Details</span></h2>

      <div className="profile-details-grid">
        {Object.entries(INFO_ROWS).map(([title, rows]) => (
          <div key={title} className="detail-card">
            <h3><span>{ICONS[title]}</span> {title}</h3>
            {rows.map(([key, val, green]) => (
              <div key={key as string} className="detail-row">
                <span className="key">{key as string}</span>
                <span className={`val${green ? ' val-green' : ''}`}>{val as string}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
