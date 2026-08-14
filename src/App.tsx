import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Candidates from './pages/Candidates';
import Archives from './pages/Archives';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout component wraps all nested routes */}
        <Route path="/" element={<Layout />}>
          
          {/* 'index' means this loads automatically at the "/" path */}
          <Route index element={<Home />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;