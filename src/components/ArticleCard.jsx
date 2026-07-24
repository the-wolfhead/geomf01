export default function ArticleCard({ article }) {
  const date = new Date(article.date).toLocaleDateString('en-NG', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <article className="card">
      <span className="badge">{article.tag}</span>
      <h3 style={{ marginTop: '0.8rem' }}>{article.title}</h3>
      <p className="helper-text">{date}</p>
      <p>{article.excerpt}</p>
    </article>
  );
}
