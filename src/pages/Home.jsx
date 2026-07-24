import { Link } from 'react-router-dom';
import SectionDivider from '../components/SectionDivider.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import { articles, deaconess } from '../data/content.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">In loving memory · {deaconess.years}</span>
            <h1>Her service didn't end. It multiplied.</h1>
            <p className="lead">
              The Grace Eseigboria Omoifo Memorial Foundation carries forward a
              lifetime of quiet generosity — scholarships, widow support, and
              health outreach — for the communities she gave everything to.
            </p>
            <div className="hero__actions">
              <Link to="/donate" className="btn btn--primary">Make a Donation</Link>
              <Link to="/about" className="btn btn--outline">Her Story</Link>
            </div>
          </div>
          <div className="hero__portrait" aria-hidden="true">
            Photograph of<br />Deaconess Grace<br />Eseigboria Omoifo
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            <div className="card center">
              <div className="stat">40+</div>
              <div className="stat-label">Years of Service</div>
            </div>
            <div className="card center">
              <div className="stat">300+</div>
              <div className="stat-label">Scholarships Funded</div>
            </div>
            <div className="card center">
              <div className="stat">120</div>
              <div className="stat-label">Widows Currently Supported</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <span className="eyebrow">Who she was</span>
          <h2>A life spent showing up</h2>
          <p style={{ maxWidth: '65ch' }}>{deaconess.shortBio}</p>
          <Link to="/about" className="btn btn--dark" style={{ marginTop: '1rem' }}>Read her full story</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionDivider label="Latest Outreach" />
          <div className="grid grid--3">
            {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
          <div className="center mt-3">
            <Link to="/gallery" className="btn btn--outline" style={{ color: 'var(--ink)', borderColor: 'var(--ink)' }}>
              View all outreach & gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container center">
          <h2>Continue her work with us</h2>
          <p style={{ maxWidth: '50ch', margin: '0 auto 1.5rem', opacity: 0.85 }}>
            Every donation — large or small — funds a scholarship, a food
            package, or a medical bill for someone who needs it.
          </p>
          <Link to="/donate" className="btn btn--primary">Donate Now</Link>
        </div>
      </section>
    </>
  );
}
