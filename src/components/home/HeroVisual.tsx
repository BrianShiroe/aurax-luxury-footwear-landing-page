import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const KineticGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!meshRef.current || !outerRef.current || !groupRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Parallax movement based on mouse
    const mouseX = state.mouse.x * 0.5;
    const mouseY = state.mouse.y * 0.5;
    
    meshRef.current.rotation.x = time * 0.15 + mouseY * 0.2;
    meshRef.current.rotation.y = time * 0.2 + mouseX * 0.2;
    
    outerRef.current.rotation.z = time * 0.1;
    outerRef.current.rotation.y = -time * 0.05 + mouseX * 0.1;
    outerRef.current.position.x = THREE.MathUtils.lerp(outerRef.current.position.x, mouseX * 0.2, 0.1);
    outerRef.current.position.y = THREE.MathUtils.lerp(outerRef.current.position.y, mouseY * 0.2, 0.1);

    // Responsive shift: move to the right on desktop
    const targetX = state.viewport.width > 2 ? state.viewport.width * 0.25 : 0;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh ref={meshRef}>
          <Sphere args={[1, 100, 100]} scale={2.2}>
            <MeshDistortMaterial
              color="#000000"
              speed={3}
              distort={0.4}
              radius={1}
              roughness={0.05}
              metalness={1}
              emissive="#111111"
            />
          </Sphere>
        </mesh>
        <mesh ref={outerRef}>
          <Sphere args={[1.1, 64, 64]} scale={2.8}>
            <meshPhysicalMaterial
              color="#ffffff"
              transmission={1}
              thickness={0.5}
              roughness={0.1}
              envMapIntensity={2}
              clearcoat={1}
              transparent
              opacity={0.1}
            />
          </Sphere>
        </mesh>
      </group>
    </Float>
  );
};

const Particles = ({ count = 200 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        p[i * 3] = (Math.random() - 0.5) * 15;
        p[i * 3 + 1] = (Math.random() - 0.5) * 15;
        p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#000000"
        sizeAttenuation={true}
        transparent
        opacity={0.2}
      />
    </points>
  );
};

export const HeroVisual: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Environment preset="city" />
        <KineticGeometry />
        <Particles />
        
        <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
