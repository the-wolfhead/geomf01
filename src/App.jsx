import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import DeaconessBio from './pages/DeaconessBio.jsx';
import BoardMembers from './pages/BoardMembers.jsx';
import Team from './pages/Team.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import Donate from './pages/Donate.jsx';
import DonateWebview from './pages/DonateWebview.jsx';
import DonateSuccess from './pages/DonateSuccess.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/deaconess" element={<DeaconessBio />} />
          <Route path="/board" element={<BoardMembers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/webview" element={<DonateWebview />} />
          <Route path="/donate/success/:donationId" element={<DonateSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
