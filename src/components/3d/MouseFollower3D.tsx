import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';

export const MouseFollower3D = () => {
  const meshRef = useRef<Mesh>(null);
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      // Convert mouse position to 3D coordinates
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      
      // Smooth follow mouse movement
      meshRef.current.position.lerp(new Vector3(x * 0.5, y * 0.5, -2), 0.05);
      
      // Add rotation based on mouse movement
      meshRef.current.rotation.x = -mouse.y * 0.5;
      meshRef.current.rotation.y = mouse.x * 0.5;
      
      // Pulsating scale
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[0.5, 0.15, 16, 100]} />
      <meshStandardMaterial
        color="#00d4ff"
        emissive="#00d4ff"
        emissiveIntensity={0.5}
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
};