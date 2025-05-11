import { useEffect, useRef, useMemo } from 'react';
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
  const { positions, colors } = useMemo(() => generateParticles(800), []); // Reduced particle count
  const lastTime = useRef(0);
  const animationFrame = useRef<number>();

  // Optimized animation frame
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const currentTime = state.clock.getElapsedTime();
    const deltaTime = currentTime - lastTime.current;
    
    // Limit animation updates to 30fps
    if (deltaTime < 1/30) return;
    
    lastTime.current = currentTime;
    
    // Smoother rotation
    pointsRef.current.rotation.x = Math.sin(currentTime * 0.05) * 0.05;
    pointsRef.current.rotation.y = Math.cos(currentTime * 0.05) * 0.05;

    // Reduced animation intensity
    const scale = 1 + Math.sin(currentTime * 0.2) * 0.05;
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
  const mouseMoveTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!containerRef.current) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      // Debounce mouse movement
      if (mouseMoveTimeout.current) {
        clearTimeout(mouseMoveTimeout.current);
      }

      mouseMoveTimeout.current = setTimeout(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        
        gsap.to(containerRef.current, {
          duration: 1.5,
          ease: 'power2.out',
          style: {
            transform: `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`
          }
        });
      }, 16); // ~60fps
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (mouseMoveTimeout.current) {
        clearTimeout(mouseMoveTimeout.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-0 opacity-50"
      style={{ transform: 'perspective(1000px)' }}
    >
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]} // Limit pixel ratio for better performance
        performance={{ min: 0.5 }} // Allow frame rate to drop if needed
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}