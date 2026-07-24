import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h4>G.E.O.M.F</h4>
          <p style={{ maxWidth: '38ch', opacity: 0.85 }}>
            Grace Eseigboria Omoifo Memorial Foundation — continuing a life of
            quiet, consistent service through education, welfare, and health
            outreach.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <p><Link to="/about">About the Deaconess</Link></p>
          <p><Link to="/board">Board Members</Link></p>
          <p><Link to="/team">Our Team</Link></p>
          <p><Link to="/gallery">Gallery & Articles</Link></p>
        </div>
        <div>
          <h4>Get Involved</h4>
          <p><Link to="/donate">Make a Donation</Link></p>
          <p><Link to="/team">Volunteer With Us</Link></p>
          <p><Link to="/contact">Contact Us</Link></p>
        </div>
      </div>
      <div className="container footer__bottom">
        © {new Date().getFullYear()} Grace Eseigboria Omoifo Memorial Foundation. All rights reserved.
      </div>
    </footer>
  );
}
