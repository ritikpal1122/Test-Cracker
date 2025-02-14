import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Gauge, Shield, Activity, ExternalLink, Search } from 'lucide-react';

const Tools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tools = [
    {
      category: "Automation",
      icon: Terminal,
      items: [
        { 
          name: "Selenium",
          description: "Web automation testing framework",
          url: "https://www.selenium.dev/",
          features: ["Cross-browser testing", "Grid support", "Page object model", "Multiple language bindings"]
        },
        { 
          name: "Cypress",
          description: "Modern web testing framework",
          url: "https://www.cypress.io/",
          features: ["Real-time reloading", "Time travel", "Automatic waiting", "Network traffic control"]
        },
        { 
          name: "Playwright",
          description: "Reliable end-to-end testing",
          url: "https://playwright.dev/",
          features: ["Cross-browser", "Mobile emulation", "Network interception", "Test generator"]
        },
        { 
          name: "Appium",
          description: "Mobile app automation testing",
          url: "https://appium.io/",
          features: ["Cross-platform", "Native apps", "Hybrid apps", "Mobile web"]
        }
      ]
    },
    {
      category: "API Testing",
      icon: Code,
      items: [
        { 
          name: "Postman",
          description: "API development and testing",
          url: "https://www.postman.com/",
          features: ["Request builder", "Automated testing", "Mock servers", "Team collaboration"]
        },
        { 
          name: "REST Assured",
          description: "REST API testing library",
          url: "https://rest-assured.io/",
          features: ["BDD syntax", "Response validation", "Schema validation", "Authentication support"]
        },
        { 
          name: "SoapUI",
          description: "SOAP and REST testing",
          url: "https://www.soapui.org/",
          features: ["SOAP/REST support", "Load testing", "Security testing", "Mock services"]
        },
        { 
          name: "K6",
          description: "Modern load testing tool",
          url: "https://k6.io/",
          features: ["Performance testing", "Load testing", "Stress testing", "Scalability testing"]
        }
      ]
    },
    {
      category: "Performance",
      icon: Gauge,
      items: [
        { 
          name: "JMeter",
          description: "Performance testing tool",
          url: "https://jmeter.apache.org/",
          features: ["Load testing", "Distributed testing", "Parameterization", "Results analysis"]
        },
        { 
          name: "Gatling",
          description: "Load testing framework",
          url: "https://gatling.io/",
          features: ["Scala DSL", "Real-time metrics", "Jenkins integration", "Detailed reports"]
        },
        { 
          name: "Lighthouse",
          description: "Web performance testing",
          url: "https://developers.google.com/web/tools/lighthouse",
          features: ["Performance metrics", "PWA validation", "Best practices", "SEO analysis"]
        },
        { 
          name: "Artillery",
          description: "Cloud-scale performance testing",
          url: "https://artillery.io/",
          features: ["Scalable testing", "Custom scenarios", "Cloud integration", "Real-time metrics"]
        }
      ]
    },
    {
      category: "Security",
      icon: Shield,
      items: [
        { 
          name: "OWASP ZAP",
          description: "Security testing tool",
          url: "https://www.zaproxy.org/",
          features: ["Vulnerability scanning", "Active scanning", "Spider crawling", "API scanning"]
        },
        { 
          name: "Burp Suite",
          description: "Web security testing",
          url: "https://portswigger.net/burp",
          features: ["Proxy intercept", "Scanner", "Intruder", "Repeater"]
        },
        { 
          name: "Acunetix",
          description: "Vulnerability scanner",
          url: "https://www.acunetix.com/",
          features: ["Automated scanning", "Vulnerability detection", "Compliance checking", "Integration support"]
        },
        { 
          name: "Nmap",
          description: "Network security scanner",
          url: "https://nmap.org/",
          features: ["Port scanning", "Service detection", "OS detection", "Script engine"]
        }
      ]
    },
    {
      category: "Monitoring",
      icon: Activity,
      items: [
        { 
          name: "Grafana",
          description: "Metrics visualization",
          url: "https://grafana.com/",
          features: ["Dashboard creation", "Alert management", "Data visualization", "Plugin system"]
        },
        { 
          name: "Prometheus",
          description: "Monitoring system",
          url: "https://prometheus.io/",
          features: ["Time series DB", "Alert manager", "Service discovery", "PromQL"]
        },
        { 
          name: "ELK Stack",
          description: "Log management and analytics",
          url: "https://www.elastic.co/elastic-stack",
          features: ["Log collection", "Search", "Visualization", "Machine learning"]
        },
        { 
          name: "New Relic",
          description: "Application performance monitoring",
          url: "https://newrelic.com/",
          features: ["Real-time monitoring", "Error tracking", "Infrastructure monitoring", "Distributed tracing"]
        }
      ]
    }
  ];

  const filteredTools = tools
    .map(category => ({
      ...category,
      items: category.items.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(category =>
      selectedCategory === 'all' || category.category.toLowerCase() === selectedCategory.toLowerCase()
    )
    .filter(category => category.items.length > 0);

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold"
      >
        Testing Tools
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-900 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 bg-gray-900 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
        >
          <option value="all">All Categories</option>
          {tools.map(category => (
            <option key={category.category} value={category.category.toLowerCase()}>
              {category.category}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-6">
        {filteredTools.map((category) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <category.icon className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-semibold">{category.category}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-purple-400">{tool.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{tool.description}</p>
                    </div>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-500 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tools;