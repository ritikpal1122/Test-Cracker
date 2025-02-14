import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, Download, Book } from 'lucide-react';

const Resume = () => {
  const sections = [
    {
      title: "Skills & Tools",
      content: [
        "Test Automation (Selenium, Cypress, Playwright)",
        "API Testing (Postman, REST Assured)",
        "Performance Testing (JMeter, k6)",
        "CI/CD (Jenkins, GitHub Actions)",
        "Cloud Testing (AWS, Azure)",
        "Mobile Testing (Appium)",
        "Security Testing",
        "Test Management"
      ]
    },
    {
      title: "Best Practices",
      content: [
        "Test Pyramid Implementation",
        "Shift-Left Testing Approach",
        "BDD/TDD Methodologies",
        "Page Object Model",
        "Clean Code Principles",
        "Test Data Management",
        "Continuous Testing",
        "Documentation"
      ]
    },
    {
      title: "Contribution Guidelines",
      content: [
        "Fork the repository",
        "Create a feature branch",
        "Follow coding standards",
        "Write clear commit messages",
        "Add unit tests",
        "Update documentation",
        "Submit pull request",
        "Respond to reviews"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 rounded-xl p-8"
      >
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">SDET Resume Template</h1>
            <p className="text-gray-400">A comprehensive guide for Software Development Engineer in Test</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
              <Download className="w-4 h-4" />
              Download Template
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <Book className="w-4 h-4" />
              View Guide
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-4 text-purple-400">{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <h2 className="text-xl font-semibold mb-4">Professional Profiles</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/ritikpal1122"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ritikpal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="mailto:er.ritikpal@email.com"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;