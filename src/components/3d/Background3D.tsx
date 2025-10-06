import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';

export const Background3D = () => {
  const geometries: Array<{
    position: [number, number, number];
    geometry: 'box' | 'sphere' | 'torus' | 'octahedron';
    color: string;
    scale: number;
  }> = [
    { position: [-4, 2, -5], geometry: 'box', color: '#00d4ff', scale: 0.8 },
    { position: [4, -2, -8], geometry: 'sphere', color: '#8b5cf6', scale: 1.2 },
    { position: [-2, -3, -6], geometry: 'torus', color: '#ff006e', scale: 0.6 },
    { position: [3, 3, -7], geometry: 'octahedron', color: '#00d4ff', scale: 1.0 },
    { position: [0, 1, -10], geometry: 'box', color: '#8b5cf6', scale: 0.4 },
    { position: [-5, -1, -4], geometry: 'sphere', color: '#ff006e', scale: 0.7 },
    { position: [2, -4, -9], geometry: 'torus', color: '#00d4ff', scale: 0.9 },
    { position: [-3, 4, -6], geometry: 'octahedron', color: '#8b5cf6', scale: 0.5 },
  ];

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        {geometries.map((geo, index) => (
          <FloatingGeometry
            key={index}
            position={geo.position}
            geometry={geo.geometry}
            color={geo.color}
            scale={geo.scale}
            rotationSpeed={0.5 + Math.random() * 0.5}
          />
        ))}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
};