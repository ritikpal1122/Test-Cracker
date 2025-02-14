import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, ChevronRight } from 'lucide-react';

const Roadmap = () => {
  const roadmapSteps = [
    {
      level: "Beginner",
      steps: [
        "Learn programming basics (Python/Java)",
        "Understanding of Software Testing concepts",
        "Manual Testing fundamentals",
        "Basic Git operations",
        "Introduction to API concepts"
      ]
    },
    {
      level: "Intermediate",
      steps: [
        "Automation with Selenium/Cypress",
        "API Testing with Postman/REST Assured",
        "Test frameworks (TestNG, JUnit, PyTest)",
        "CI/CD basics (Jenkins, GitHub Actions)",
        "SQL and Database testing"
      ]
    },
    {
      level: "Advanced",
      steps: [
        "Performance Testing (JMeter, k6)",
        "Security Testing basics",
        "Mobile Testing (Appium)",
        "Cloud Testing",
        "Test Architecture and Strategy"
      ]
    },
    {
      level: "Expert",
      steps: [
        "Advanced Test Frameworks",
        "Test Infrastructure as Code",
        "Distributed Testing",
        "AI/ML in Testing",
        "Leadership and Mentoring"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold"
      >
        SDET Career Roadmap
      </motion.h1>

      <div className="space-y-8">
        {roadmapSteps.map((phase, index) => (
          <motion.div
            key={phase.level}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold mb-4 text-purple-400">
              {phase.level}
            </h2>
            <div className="space-y-4">
              {phase.steps.map((step, stepIndex) => (
                <motion.div
                  key={stepIndex}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-purple-500" />
                  <span>{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;