import { Link } from 'react-router-dom';
import SectionDivider from '../components/SectionDivider.jsx';
import { deaconess } from '../data/content.js';
import matriarchPhoto from '../data/matriarch.jpg'; // match your actual filename

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <span className="eyebrow">About the Foundation</span>
          <h1>Deaconess Grace Eseigboria Omoifo</h1>
          <p className="helper-text">{deaconess.years}</p>

          <div className="grid grid--2" style={{ marginTop: '2rem', alignItems: 'center' }}>
            <img
  src={matriarchPhoto}
  alt="Deaconess Grace Eseigboria Omoifo"
  className="hero__portrait"
/>
            <div>
              <p>{deaconess.shortBio}</p>
              <p style={{ fontStyle: 'italic', color: 'var(--ink)' }}>{deaconess.quote}</p>
              <Link to="/about/deaconess" className="btn btn--dark">Read Her Full Story</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionDivider label="Our Mission" />
          <div className="grid grid--3">
            <div className="card">
              <h3>Education</h3>
              <p>Sustaining and expanding the scholarship programme she ran personally for over 20 years.</p>
            </div>
            <div className="card">
              <h3>Welfare</h3>
              <p>Monthly support, food, and care for widows and elderly members of the community.</p>
            </div>
            <div className="card">
              <h3>Health</h3>
              <p>Free medical outreach and screening in partnership with local health workers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <h2>Meet the people continuing her work</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.2rem' }}>
            <Link to="/board" className="btn btn--outline" style={{ color: 'var(--ink)', borderColor: 'var(--ink)' }}>Board of Trustees</Link>
            <Link to="/team" className="btn btn--outline" style={{ color: 'var(--ink)', borderColor: 'var(--ink)' }}>Our Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
