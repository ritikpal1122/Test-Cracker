// import React from 'react';
// import { motion } from 'framer-motion';
// import { Terminal, Workflow, BookCheck, Code, Gauge, Shield, Activity, Brain } from 'lucide-react';

// const Dashboard = () => {
//   const cards = [
//     {
//       icon: Terminal,
//       title: "Testing Tools",
//       description: "Access your essential testing tools and frameworks",
//       gradient: "from-blue-500 to-cyan-500",
//       path: "/tools"
//     },
//     {
//       icon: Workflow,
//       title: "Test Automation",
//       description: "Manage and monitor your automated test suites",
//       gradient: "from-purple-500 to-pink-500",
//       path: "/automation"
//     },
//     {
//       icon: Code,
//       title: "API Testing",
//       description: "Tools and resources for API testing",
//       gradient: "from-green-500 to-emerald-500",
//       path: "/api"
//     },
//     {
//       icon: Gauge,
//       title: "Performance",
//       description: "Performance testing and monitoring tools",
//       gradient: "from-orange-500 to-red-500",
//       path: "/performance"
//     },
//     {
//       icon: Shield,
//       title: "Security Testing",
//       description: "Security testing tools and best practices",
//       gradient: "from-indigo-500 to-blue-500",
//       path: "/security"
//     },
//     {
//       icon: Activity,
//       title: "Monitoring",
//       description: "Test monitoring and reporting tools",
//       gradient: "from-pink-500 to-rose-500",
//       path: "/monitoring"
//     },
//     {
//       icon: BookCheck,
//       title: "Learning Path",
//       description: "Track your progress and access learning resources",
//       gradient: "from-amber-500 to-yellow-500",
//       path: "/learning"
//     },
//     {
//       icon: Brain,
//       title: "Best Practices",
//       description: "SDET best practices and guidelines",
//       gradient: "from-teal-500 to-cyan-500",
//       path: "/practices"
//     }
//   ];

//   return (
//     <div className="space-y-8">
//       <motion.h1 
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
//       >
//         SDET Toolkit & Resource Center
//       </motion.h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {cards.map((card, index) => (
//           <QuickAccessCard
//             key={index}
//             icon={card.icon}
//             title={card.title}
//             description={card.description}
//             gradient={card.gradient}
//             delay={index * 0.1}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const QuickAccessCard = ({ icon: Icon, title, description, gradient, delay }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay }}
//     whileHover={{ scale: 1.02 }}
//     whileTap={{ scale: 0.98 }}
//     className={`p-6 rounded-xl bg-gray-900 border border-gray-700 hover:border-gray-600 
//                 transition-all duration-300 cursor-pointer`}
//   >
//     <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${gradient}`}>
//       <Icon className="w-6 h-6 text-white" />
//     </div>
//     <h3 className="mt-4 text-xl font-semibold text-gray-100">{title}</h3>
//     <p className="mt-2 text-gray-400">{description}</p>
//   </motion.div>
// );

// export default Dashboard;


import { motion } from 'framer-motion';
import { Terminal, Workflow, BookCheck, Code, Gauge, Shield, Activity, Brain, Github, Twitter, Linkedin, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const cards = [
    {
      icon: Terminal,
      title: "Testing Tools",
      description: "Access your essential testing tools and frameworks",
      gradient: "from-blue-500 to-cyan-500",
      path: "/tools"
    },
    {
      icon: Workflow,
      title: "Test Automation",
      description: "Manage and monitor your automated test suites",
      gradient: "from-purple-500 to-pink-500",
      path: "/automation"
    },
    {
      icon: Code,
      title: "API Testing",
      description: "Tools and resources for API testing",
      gradient: "from-green-500 to-emerald-500",
      path: "/api"
    },
    {
      icon: Gauge,
      title: "Performance",
      description: "Performance testing and monitoring tools",
      gradient: "from-orange-500 to-red-500",
      path: "/performance"
    },
    {
      icon: Shield,
      title: "Security Testing",
      description: "Security testing tools and best practices",
      gradient: "from-indigo-500 to-blue-500",
      path: "/security"
    },
    {
      icon: Activity,
      title: "Monitoring",
      description: "Test monitoring and reporting tools",
      gradient: "from-pink-500 to-rose-500",
      path: "/monitoring"
    },
    {
      icon: BookCheck,
      title: "Learning Path",
      description: "Track your progress and access learning resources",
      gradient: "from-amber-500 to-yellow-500",
      path: "/learning"
    },
    {
      icon: Brain,
      title: "Best Practices",
      description: "SDET best practices and guidelines",
      gradient: "from-teal-500 to-cyan-500",
      path: "/practices"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 rounded-xl p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            SDET Toolkit & Resource Center
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Your comprehensive platform for test automation, tools, and best practices
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/yourusername/sdet-toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Twitter className="w-5 h-5" />
              Follow Updates
            </a>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Connect
            </a>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Testing Tools", value: "50+" },
          { label: "Learning Resources", value: "100+" },
          { label: "Best Practices", value: "30+" },
          { label: "Active Users", value: "1000+" }
        ].map((stat, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-purple-400">{stat.value}</h3>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </motion.div>
      
      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <QuickAccessCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            gradient={card.gradient}
            delay={index * 0.1}
            path={card.path}
          />
        ))}
      </div>

      {/* Creator Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 rounded-xl p-6 mt-8"
      >
        <h2 className="text-2xl font-bold mb-4">About the Creator</h2>
        <div className="flex items-center gap-6 flex-wrap">
          {/* <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=100&h=100"
            alt="Creator"
            className="w-20 h-20 rounded-full"
          /> */}
          <User size={40} />
          <div>

            <h3 className="text-xl font-semibold">Ritik Pal</h3>
            {/* <p className="text-gray-400">Senior SDET @ Tech Company</p> */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/ritikpal1122"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ritikpaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ritikpal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const QuickAccessCard = ({ icon: Icon, title, description, gradient, delay, path }) => (
  <Link to={path}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`p-6 rounded-xl bg-gray-900 border border-gray-700 hover:border-gray-600 
                  transition-all duration-300 cursor-pointer h-full`}
    >
      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${gradient}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-100">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </motion.div>
  </Link>
);

export default Dashboard;