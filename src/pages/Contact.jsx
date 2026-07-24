import { useState } from 'react';
import { api } from '../lib/api.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await api.sendContactMessage(form);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 640 }}>
        <span className="eyebrow">Get in touch</span>
        <h1>Contact Us</h1>
        <p>Questions about a programme, a partnership, or the foundation? Send us a message.</p>

        {status === 'sent' ? (
          <div className="card" style={{ marginTop: '1.5rem' }}>
            <h3>Message sent</h3>
            <p>Thank you for reaching out. We'll respond within 2–3 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2">
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" required value={form.name} onChange={update('name')} />
            </div>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" required value={form.email} onChange={update('email')} />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} required value={form.message} onChange={update('message')} />
            </div>
            {status === 'error' && <p className="error-text">{error}</p>}
            <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
