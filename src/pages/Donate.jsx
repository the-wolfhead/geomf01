import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api.js';
import { donationTiers } from '../data/content.js';

export default function Donate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', amount: donationTiers[1], message: '' });
  const [customAmount, setCustomAmount] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | error
  const [error, setError] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const selectTier = (amount) => {
    setCustomAmount('');
    setForm((f) => ({ ...f, amount }));
  };

  const handleCustom = (e) => {
    setCustomAmount(e.target.value);
    setForm((f) => ({ ...f, amount: Number(e.target.value) || 0 }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.amount || form.amount < 100) {
      setError('Please enter a donation amount of at least ₦100.');
      return;
    }

    setStatus('submitting');
    try {
      // Backend creates a pending donation record and returns a PalmPay
      // checkout reference + webview URL to redirect the donor to.
      const { donationId, checkoutUrl } = await api.createDonation({
        donorName: form.name,
        donorEmail: form.email,
        amount: Number(form.amount),
        message: form.message
      });

      // In production `checkoutUrl` is PalmPay's hosted payment page.
      // Here we route to our own /donate/webview which embeds it (or, in
      // this scaffold, simulates it) — see DonateWebview.jsx.
      navigate(`/donate/webview?donationId=${donationId}&checkoutUrl=${encodeURIComponent(checkoutUrl)}`);
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 640 }}>
        <span className="eyebrow">Support the Foundation</span>
        <h1>Make a Donation</h1>
        <p>
          Every naira funds a scholarship, a widow's monthly stipend, or a
          medical bill. Payments are processed securely through PalmPay.
        </p>

        <form onSubmit={handleSubmit} className="mt-2">
          <div className="field">
            <label htmlFor="donor-name">Full name</label>
            <input id="donor-name" required value={form.name} onChange={update('name')} placeholder="As it should appear on your certificate" />
          </div>
          <div className="field">
            <label htmlFor="donor-email">Email address</label>
            <input id="donor-email" type="email" required value={form.email} onChange={update('email')} />
          </div>

          <div className="field">
            <label>Donation amount (₦)</label>
            <div className="amount-grid">
              {donationTiers.map((t) => (
                <div
                  key={t}
                  className={`amount-chip ${form.amount === t && !customAmount ? 'selected' : ''}`}
                  onClick={() => selectTier(t)}
                  role="button"
                  tabIndex={0}
                >
                  ₦{t.toLocaleString()}
                </div>
              ))}
            </div>
            <input
              type="number"
              min="100"
              placeholder="Or enter a custom amount"
              value={customAmount}
              onChange={handleCustom}
            />
          </div>

          <div className="field">
            <label htmlFor="donor-message">Message (optional)</label>
            <textarea id="donor-message" rows={3} value={form.message} onChange={update('message')} placeholder="A note of support, in memory of, etc." />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button className="btn btn--primary" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Preparing checkout…' : `Continue to Pay ₦${(Number(form.amount) || 0).toLocaleString()}`}
          </button>
          <p className="helper-text mt-2">You'll be redirected to PalmPay to complete payment securely.</p>
        </form>
      </div>
    </section>
  );
}
