import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  geometry: 'box' | 'sphere' | 'torus' | 'octahedron';
  scale?: number;
  color?: string;
  rotationSpeed?: number;
}

export const FloatingGeometry = ({
  position,
  geometry,
  scale = 1,
  color = '#00d4ff',
  rotationSpeed = 1,
}: FloatingGeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Rotate the mesh
    meshRef.current.rotation.x += 0.01 * rotationSpeed;
    meshRef.current.rotation.y += 0.01 * rotationSpeed;
    
    // Add floating motion
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[0.5, 0.2, 16, 100]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.5]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={[scale, scale, scale]}
    >
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};