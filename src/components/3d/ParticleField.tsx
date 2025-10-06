import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // y  
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z
    }
    
    return positions;
  }, []);

  const colors = useMemo(() => {
    const colors = new Float32Array(particleCount * 3);
    const colorPalette = [
      new THREE.Color('#00d4ff'), // neon blue
      new THREE.Color('#8b5cf6'), // neon purple
      new THREE.Color('#ff006e'), // neon pink
    ];
    
    for (let i = 0; i < particleCount; i++) {
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return colors;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
      
      // Animate individual particles
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + positions[i * 3]) * 0.001;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};