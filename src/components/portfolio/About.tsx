import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Database, Cpu, Globe } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'HTML, React, TypeScript, Next.js, Tailwind CSS',
      color: 'text-neon-blue'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Python, MySQL, MongoDB',
      color: 'text-neon-purple'
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'TensorFlow, PyTorch, Scikit-learn',
      color: 'text-neon-pink'
    },
    {
      icon: Globe,
      title: 'Cloud & DevOps',
      description: 'AWS, Google Cloud Platform(GCP)',
      color: 'text-neon-blue'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Computer Science Engineering fresher with hands-on experience in web development. 
            Successfully developed a full-stack e-commerce website using MERN stack (MongoDB, Express, React, Node.js),
            which involved user authentication.
            Proficient in JavaScript, HTML/CSS, and passionate about building efficient and scalable software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass p-8 hover:bg-cyber-surface/60 transition-all duration-300 group border-cyber-border hover:border-neon-blue/50">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-cyber-surface/50 group-hover:bg-cyber-dark transition-colors duration-300`}>
                      <Icon className={`w-8 h-8 ${skill.color} group-hover:animate-pulse-slow`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};