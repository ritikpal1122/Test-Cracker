import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Tools from './components/Tools';
import Roadmap from './components/Roadmap';
import Resources from './components/Resources';
import TaskPlanner from './components/TaskPlanner';
import TestingChecklist from './components/TestingChecklist';
import CloudTools from './components/Cloud';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-800 text-gray-100">
        <Navigation />
        
        <main className="ml-20 p-8">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/tasks" element={<TaskPlanner />} />
              <Route path="/checklist" element={<TestingChecklist />} />
              <Route path="/cloud" element={<CloudTools />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;