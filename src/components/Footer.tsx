import { Heart } from 'lucide-react';

/**
 * Footer 组件 - 页脚
 * 包含版权信息和简单的导航链接
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* 版权信息 */}
          <p className="text-sm text-gray-500 flex items-center">
            <span>© {currentYear} 个人作品集. 用</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" />
            <span>制作</span>
          </p>

          {/* 快速链接 */}
          <nav className="flex items-center space-x-6">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-gray-500 hover:text-green-400 transition-colors"
            >
              首页
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-gray-500 hover:text-green-400 transition-colors"
            >
              关于
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-gray-500 hover:text-green-400 transition-colors"
            >
              作品
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-gray-500 hover:text-green-400 transition-colors"
            >
              联系
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
