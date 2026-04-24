import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App 组件 - 应用主组件
 * 整合所有页面组件，构建完整的个人作品集网站
 */
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 顶部导航 */}
      <Header />
      
      {/* 主内容区域 */}
      <main>
        {/* 首页 Hero 区域 */}
        <Hero />
        
        {/* 关于我 */}
        <About />
        
        {/* 作品展示 */}
        <Projects />
        
        {/* 联系方式 */}
        <Contact />
      </main>
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
}

export default App;
