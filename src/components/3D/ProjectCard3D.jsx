import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ProjectCard3D({ project, isActive }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const textureLoader = new THREE.TextureLoader();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += (hovered ? 0.02 : 0.005);
      meshRef.current.rotation.y += (hovered ? 0.03 : 0.01);
      
      meshRef.current.scale.lerp(
        new THREE.Vector3(hovered ? 1.1 : 1, hovered ? 1.1 : 1, hovered ? 1.1 : 1),
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={1}
      position={[0, 0, 0]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <boxGeometry args={[2.5, 2.5, 0.5]} />
      <meshPhongMaterial
        color={project.color}
        emissive={hovered ? project.color : '#000'}
        emissiveIntensity={hovered ? 0.3 : 0}
        shininess={100}
        wireframe={false}
      />
      
      {/* Glowing border */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={8}
            array={new Float32Array([
              -1.25, -1.25, 0.25,
              1.25, -1.25, 0.25,
              1.25, 1.25, 0.25,
              -1.25, 1.25, 0.25,
              -1.25, -1.25, -0.25,
              1.25, -1.25, -0.25,
              1.25, 1.25, -0.25,
              -1.25, 1.25, -0.25,
            ])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={project.color} linewidth={2} />
      </line>
    </mesh>
  );
}

export default ProjectCard3D;
