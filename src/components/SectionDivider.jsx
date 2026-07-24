export default function SectionDivider({ label }) {
  return (
    <div className="radiant" role="presentation">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 12 + Math.cos(angle) * 6;
          const y1 = 12 + Math.sin(angle) * 6;
          const x2 = 12 + Math.cos(angle) * 10.5;
          const y2 = 12 + Math.sin(angle) * 10.5;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />;
        })}
      </svg>
      {label && <span className="eyebrow" style={{ margin: 0 }}>{label}</span>}
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 12 + Math.cos(angle) * 6;
          const y1 = 12 + Math.sin(angle) * 6;
          const x2 = 12 + Math.cos(angle) * 10.5;
          const y2 = 12 + Math.sin(angle) * 10.5;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />;
        })}
      </svg>
    </div>
  );
}
