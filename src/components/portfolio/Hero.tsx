import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center px-20 pt-24 md:pt-32">

      {/* Move image to top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-20 z-5"
      >
        <img
          src="./public/chiku.jpg" 
          alt="Jyoti Ranjan Pal"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-neon-blue shadow-lg"
        />
      </motion.div>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-gradient"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Jyoti Ranjan Pal 
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-4xl font-light text-neon-blue"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Computer Science Engineer
          </motion.h2>

          {/* Remove the image from here */}
        
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Crafting innovative solutions through code. Specialized in full-stack development, 
            machine learning, and creating immersive digital experiences that push the boundaries of technology.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <Button
            size="lg"
            className="bg-neon-blue hover:bg-neon-purple text-cyber-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 glow-blue hover:glow-purple"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-cyber-dark px-8 py-4 rounded-lg transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <a
            href="https://github.com/jr777pal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-neon-blue transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/jyoti-ranjan-pal-994821385/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-neon-purple transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:jyotiranjanpal777@gmail.com"
            className="text-muted-foreground hover:text-neon-pink transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="w-8 h-8" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <ChevronDown 
          className="w-8 h-8 text-neon-blue cursor-pointer hover:text-neon-purple transition-colors"
          onClick={() => scrollToSection('about')}
        />
      </motion.div>
    </section>
  );
};