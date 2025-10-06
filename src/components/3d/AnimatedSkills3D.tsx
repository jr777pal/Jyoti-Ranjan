import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Globe, Zap, Shield } from 'lucide-react';

export const AnimatedSkills3D = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js',
      color: 'text-neon-blue',
      bgColor: 'from-neon-blue/20 to-neon-blue/5',
      delay: 0
    },
    {
      icon: Database,
      title: 'Backend & Database',
      description: 'Node.js, Python, PostgreSQL',
      color: 'text-neon-purple',
      bgColor: 'from-neon-purple/20 to-neon-purple/5',
      delay: 0.2
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'TensorFlow, PyTorch, OpenCV',
      color: 'text-neon-pink',
      bgColor: 'from-neon-pink/20 to-neon-pink/5',
      delay: 0.4
    },
    {
      icon: Globe,
      title: 'Cloud & DevOps',
      description: 'AWS, Docker, Kubernetes',
      color: 'text-neon-blue',
      bgColor: 'from-neon-blue/20 to-neon-blue/5',
      delay: 0.6
    },
    {
      icon: Zap,
      title: '3D & Graphics',
      description: 'Three.js, WebGL, Blender',
      color: 'text-neon-purple',
      bgColor: 'from-neon-purple/20 to-neon-purple/5',
      delay: 0.8
    },
    {
      icon: Shield,
      title: 'Blockchain & Security',
      description: 'Solidity, Web3, Cryptography',
      color: 'text-neon-pink',
      bgColor: 'from-neon-pink/20 to-neon-pink/5',
      delay: 1.0
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and frameworks that power modern digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateY: 0,
                }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: skill.delay,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="perspective-1000"
              >
                <div className={`glass p-8 rounded-2xl border-cyber-border hover:border-neon-blue/50 transition-all duration-500 group preserve-3d bg-gradient-to-br ${skill.bgColor} relative overflow-hidden`}>
                  {/* Floating background shapes */}
                  <div className="absolute inset-0 opacity-10">
                    <motion.div
                      className={`absolute top-2 right-2 w-20 h-20 bg-gradient-to-br ${skill.bgColor} rounded-full blur-xl`}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>

                  <motion.div
                    className="relative z-10"
                    whileHover={{ z: 20 }}
                  >
                    <motion.div
                      className={`mb-6 relative`}
                      whileHover={{ 
                        rotateX: 15,
                        rotateY: 15,
                        scale: 1.1
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${skill.bgColor} backdrop-blur-sm border border-cyber-border/30 inline-block`}>
                        <Icon className={`w-8 h-8 ${skill.color} group-hover:animate-pulse`} />
                      </div>
                      
                      {/* Orbital rings */}
                      <motion.div
                        className={`absolute inset-0 border-2 border-dashed ${skill.color.replace('text-', 'border-')}/20 rounded-full`}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ transform: 'scale(1.5)' }}
                      />
                      <motion.div
                        className={`absolute inset-0 border border-dashed ${skill.color.replace('text-', 'border-')}/10 rounded-full`}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        style={{ transform: 'scale(2)' }}
                      />
                    </motion.div>

                    <motion.h3 
                      className={`text-xl font-bold ${skill.color} mb-3 group-hover:text-shadow-glow transition-all duration-300`}
                      whileHover={{ 
                        textShadow: "0 0 20px currentColor" 
                      }}
                    >
                      {skill.title}
                    </motion.h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Progress bar animation */}
                    <motion.div
                      className="mt-4 h-1 bg-cyber-border rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: skill.delay + 0.5 }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.bgColor.replace('/20', '').replace('/5', '')}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 + Math.random() * 15}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: skill.delay + 0.7,
                          ease: "easeOut"
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};