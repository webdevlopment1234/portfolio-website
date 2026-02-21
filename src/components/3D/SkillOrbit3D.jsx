import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SkillOrbit3D({ skills }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.0005;
    }
  });

  // Create multiple orbital rings
  const skillsPerRing = Math.ceil(skills.length / 3);
  const rings = [
    { radius: 5, skills: skills.slice(0, skillsPerRing) },
    { radius: 8, skills: skills.slice(skillsPerRing, skillsPerRing * 2) },
    { radius: 11, skills: skills.slice(skillsPerRing * 2) }
  ];

  return (
    <group ref={groupRef}>
      {/* Central sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial
          color="#10b981"
          emissive="#34d399"
          emissiveIntensity={0.5}
          shininess={100}
        />
      </mesh>

      {/* Orbital rings */}
      {rings.map((ring, ringIdx) => (
        <group key={ringIdx}>
          {/* Ring line */}
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={64}
                array={new Float32Array(
                  Array.from({ length: 64 }, (_, i) => {
                    const angle = (i / 64) * Math.PI * 2;
                    return [
                      Math.cos(angle) * ring.radius,
                      Math.sin(angle) * ring.radius,
                      0
                    ];
                  }).flat()
                )}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color="#10b981"
              linewidth={1}
              transparent
              opacity={0.3}
            />
          </line>

          {/* Skill nodes */}
          {ring.skills.map((skill, skillIdx) => {
            const angle =
              (skillIdx / ring.skills.length) * Math.PI * 2 + ringIdx * 0.5;
            const x = Math.cos(angle) * ring.radius;
            const y = Math.sin(angle) * ring.radius;

            return (
              <group key={skillIdx} position={[x, y, 0]}>
                {/* Skill sphere */}
                <mesh>
                  <sphereGeometry args={[0.35, 32, 32]} />
                  <meshPhongMaterial
                    color={`hsl(${(skillIdx * 360) / ring.skills.length}, 70%, 50%)`}
                    emissive={`hsl(${(skillIdx * 360) / ring.skills.length}, 70%, 30%)`}
                    emissiveIntensity={0.3}
                    shininess={80}
                  />
                </mesh>

                {/* Glow ring around sphere */}
                <mesh>
                  <torusGeometry args={[0.4, 0.05, 16, 16]} />
                  <meshBasicMaterial
                    color="#34d399"
                    transparent
                    opacity={0.3}
                  />
                </mesh>

                {/* Connection line to center */}
                <line>
                  <bufferGeometry>
                    <bufferAttribute
                      attach="attributes-position"
                      count={2}
                      array={new Float32Array([0, 0, 0, -x, -y, 0])}
                      itemSize={3}
                    />
                  </bufferGeometry>
                  <lineBasicMaterial
                    color="#10b981"
                    transparent
                    opacity={0.2}
                    linewidth={1}
                  />
                </line>
              </group>
            );
          })}
        </group>
      ))}

      {/* Ambient particles */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const dist = 3 + Math.random() * 10;
        return (
          <mesh key={`particle-${i}`} position={[
            Math.cos(angle) * dist,
            Math.sin(angle) * dist,
            (Math.random() - 0.5) * 2
          ]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial
              color="#10b981"
              opacity={0.2}
              transparent
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default SkillOrbit3D;
