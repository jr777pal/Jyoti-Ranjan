import { motion } from 'framer-motion';
import { Project3DCard } from '../3d/Project3DCard';

export const Projects = () => {
  const projects = [
    {
      title: 'Teachers on Duty',
      description: 'A online learning platform. Teachers can create and manage courses, upload resources, and track student progress. Students can enroll in courses, access materials, and participate in discussions.',
      tech: ['HTML', 'CSS', 'Javascript', 'MySQL','PHP'],
      github: 'https://github.com/jr777pal/Teacher-s-On-Duty.git',
      live: 'https://teachersonduty.netlify.app/',
      color: 'from-neon-blue to-neon-purple'
    },
    {
      title: 'Quick Foodz',
      description: 'A front-end Webpage for a restaurant offering customers a seamless way to browse dishes, check prices, view images, and place orders directly via Swiggy, Zomato, WhatsApp.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/jr777pal/Quick-Foodz.git',
      live: 'https://quickfoodz.netlify.app/',
      color: 'from-neon-purple to-neon-pink'
    },

          

    {
      title: 'ASUS Service Center',
      description: 'Discover reliable support at the official ASUS Service Center. Get assistance for repairs, warranties, and product diagnostics with expert guidance.',
      tech: ['React', 'Vite', 'Node.js', 'TypeScript', 'Tailwind CSS','MySQL'],
      github: 'https://github.com/jr777pal/ASUS.git',
      live: 'https://asusservice.netlify.app/',
      color: 'from-neon-pink to-neon-blue'
    },
      //F U T U R E---U S E
    /* {
      title: '3D Portfolio Website',
      description: 'Interactive 3D portfolio showcasing modern web technologies with immersive user experience and smooth animations.',
      tech: ['React', 'Three.js', 'TypeScript', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-neon-blue via-neon-purple to-neon-pink'
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive tool for visualizing and understanding neural network architectures with real-time training visualization.',
      tech: ['Python', 'TensorFlow', 'D3.js', 'Flask'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-neon-purple to-neon-blue'
    },
    {
      title: 'Quantum Computing Simulator',
      description: 'Web-based quantum computing simulator with visual qubit manipulation and quantum algorithm demonstrations.',
      tech: ['React', 'WebAssembly', 'Rust', 'WebGL'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-neon-pink via-neon-blue to-neon-purple'
    }
      */
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-gradient mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate my expertise in 
            cutting-edge technologies and problem-solving capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project3DCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              live={project.live}
              color={project.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
