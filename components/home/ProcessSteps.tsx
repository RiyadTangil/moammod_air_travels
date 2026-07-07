const STEPS = [
  { num: '01', icon: '📞', color: 'blue', title: 'Contact Us', desc: 'Call, WhatsApp, or visit our office. Describe your travel need to our expert team.' },
  { num: '02', icon: '📋', color: 'blue', title: 'Submit Documents', desc: 'We guide you on exactly what documents are required and help with preparation.' },
  { num: '03', icon: '⚙️', color: 'blue', title: 'We Process', desc: 'Our experienced team files your application and tracks it at every stage with regular updates.' },
  { num: '04', icon: '✅', color: 'green', title: 'You Travel!', desc: 'Collect your visa/ticket and travel with confidence. We provide after-service support too.' },
];

export default function ProcessSteps() {
  return (
    <section className="process-section">
      <div className="section-tag">How It Works</div>
      <h2 className="section-title" style={{ marginBottom: 52 }}>Get Started in <span>4 Simple Steps</span></h2>
      <div className="steps-grid">
        {STEPS.map(step => (
          <div className="step-card" key={step.num}>
            <div className="step-num">{step.num}</div>
            <div className={`step-icon ${step.color}`}>{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
