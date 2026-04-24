import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills, categoryLabels } from '../data/skills';
import { Code2, Palette, Server, Wrench } from 'lucide-react';

// 分类图标映射
const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Code2 className="w-5 h-5" />,
  backend: <Server className="w-5 h-5" />,
  design: <Palette className="w-5 h-5" />,
  other: <Wrench className="w-5 h-5" />,
};

/**
 * About 组件 - 关于我部分
 * 展示个人介绍和技能列表
 */
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // 技能按分类分组
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              关于我
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            我是一名充满热情的前端开发工程师，致力于创造优秀的用户体验
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 个人介绍 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">个人简介</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                我是一名拥有 3 年前端开发经验的工程师，专注于 React 生态系统的开发。
                在过去的工作中，我参与了多个大型项目的开发，从企业级后台管理系统到高并发的 C 端应用。
              </p>
              <p>
                我热爱学习新技术，关注前端领域的最新发展。除了技术能力，我也注重团队协作和代码质量，
                相信好的代码不仅要能运行，还要易于维护和理解。
              </p>
              <p>
                工作之余，我喜欢阅读技术博客、参与开源项目，也会在个人博客上分享学习心得。
                我相信持续学习和分享是成长的最佳途径。
              </p>
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { number: '3+', label: '年经验' },
                { number: '20+', label: '项目' },
                { number: '100%', label: '热情' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 技能列表 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">技能专长</h3>
            
            <div className="space-y-6">
              {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  {/* 分类标题 */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-green-400">
                      {categoryIcons[category]}
                    </span>
                    <h4 className="font-medium text-white">
                      {categoryLabels[category] || category}
                    </h4>
                  </div>

                  {/* 技能项 */}
                  <div className="space-y-3">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 }}
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
