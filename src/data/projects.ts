// 项目数据
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: '个人博客系统',
    description: '一个基于 React 和 Node.js 的个人博客系统，支持 Markdown 编辑、文章分类、评论功能等。采用响应式设计，支持深色模式。',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: '2',
    title: '电商后台管理',
    description: '功能完善的电商后台管理系统，包含商品管理、订单处理、数据统计等模块。使用 TypeScript 保证代码质量。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Vue 3', 'TypeScript', 'Element Plus', 'ECharts'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: '3',
    title: '移动端 H5 活动页',
    description: '为营销活动开发的 H5 页面集合，包含抽奖、砍价、拼团等多种营销组件。注重动画效果和用户体验。',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    demoUrl: 'https://example.com',
  },
  {
    id: '4',
    title: '数据可视化大屏',
    description: '企业级数据可视化大屏，实时展示业务数据。支持多种图表类型，适配各种屏幕尺寸。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'D3.js', 'WebSocket', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
];
