import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Cpu, Database, Globe, Brain, Shield, Zap } from 'lucide-react';

const CloudTools = () => {
  const tools = [
    {
      category: "Browser Testing",
      icon: Globe,
      items: [
        {
          name: "BrowserStack",
          description: "Cross-browser testing platform",
          url: "https://www.browserstack.com/",
          features: ["Real device cloud", "Live testing", "Screenshot testing", "Responsive testing"]
        },
        {
          name: "LambdaTest",
          description: "Cross-browser testing cloud",
          url: "https://www.lambdatest.com/",
          features: ["Automated testing", "Live testing", "Visual regression", "Smart testing"]
        },
        {
          name: "Sauce Labs",
          description: "Cloud-based testing platform",
          url: "https://saucelabs.com/",
          features: ["Cross-browser testing", "Mobile testing", "CI/CD integration", "Analytics"]
        }
      ]
    },
    {
      category: "Performance Cloud",
      icon: Zap,
      items: [
        {
          name: "BlazeMeter",
          description: "Performance testing cloud",
          url: "https://www.blazemeter.com/",
          features: ["Load testing", "API testing", "Monitoring", "Test automation"]
        },
        {
          name: "Flood.io",
          description: "Distributed load testing",
          url: "https://flood.io/",
          features: ["Load testing", "Performance testing", "Distributed testing", "Real-time analytics"]
        }
      ]
    },
    {
      category: "AI Testing",
      icon: Brain,
      items: [
        {
          name: "Testim",
          description: "AI-powered testing",
          url: "https://www.testim.io/",
          features: ["AI test automation", "Smart locators", "Self-healing", "Visual testing"]
        },
        {
          name: "Applitools",
          description: "Visual AI testing",
          url: "https://applitools.com/",
          features: ["Visual testing", "Cross-browser testing", "Layout testing", "AI-powered validation"]
        },
        {
          name: "Mabl",
          description: "Intelligent test automation",
          url: "https://www.mabl.com/",
          features: ["Low-code testing", "Auto-healing", "CI/CD integration", "Visual testing"]
        }
      ]
    },
    {
      category: "Security Testing",
      icon: Shield,
      items: [
        {
          name: "Qualys",
          description: "Cloud security platform",
          url: "https://www.qualys.com/",
          features: ["Vulnerability scanning", "Compliance monitoring", "Web app security", "Cloud security"]
        },
        {
          name: "Detectify",
          description: "Security scanning platform",
          url: "https://detectify.com/",
          features: ["Automated scanning", "Asset monitoring", "Security monitoring", "API security"]
        }
      ]
    },
    {
      category: "Test Management",
      icon: Database,
      items: [
        {
          name: "TestRail",
          description: "Test case management",
          url: "https://www.gurock.com/testrail",
          features: ["Test management", "Reporting", "Integration", "Collaboration"]
        },
        {
          name: "Xray",
          description: "Test management for Jira",
          url: "https://www.getxray.app/",
          features: ["Test planning", "Execution tracking", "Jira integration", "Requirements traceability"]
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4"
      >
        <Cloud className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold">Testing Cloud Services</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-semibold">{category.category}</h2>
            </div>
            <div className="space-y-4">
              {category.items.map((tool) => (
                <motion.a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="block p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <h3 className="text-lg font-medium text-purple-400">{tool.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{tool.description}</p>
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CloudTools;