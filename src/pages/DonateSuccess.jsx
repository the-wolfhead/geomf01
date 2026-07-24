import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../lib/api.js';
import DonationCertificate from '../components/DonationCertificate.jsx';

export default function DonateSuccess() {
  const { donationId } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.getCertificate(donationId).then(setCertificate).catch((e) => setError(e.message));
  }, [donationId]);

  return (
    <section className="section">
      <div className="container">
        <div className="center" style={{ marginBottom: '2rem' }}>
          <span className="eyebrow status-success">Payment Successful</span>
          <h1>Thank you for your generosity</h1>
          <p style={{ maxWidth: '50ch', margin: '0 auto' }}>
            Your donation has been received and confirmed. A copy of your
            certificate is below — you can print it or save it as a PDF.
          </p>
        </div>

        {error && <p className="error-text center">{error}</p>}
        {!certificate && !error && (
          <div className="center"><div className="spinner" style={{ margin: '0 auto' }} /></div>
        )}
        {certificate && <DonationCertificate certificate={certificate} />}

        <div className="center mt-3">
          <Link to="/" className="helper-text">&larr; Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
