import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';
import { ParticleField } from './ParticleField';
import { InteractiveOrb } from './InteractiveOrb';
import { HolographicCard } from './HolographicCard';
import { GeometricPattern } from './GeometricPattern';
import { Suspense } from 'react';

export const Enhanced3DBackground = () => {
  const geometries: Array<{
    position: [number, number, number];
    geometry: 'box' | 'sphere' | 'torus' | 'octahedron';
    color: string;
    scale: number;
  }> = [
    { position: [-8, 3, -12], geometry: 'box', color: '#00d4ff', scale: 1.2 },
    { position: [8, -3, -15], geometry: 'sphere', color: '#8b5cf6', scale: 1.5 },
    { position: [-6, -4, -10], geometry: 'torus', color: '#ff006e', scale: 0.8 },
    { position: [6, 4, -14], geometry: 'octahedron', color: '#00d4ff', scale: 1.3 },
    { position: [0, 2, -20], geometry: 'box', color: '#8b5cf6', scale: 0.6 },
    { position: [-10, -2, -8], geometry: 'sphere', color: '#ff006e', scale: 1.0 },
    { position: [4, -6, -18], geometry: 'torus', color: '#00d4ff', scale: 1.1 },
    { position: [-4, 6, -12], geometry: 'octahedron', color: '#8b5cf6', scale: 0.7 },
  ];

  const skillOrbs: Array<{
    position: [number, number, number];
    skill: string;
    color: string;
  }> = [
    { position: [-5, 3, -8], skill: 'React', color: '#00d4ff' },
    { position: [5, -2, -8], skill: 'TypeScript', color: '#8b5cf6' },
    { position: [-3, -3, -6], skill: 'Python', color: '#ff006e' },
    { position: [3, 4, -6], skill: 'AI/ML', color: '#00d4ff' },
  ];

  const holographicCards: Array<{
    position: [number, number, number];
    title: string;
    description: string;
  }> = [
    {
      position: [-12, 0, -5],
      title: 'Full Stack',
      description: 'Modern web applications with React & Node.js'
    },
    {
      position: [12, 2, -7],
      title: 'AI & Machine Learning',
      description: 'Intelligent systems and data analysis'
    },
    {
      position: [0, -8, -5],
      title: 'Cloud Architecture',
      description: 'Scalable solutions on AWS & Azure'
    },
  ];

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[15, 15, 15]} intensity={2} color="#00d4ff" />
          <pointLight position={[-15, -15, -15]} intensity={1} color="#8b5cf6" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            color="#ff006e"
          />
          
          {/* Environment for reflections */}
          <Environment preset="night" />
          
          {/* Enhanced Star Field */}
          <Stars
            radius={150}
            depth={100}
            count={8000}
            factor={6}
            saturation={0}
            fade
            speed={2}
          />
          
          {/* Particle Field */}
          <ParticleField />
          
          {/* Geometric Pattern */}
          <GeometricPattern />
          
          {/* Floating Geometries */}
          {geometries.map((geo, index) => (
            <FloatingGeometry
              key={index}
              position={geo.position}
              geometry={geo.geometry}
              color={geo.color}
              scale={geo.scale}
              rotationSpeed={0.3 + Math.random() * 0.7}
            />
          ))}
          
          {/* Interactive Skill Orbs */}
          {skillOrbs.map((orb, index) => (
            <InteractiveOrb
              key={index}
              position={orb.position}
              skill={orb.skill}
              color={orb.color}
              index={index}
            />
          ))}
          
          {/* Holographic Information Cards */}
          {holographicCards.map((card, index) => (
            <HolographicCard
              key={index}
              position={card.position}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};