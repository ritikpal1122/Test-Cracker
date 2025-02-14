import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, AlertCircle, Plus, Trash2, Edit2, Save } from 'lucide-react';

const TaskPlanner = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "API Test Suite Setup",
      description: "Set up initial API test suite using REST Assured",
      priority: "high",
      status: "in-progress",
      dueDate: "2024-03-20",
      category: "api"
    },
    {
      id: 2,
      title: "Performance Test Plan",
      description: "Create performance test plan for the checkout flow",
      priority: "medium",
      status: "todo",
      dueDate: "2024-03-25",
      category: "performance"
    },
    {
      id: 3,
      title: "Automation Framework Update",
      description: "Update Selenium framework to latest version",
      priority: "low",
      status: "completed",
      dueDate: "2024-03-15",
      category: "automation"
    }
  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
    category: 'automation'
  });

  const [isAddingTask, setIsAddingTask] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'todo':
        return <Circle className="w-5 h-5 text-gray-400" />;
      default:
        return <AlertCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const handleAddTask = () => {
    if (newTask.title && newTask.dueDate) {
      setTasks([...tasks, {
        id: tasks.length + 1,
        ...newTask,
        status: 'todo'
      }]);
      setNewTask({
        title: '',
        description: '',
        priority: 'medium',
        dueDate: '',
        category: 'automation'
      });
      setIsAddingTask(false);
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleStatusChange = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const statusOrder = ['todo', 'in-progress', 'completed'];
        const currentIndex = statusOrder.indexOf(task.status);
        const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length];
        return { ...task, status: nextStatus };
      }
      return task;
    }));
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = () => {
    setTasks(tasks.map(task => 
      task.id === editingTask.id ? editingTask : task
    ));
    setEditingTask(null);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold">Task Planner</h1>
        <button
          onClick={() => setIsAddingTask(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Task
        </button>
      </motion.div>

      {isAddingTask && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Task Title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              className="w-full p-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            <textarea
              placeholder="Description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              className="w-full p-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            <div className="flex gap-4">
              <select
                value={newTask.priority}
                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                className="p-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
              <select
                value={newTask.category}
                onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                className="p-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
              >
                <option value="automation">Automation</option>
                <option value="api">API Testing</option>
                <option value="performance">Performance</option>
                <option value="security">Security</option>
                <option value="monitoring">Monitoring</option>
              </select>
              <input
                type="date"
                value={newTask.dueDate}
                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                className="p-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleAddTask}
                className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Add Task
              </button>
              <button
                onClick={() => setIsAddingTask(false)}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900 rounded-xl p-6"
          >
            {editingTask?.id === task.id ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={editingTask.title}
                  onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                  className="w-full p-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
                <textarea
                  value={editingTask.description}
                  onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                  className="w-full p-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
                <div className="flex gap-4">
                  <select
                    value={editingTask.priority}
                    onChange={(e) => setEditingTask({ ...editingTask, priority: e.target.value })}
                    className="p-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                  </select>
                  <input
                    type="date"
                    value={editingTask.dueDate}
                    onChange={(e) => setEditingTask({ ...editingTask, dueDate: e.target.value })}
                    className="p-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleUpdateTask}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                  <button
                    onClick={() => setEditingTask(null)}
                    className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => handleStatusChange(task.id)}
                      className="flex-shrink-0 mt-1"
                    >
                      {getStatusIcon(task.status)}
                    </button>
                    <div>
                      <h2 className="text-lg font-semibold">{task.title}</h2>
                      <p className="text-gray-400 mt-2">{task.description}</p>
                      <div className="flex items-center gap-4 mt-4">
                        <span className="text-sm text-gray-500">
                          Due: {new Date(task.dueDate).toLocaleDateString()}
                        </span>
                        <span className={`text-sm font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                        </span>
                        <span className="text-sm text-purple-400 capitalize">
                          {task.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditTask(task)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TaskPlanner;