export default function AnnouncementTicker() {
  const items = [
    '✈️ Indian Visa Processing — Fast & Reliable',
    '🌍 Malaysia Manpower Recruitment — Now Open',
    '🕌 Hajj & Umrah Package 2025 — Limited Seats',
    '🎓 Student Visa for Canada & Australia',
    '💼 Work Permit Services — Gulf Countries',
  ];
  const doubled = [...items, ...items];

  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
