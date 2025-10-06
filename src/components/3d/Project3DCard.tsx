import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project3DCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  color: string;
  index: number;
}

export const Project3DCard = ({ 
  title, 
  description, 
  tech, 
  github, 
  live, 
  color, 
  index 
}: Project3DCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(${isHovered ? 20 : 0}px)
      scale(${isHovered ? 1.05 : 1})
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(0deg) 
      rotateY(0deg) 
      translateZ(0px)
      scale(1)
    `;
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group perspective-1000"
    >
      <Card 
        ref={cardRef}
        className="glass overflow-hidden border-cyber-border hover:border-neon-blue/50 transition-all duration-500 preserve-3d"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated background gradient */}
        <div className={`h-48 bg-gradient-to-br ${color} relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/20 rounded"
                style={{
                  width: Math.random() * 20 + 10,
                  height: Math.random() * 20 + 10,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-white text-6xl font-bold opacity-20"
              animate={{ 
                rotateY: isHovered ? 180 : 0,
                scale: isHovered ? 1.2 : 1 
              }}
              transition={{ duration: 0.6 }}
            >
              {index + 1}
            </motion.div>
          </div>
        </div>
        
        <div className="p-6 space-y-4 relative">
          {/* Glowing border effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-0 group-hover:opacity-20 blur-sm"
            animate={{ opacity: isHovered ? 0.2 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.h3 
            className="text-xl font-bold text-foreground group-hover:text-neon-blue transition-colors z-10 relative"
            animate={{ 
              textShadow: isHovered ? "0 0 10px rgba(0, 212, 255, 0.5)" : "none" 
            }}
          >
            {title}
          </motion.h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed z-10 relative">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 z-10 relative">
            {tech.map((techItem, techIndex) => (
              <motion.span
                key={techIndex}
                className="px-3 py-1 text-xs bg-cyber-surface/50 text-neon-blue border border-cyber-border rounded-full"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(0, 212, 255, 0.2)",
                  borderColor: "rgba(0, 212, 255, 0.5)"
                }}
              >
                {techItem}
              </motion.span>
            ))}
          </div>
          
          <div className="flex gap-3 pt-4 z-10 relative">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-cyber-dark transition-all duration-300"
              asChild
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-neon-purple hover:bg-neon-pink text-cyber-dark transition-all duration-300"
              asChild
            >
              <a href={live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};