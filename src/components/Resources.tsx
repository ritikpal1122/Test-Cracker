import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Globe, Code } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      category: "Documentation",
      icon: BookOpen,
      items: [
        {
          title: "Selenium Documentation",
          url: "https://www.selenium.dev/documentation/",
          type: "Official Docs"
        },
        {
          title: "Cypress Documentation",
          url: "https://docs.cypress.io/",
          type: "Official Docs"
        },
        {
          title: "REST Assured Wiki",
          url: "https://github.com/rest-assured/rest-assured/wiki",
          type: "Wiki"
        }
      ]
    },
    {
      category: "Video Tutorials",
      icon: Video,
      items: [
        {
          title: "Test Automation University",
          url: "https://testautomationu.applitools.com/",
          type: "Course Platform"
        },
        {
          title: "freeCodeCamp Testing Course",
          url: "https://www.freecodecamp.org/",
          type: "Video Course"
        },
        {
          title: "Ministry of Testing",
          url: "https://www.ministryoftesting.com/",
          type: "Learning Platform"
        }
      ]
    },
    {
      category: "Blogs & Articles",
      icon: Globe,
      items: [
        {
          title: "Martin Fowler's Blog",
          url: "https://martinfowler.com/testing/",
          type: "Blog"
        },
        {
          title: "Software Testing Help",
          url: "https://www.softwaretestinghelp.com/",
          type: "Tutorial Site"
        },
        {
          title: "Test Project Blog",
          url: "https://blog.testproject.io/",
          type: "Blog"
        }
      ]
    },
    {
      category: "Practice Projects",
      icon: Code,
      items: [
        {
          title: "The Internet",
          url: "http://the-internet.herokuapp.com/",
          type: "Test App"
        },
        {
          title: "RealWorld Example",
          url: "https://github.com/gothinkster/realworld",
          type: "Example App"
        },
        {
          title: "ParaBank",
          url: "https://parabank.parasoft.com/",
          type: "Demo App"
        }
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
        Learning Resources
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <category.icon className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-semibold">{category.category}</h2>
            </div>
            <div className="space-y-4">
              {category.items.map((resource, resourceIndex) => (
                <motion.a
                  key={resourceIndex}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="block p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                >
                  <h3 className="font-medium text-purple-400">{resource.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{resource.type}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resources;