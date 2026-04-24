// 技能数据
export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend' },
  { name: 'JavaScript', level: 92, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Git', level: 80, category: 'other' },
  { name: 'Figma', level: 70, category: 'design' },
];

// 按分类分组
export const skillsByCategory = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);

export const categoryLabels: Record<string, string> = {
  frontend: '前端开发',
  backend: '后端开发',
  design: '设计工具',
  other: '其他技能',
};
