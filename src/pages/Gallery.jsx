import SectionDivider from '../components/SectionDivider.jsx';
import VideoEmbed from '../components/VideoEmbed.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import { galleryItems, articles } from '../data/content.js';

export default function Gallery() {
  return (
    <>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Gallery</span>
          <h1>Outreach in Pictures & Video</h1>
          <p style={{ maxWidth: '60ch' }}>
            A look at the foundation's programmes in action — from YouTube
            highlights to footage uploaded directly by our field team.
          </p>

          <div className="grid grid--2 mt-3">
            {galleryItems.map((item) => (
              <VideoEmbed key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionDivider label="Articles" />
          <div className="grid grid--3">
            {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </div>
      </section>
    </>
  );
}
