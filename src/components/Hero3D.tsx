import React, { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedBlob() {
  const meshRef = React.useRef<THREE.Mesh>(null);
  // Create a low-poly sphere for performance
  const geometry = useMemo(() => new THREE.SphereGeometry(1.2, 24, 24), []);
  const color = useMemo(() => new THREE.Color('#6C63FF'), []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.5;
      meshRef.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.scale.set(
        1 + Math.sin(clock.getElapsedTime() * 0.7) * 0.04,
        1 + Math.cos(clock.getElapsedTime() * 0.5) * 0.04,
        1 + Math.sin(clock.getElapsedTime() * 0.9) * 0.04
      );
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
    </mesh>
  );
}

export default function Hero3D() {
  // Only render on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[420px] md:h-[420px] z-0 pointer-events-none select-none">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} dpr={[1, 1.5]} gl={{ powerPreference: 'high-performance', antialias: false }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={0.7} />
        <AnimatedBlob />
      </Canvas>
    </div>
  );
} 