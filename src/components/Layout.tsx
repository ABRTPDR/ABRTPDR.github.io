import { NavLink, Outlet } from 'react-router-dom';
import BITSLogo from '../assets/BITSLogo.svg';
import Footer from './Footer';

export default function Layout() {
  // Helper function to handle the active tab styling dynamically
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `uppercase transition-colors ${
      isActive 
        ? 'text-blue-700 font-bold' // Highlighted state
        : 'text-gray-600 hover:text-blue-700' // Default state
    }`;

  return (
    <div className="min-h-screen bg-white">
      {/* Added sticky, top-0, z-50, and bg-white to the header */}
      <header className="sticky top-0 z-50 bg-white flex flex-col md:flex-row justify-between items-center py-6 px-8 border-b border-gray-100 shadow-sm">
        
        {/* Top Left: Logo & Titles */}
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <img 
            src={BITSLogo} 
            alt="BITS Pilani Logo" 
            className="w-[60px] h-[60px] object-contain" 
          />
          
          <div className="flex flex-col">
            <span className="text-xl font-heading tracking-tight text-gray-900 uppercase">
              Election Commission
            </span>
            <span className="text-xs text-gray-500 tracking-wide uppercase">
              BITS Pilani, Pilani Campus
            </span>
          </div>
        </div>

        {/* Top Right: Navigation */}
        <nav className="flex gap-6 text-sm tracking-wide">
          {/* Note: The 'end' prop on Home ensures it only highlights when the path is exactly "/" */}
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/announcements" className={navLinkClass}>Announcements</NavLink>
          <NavLink to="/candidates" className={navLinkClass}>Candidates</NavLink>
          <NavLink to="/archives" className={navLinkClass}>Archives</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
        </nav>
      </header>

      
      {/* Outlet is where current page's content gets rendered */}
      <Outlet />
      
      <Footer />
    </div>
  );
}