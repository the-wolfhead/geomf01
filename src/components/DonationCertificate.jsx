import { useRef } from 'react';

function formatNaira(amount) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
}

export default function DonationCertificate({ certificate }) {
  const ref = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  const date = new Date(certificate.date).toLocaleDateString('en-NG', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div>
      <div className="certificate" ref={ref} id="certificate-print-area">
        <div className="seal" aria-hidden="true" />
        <p className="eyebrow">Certificate of Donation</p>
        <h2 style={{ marginBottom: '0.2rem' }}>Grace Eseigboria Omoifo</h2>
        <p className="helper-text" style={{ marginBottom: '1.6rem' }}>Memorial Foundation</p>

        <p>This certificate is presented with gratitude to</p>
        <div className="donor-name">{certificate.donorName}</div>

        <p>for a generous donation of</p>
        <div className="amount">{formatNaira(certificate.amount)}</div>

        <p style={{ maxWidth: '46ch', margin: '1.5rem auto 0' }}>
          Your generosity helps continue Deaconess Grace's legacy of
          education, welfare, and health outreach in our community.
          Thank you for standing with us.
        </p>

        <div className="meta">
          Ref: {certificate.id} &nbsp;•&nbsp; Date: {date}
        </div>
      </div>

      <div className="center mt-2" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button className="btn btn--dark" onClick={handlePrint}>Print / Save as PDF</button>
      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          #certificate-print-area, #certificate-print-area * { visibility: visible; }
          #certificate-print-area { position: absolute; top: 0; left: 0; width: 100%; }
        }
      `}</style>
    </div>
  );
}
