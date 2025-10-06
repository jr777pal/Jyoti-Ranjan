import { Enhanced3DBackground } from '@/components/3d/Enhanced3DBackground';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { AnimatedSkills3D } from '@/components/3d/AnimatedSkills3D';
import { Projects } from '@/components/portfolio/Projects';
import { Contact } from '@/components/portfolio/Contact';
import { Scene3DLoader } from '@/components/3d/Scene3DLoader';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Suspense fallback={<Scene3DLoader />}>
        <Enhanced3DBackground />
      </Suspense>
      
      <main className="relative z-10">
        <Hero />
        <About />
        <AnimatedSkills3D />
        <Projects />
        <Contact />
        
        <footer className="py-8 text-center text-muted-foreground border-t border-cyber-border bg-cyber-surface/20 backdrop-blur-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-2"
          >
            &copy; 2025 Jyoti Ranjan Pal . Crafted with passion and precision.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-neon-blue"
          >
            Built with React Three Fiber • Framer Motion • TypeScript
          </motion.p>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;