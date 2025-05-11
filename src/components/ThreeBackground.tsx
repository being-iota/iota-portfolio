import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Generate random particles in a 3D space
function generateParticles(count: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 5;
    
    // Generate colors with a blue/purple tech theme
    colors[i3] = 0.2 + Math.random() * 0.4;     // r: 0.2-0.6
    colors[i3 + 1] = 0.2 + Math.random() * 0.2; // g: 0.2-0.4
    colors[i3 + 2] = 0.5 + Math.random() * 0.5; // b: 0.5-1.0
  }
  
  return { positions, colors };
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const { positions, colors } = generateParticles(1500);

  // Animate particles
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Rotate slowly
    pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    pointsRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.1) * 0.1;

    // Pulse size
    const scale = 1 + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    pointsRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
      <PointMaterial 
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      gsap.to(containerRef.current, {
        duration: 2,
        ease: 'power2.out',
        style: {
          transform: `perspective(1000px) rotateX(${y * 2}deg) rotateY(${x * 2}deg)`
        }
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-0 opacity-70"
      style={{ transform: 'perspective(1000px)' }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}