import { boardMembers } from '../data/content.js';
import BioCard from '../components/BioCard.jsx';

export default function BoardMembers() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Governance</span>
        <h1>Board of Trustees</h1>
        <p style={{ maxWidth: '60ch' }}>
          The Board of Trustees oversees the foundation's governance,
          finances, and long-term direction — ensuring every donation
          furthers the Deaconess's original mission.
        </p>

        <div className="grid grid--3 mt-3">
          {boardMembers.map((m) => (
            <BioCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
