import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Square, ChevronDown, ChevronRight } from 'lucide-react';

const TestingChecklist = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const checklistSections = [
    {
      id: 'project-setup',
      title: 'Project Setup & Planning',
      items: [
        'Review project requirements and acceptance criteria',
        'Define test strategy and approach',
        'Set up test environment',
        'Configure version control and branching strategy',
        'Create test plan document',
        'Define test data requirements',
        'Set up test management tool',
        'Configure CI/CD pipeline for testing'
      ]
    },
    {
      id: 'test-design',
      title: 'Test Design & Documentation',
      items: [
        'Create test scenarios',
        'Write detailed test cases',
        'Design test data sets',
        'Create API test specifications',
        'Define performance test scenarios',
        'Document security test cases',
        'Create test matrices',
        'Review test coverage'
      ]
    },
    {
      id: 'automation-framework',
      title: 'Automation Framework Setup',
      items: [
        'Choose automation tools and frameworks',
        'Set up base framework structure',
        'Configure test runners',
        'Set up reporting framework',
        'Create utility functions',
        'Implement page objects/screen objects',
        'Set up test data management',
        'Configure parallel execution'
      ]
    },
    {
      id: 'api-testing',
      title: 'API Testing Implementation',
      items: [
        'Set up API testing framework',
        'Create API test collections',
        'Implement authentication tests',
        'Test API endpoints',
        'Validate response schemas',
        'Test error scenarios',
        'Implement integration tests',
        'Set up API monitoring'
      ]
    },
    {
      id: 'ui-testing',
      title: 'UI Testing Implementation',
      items: [
        'Create base UI test framework',
        'Implement cross-browser testing',
        'Create smoke tests',
        'Implement regression tests',
        'Add visual testing',
        'Test responsive design',
        'Implement accessibility tests',
        'Create end-to-end scenarios'
      ]
    },
    {
      id: 'performance',
      title: 'Performance Testing',
      items: [
        'Set up performance testing tools',
        'Create load test scripts',
        'Define performance benchmarks',
        'Implement stress tests',
        'Create scalability tests',
        'Monitor system metrics',
        'Test database performance',
        'Generate performance reports'
      ]
    },
    {
      id: 'security',
      title: 'Security Testing',
      items: [
        'Implement security scanning',
        'Test authentication mechanisms',
        'Perform vulnerability assessment',
        'Test authorization rules',
        'Implement penetration testing',
        'Check for common security issues',
        'Test data encryption',
        'Validate security headers'
      ]
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Maintenance',
      items: [
        'Set up test execution monitoring',
        'Configure alert mechanisms',
        'Implement logging system',
        'Create maintenance scripts',
        'Set up error tracking',
        'Configure performance monitoring',
        'Implement health checks',
        'Create backup strategies'
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
        Testing Process Checklist
      </motion.h1>

      <div className="space-y-4">
        {checklistSections.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
            >
              <span className="text-xl font-semibold text-purple-400">
                {section.title}
              </span>
              {expandedSections.includes(section.id) ? (
                <ChevronDown className="w-5 h-5 text-purple-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-purple-400" />
              )}
            </button>

            {expandedSections.includes(section.id) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 space-y-3 border-t border-gray-800"
              >
                {section.items.map((item, index) => (
                  <ChecklistItem key={index} text={item} />
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ChecklistItem = ({ text }: { text: string }) => {
  const [checked, setChecked] = useState(false);

  return (
    <motion.div
      whileHover={{ x: 10 }}
      className="flex items-center gap-3 text-gray-300 hover:text-white"
    >
      <button
        onClick={() => setChecked(!checked)}
        className="flex-shrink-0"
      >
        {checked ? (
          <CheckSquare className="w-5 h-5 text-purple-500" />
        ) : (
          <Square className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <span className={checked ? 'line-through text-gray-500' : ''}>
        {text}
      </span>
    </motion.div>
  );
};

export default TestingChecklist;