export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'automation' | 'api' | 'performance' | 'security' | 'monitoring';
  icon: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  resources: Array<{
    title: string;
    url: string;
    type: 'article' | 'video' | 'course';
  }>;
}