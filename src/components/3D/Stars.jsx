import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Stars() {
  const pointsRef = useRef();

  useEffect(() => {
    const geometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: '#10b981',
      size: 0.15,
      sizeAttenuation: true,
    });

    if (pointsRef.current) {
      pointsRef.current.geometry = geometry;
      pointsRef.current.material = material;
    }
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.00005;
      pointsRef.current.rotation.y += 0.0001;
    }
  });

  return <points ref={pointsRef} />;
}

export default Stars;
