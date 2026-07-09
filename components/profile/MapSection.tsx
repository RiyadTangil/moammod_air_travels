export default function MapSection() {
  return (
    <section className="map-section" id="contact-section">
      <div className="section-tag">Find Us</div>
      <h2 className="section-title">Our <span>Office Location</span></h2>
      <p className="section-sub" style={{ marginBottom: 0 }}>
        Visit us at Nayapaltan, Dhaka. We welcome walk-in clients — no appointment needed during business hours.
      </p>
      <div className="map-wrap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8012736259024!2d90.36479061498207!3d23.80580068455893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0dc10bf3bdd%3A0x48aa5d50c5d2befa!2sMirpur%2010%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1696500000000!5m2!1sen!2sbd"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mohammad Air International Travels Office Location"
        />
      </div>
    </section>
  );
}
