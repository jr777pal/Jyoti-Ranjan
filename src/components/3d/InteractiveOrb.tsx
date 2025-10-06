import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';

interface InteractiveOrbProps {
  position: [number, number, number];
  skill: string;
  color: string;
  index: number;
}

export const InteractiveOrb = ({ position, skill, color, index }: InteractiveOrbProps) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { mouse, viewport } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.y += 0.01;
      
      // Mouse interaction
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      
      const targetPosition = new Vector3(
        position[0] + x * 0.1,
        position[1] + y * 0.1,
        position[2]
      );
      
      meshRef.current.position.lerp(targetPosition, 0.02);
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.3;
      
      // Scale on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group>
      <Sphere
        ref={meshRef}
        position={position}
        args={[0.8, 32, 32]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      
      {hovered && (
        <Text
          position={[position[0], position[1] - 1.5, position[2]]}
          fontSize={0.4}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {skill}
        </Text>
      )}
      
      {/* Orbital ring */}
      <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.3, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.6 : 0.2}
          side={2}
        />
      </mesh>
    </group>
  );
};