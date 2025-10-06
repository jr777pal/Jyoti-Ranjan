import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { InstancedMesh, Object3D } from 'three';

export const GeometricPattern = () => {
  const meshRef = useRef<InstancedMesh>(null);
  const tempObject = new Object3D();
  
  const gridSize = 20;
  const spacing = 2;

  useFrame((state) => {
    if (meshRef.current) {
      let index = 0;
      for (let x = 0; x < gridSize; x++) {
        for (let z = 0; z < gridSize; z++) {
          const posX = (x - gridSize / 2) * spacing;
          const posZ = (z - gridSize / 2) * spacing;
          
          // Wave effect
          const wave = Math.sin(state.clock.elapsedTime + posX * 0.1 + posZ * 0.1) * 2;
          const posY = wave - 15; // Position below the main scene
          
          tempObject.position.set(posX, posY, posZ);
          
          // Random rotations
          tempObject.rotation.x = state.clock.elapsedTime * 0.5;
          tempObject.rotation.y = state.clock.elapsedTime * 0.3;
          
          // Scale based on distance from center
          const distance = Math.sqrt(posX * posX + posZ * posZ);
          const scale = Math.max(0.1, 1 - distance * 0.05);
          tempObject.scale.setScalar(scale);
          
          tempObject.updateMatrix();
          meshRef.current.setMatrixAt(index, tempObject.matrix);
          index++;
        }
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, gridSize * gridSize]}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial
        color="#00d4ff"
        emissive="#00d4ff"
        emissiveIntensity={0.2}
        transparent
        opacity={0.6}
      />
    </instancedMesh>
  );
};