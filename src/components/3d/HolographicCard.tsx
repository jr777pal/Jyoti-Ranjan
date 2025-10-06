import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane, Text } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';
import * as THREE from 'three';

interface HolographicCardProps {
  position: [number, number, number];
  title: string;
  description: string;
  index: number;
}

export const HolographicCard = ({ position, title, description, index }: HolographicCardProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
      
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2 + index) * 0.1;
      
      // Scale on hover
      const targetScale = hovered ? 1.1 : 1;
      groupRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Card background */}
      <Plane args={[3, 2]} position={[0, 0, -0.01]}>
        <meshStandardMaterial
          color="#1a1a2e"
          transparent
          opacity={hovered ? 0.8 : 0.6}
          emissive="#00d4ff"
          emissiveIntensity={hovered ? 0.2 : 0.1}
        />
      </Plane>
      
      {/* Border glow */}
      <Plane args={[3.1, 2.1]} position={[0, 0, -0.02]}>
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={hovered ? 0.4 : 0.2}
        />
      </Plane>
      
      {/* Title */}
      <Text
        position={[0, 0.5, 0]}
        fontSize={0.3}
        color="#00d4ff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
        font="/fonts/inter-bold.woff"
      >
        {title}
      </Text>
      
      {/* Description */}
      <Text
        position={[0, -0.1, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
        lineHeight={1.2}
        font="/fonts/inter-regular.woff"
      >
        {description}
      </Text>
      
      {/* Corner elements */}
      {[
        [-1.4, 0.9, 0], [1.4, 0.9, 0], 
        [-1.4, -0.9, 0], [1.4, -0.9, 0]
      ].map((pos, i) => (
        <Plane key={i} args={[0.2, 0.2]} position={pos as [number, number, number]}>
          <meshBasicMaterial
            color="#8b5cf6"
            transparent
            opacity={hovered ? 0.8 : 0.4}
          />
        </Plane>
      ))}
    </group>
  );
};