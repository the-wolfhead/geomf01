const BASE = '/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Request failed (${res.status})`);
  }
  return res.json();
}

export const api = {
  createDonation: (payload) =>
    request('/donations', { method: 'POST', body: JSON.stringify(payload) }),
  getDonation: (id) => request(`/donations/${id}`),
  confirmDonation: (id, payload) =>
    request(`/donations/${id}/confirm`, { method: 'POST', body: JSON.stringify(payload) }),
  getCertificate: (id) => request(`/certificate/${id}`),
  sendContactMessage: (payload) =>
    request('/contact', { method: 'POST', body: JSON.stringify(payload) })
};
