import { Link } from 'react-router-dom';
import SectionDivider from '../components/SectionDivider.jsx';
import { deaconess } from '../data/content.js';

export default function DeaconessBio() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 780 }}>
        <Link to="/about" className="helper-text">&larr; Back to About</Link>
        <span className="eyebrow" style={{ display: 'block', marginTop: '1.2rem' }}>Her Full Story</span>
        <h1>Deaconess Grace Eseigboria Omoifo</h1>
        <p className="helper-text">{deaconess.years}</p>

        <SectionDivider />

        {deaconess.fullBio.map((para, i) => (
          <p key={i} style={{ fontSize: '1.05rem' }}>{para}</p>
        ))}

        <blockquote
          style={{
            borderLeft: '3px solid var(--gold)', paddingLeft: '1.2rem',
            margin: '2rem 0', fontStyle: 'italic', fontFamily: 'var(--font-display)',
            fontSize: '1.3rem', color: 'var(--ink)'
          }}
        >
          {deaconess.quote}
        </blockquote>

        <div className="center mt-2">
          <Link to="/donate" className="btn btn--primary">Support Her Legacy</Link>
        </div>
      </div>
    </section>
  );
}
