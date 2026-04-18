import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  // SVG Icons defined as components for cleanliness
  const HomeIcon = () => {
    return  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  };

  const TimelineIcon = () => {
    return<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  };

  const StatsIcon = () => {
    return<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
  };

  const navLinks = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'Timeline', path: '/timeline', icon: TimelineIcon },
  { name: 'Stats', path: '/stats', icon: StatsIcon },
];

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-100">
      {/* Logo */}
      <div className="text-xl tracking-tight">
        <span className="font-bold text-slate-900">Keen</span>
        <span className="font-semibold text-[#2d4a3e]">Keeper</span>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4">
        {navLinks.map((link) => {
  const Icon = link.icon;

  return (
    <NavLink key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-[#2d4a3e] text-white' // Active style
                  : 'text-slate-500 hover:text-[#2d4a3e]' // Inactive style
              }`
            }>
      <Icon />
      {link.name}
    </NavLink>
  );
})}
    
      </div>
    </nav>
  );
};

export default Navbar;



