import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { api } from '../lib/api.js';

// This page represents the PalmPay "webview" step: in production,
// `checkoutUrl` is PalmPay's own hosted payment page and this component
// simply embeds it in an <iframe> (or, on mobile, opens it in a full
// webview via window.location). PalmPay then redirects the user back to
// our /donate/success/:donationId route on completion, or notifies our
// backend via a server-to-server webhook (see backend/routes/donations.js).
//
// Since this scaffold has no live PalmPay credentials, the iframe is
// replaced with a simulated checkout UI so the whole flow is testable
// end-to-end. Swap the `simulate` block for a real <iframe src={checkoutUrl}>
// once real PalmPay merchant credentials are wired up on the backend.
export default function DonateWebview() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const donationId = params.get('donationId');
  const checkoutUrl = params.get('checkoutUrl');

  const [donation, setDonation] = useState(null);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!donationId) return;
    api.getDonation(donationId).then(setDonation).catch((e) => setError(e.message));
  }, [donationId]);

  if (!donationId) {
    return (
      <section className="section container">
        <p className="error-text">Missing donation reference. Please start again from the Donate page.</p>
        <Link to="/donate" className="btn btn--dark">Back to Donate</Link>
      </section>
    );
  }

  const handleSimulatedPayment = async () => {
    setPaying(true);
    setError('');
    try {
      await api.confirmDonation(donationId, { provider: 'palmpay', status: 'SUCCESS' });
      navigate(`/donate/success/${donationId}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setPaying(false);
    }
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 560 }}>
        <span className="eyebrow">Secure Checkout</span>
        <h1>Complete your donation via PalmPay</h1>

        {donation && (
          <div className="card mt-2">
            <p><strong>Donor:</strong> {donation.donorName}</p>
            <p><strong>Amount:</strong> ₦{donation.amount.toLocaleString()}</p>
            <p><strong>Reference:</strong> {donation.id}</p>
            <p><span className="badge status-pending">Awaiting payment</span></p>
          </div>
        )}

        {/*
          Real integration:
          <div className="video-wrap" style={{ aspectRatio: '3/4' }}>
            <iframe src={checkoutUrl} title="PalmPay Checkout" />
          </div>
        */}

        <div className="card mt-2" style={{ borderStyle: 'dashed' }}>
          <p className="helper-text">
            Demo checkout — replace this block with a live PalmPay webview
            once merchant credentials are configured on the backend
            (see backend/services/palmpay.js).
          </p>
          {error && <p className="error-text">{error}</p>}
          <button className="btn btn--primary" onClick={handleSimulatedPayment} disabled={paying}>
            {paying ? 'Confirming payment…' : 'Simulate Successful PalmPay Payment'}
          </button>
        </div>

        <Link to="/donate" className="helper-text" style={{ display: 'inline-block', marginTop: '1rem' }}>
          &larr; Cancel and go back
        </Link>
      </div>
    </section>
  );
}
