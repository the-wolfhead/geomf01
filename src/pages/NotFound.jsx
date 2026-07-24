import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section container center">
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn--dark">Back to Home</Link>
    </section>
  );
}
