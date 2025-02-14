import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, PenTool as Tool, Map, BookOpen, Calendar, Settings, CheckSquare, Menu, Cloud, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Tool, label: 'Tools', path: '/tools' },
    { icon: Map, label: 'Roadmap', path: '/roadmap' },
    { icon: BookOpen, label: 'Resources', path: '/resources' },
    { icon: Calendar, label: 'Task Planner', path: '/tasks' },
    { icon: CheckSquare, label: 'Checklist', path: '/checklist' },
    { icon: Cloud, label: 'Test Cloud', path: '/cloud' },
    { icon: FileText, label: 'Resume', path: '/resume' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2  rounded-lg"
      >
        <Menu className="w-6 h-6 text-gray-400" />
      </button>

      {/* Navigation Sidebar */}
      <nav className={`fixed left-0 top-0 h-screen bg-gray-900 transition-all duration-300 z-40
        ${isMenuOpen ? 'w-64' : 'w-20'}
        md:w-20
        flex flex-col items-center py-12`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsMenuOpen(false)}
            className="relative w-full py-4 flex flex-col items-start group"
          >
            {location.pathname === item.path && (
              <motion.div
                layoutId="active"
                className="absolute left-0 w-1 h-8 bg-purple-500 rounded-r-md"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 100 }}
              />
            )}
            <div className="flex items-center gap-4 px-6">
              <item.icon
                className={`w-6 h-6 ${
                  location.pathname === item.path
                    ? 'text-purple-500'
                    : 'text-gray-400 group-hover:text-gray-200'
                }`}
              />
              <span className={`text-sm ${isMenuOpen ? 'block md:hidden' : 'hidden'} text-gray-400 group-hover:text-gray-200`}>
                {item.label}
              </span>
            </div>
            <span className="text-xs mt-1 text-gray-400 group-hover:text-gray-200 hidden md:block">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;