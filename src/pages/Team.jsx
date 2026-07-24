import { teamMembers } from '../data/content.js';
import BioCard from '../components/BioCard.jsx';

export default function Team() {
  return (
    <>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Our People</span>
          <h1>The Team</h1>
          <p style={{ maxWidth: '60ch' }}>
            A small, dedicated team runs the foundation's day-to-day
            programmes — scholarships, welfare visits, and outreach events.
          </p>

          <div className="grid grid--3 mt-3">
            {teamMembers.map((m) => (
              <BioCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container center">
          <h2>Want to volunteer with us?</h2>
          <p style={{ maxWidth: '50ch', margin: '0 auto 1.5rem', opacity: 0.85 }}>
            We're always looking for hands and hearts for scholarship
            interviews, outreach days, and event support.
          </p>
          <a href="mailto:volunteer@geomf.org?subject=Volunteer%20Interest" className="btn btn--primary">
            Volunteer With Us
          </a>
        </div>
      </section>
    </>
  );
}
