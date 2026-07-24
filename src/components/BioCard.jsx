function initials(name) {
  return name
    .replace(/^(Barr\.|Mrs\.|Dr\.|Pastor|\(Mrs\.\))\s*/gi, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export default function BioCard({ name, role, bio }) {
  return (
    <div className="card center">
      <div
        style={{
          width: 72, height: 72, borderRadius: '50%', margin: '0 auto 1rem',
          background: 'linear-gradient(160deg, var(--gold-soft), var(--clay))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem'
        }}
      >
        {initials(name)}
      </div>
      <h3>{name}</h3>
      <p className="eyebrow" style={{ display: 'block' }}>{role}</p>
      {bio && <p className="helper-text">{bio}</p>}
    </div>
  );
}
