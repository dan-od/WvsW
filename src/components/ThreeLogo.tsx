import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeLogo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const size = Math.min(window.innerWidth * 0.4, 400);
    renderer.setSize(size, size);
    containerRef.current.appendChild(renderer.domElement);

    // Create "WW" Geometry (Simplified as two overlapping planes or extruded shapes)
    // For a real app, we'd load a GLTF model. Here we create a stylized double-W shape.
    const group = new THREE.Group();

    const createW = (offset: number) => {
      const shape = new THREE.Shape();
      shape.moveTo(-1, 1);
      shape.lineTo(-0.5, -1);
      shape.lineTo(0, 0);
      shape.lineTo(0.5, -1);
      shape.lineTo(1, 1);
      shape.lineTo(0.7, 1);
      shape.lineTo(0.35, -0.3);
      shape.lineTo(0, 0.5);
      shape.lineTo(-0.35, -0.3);
      shape.lineTo(-0.7, 1);

      const extrudeSettings = { depth: 0.2, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05 };
      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      
      // Front Material: Iced Gold
      const frontMaterial = new THREE.MeshStandardMaterial({
        color: 0xc9a96e,
        metalness: 1,
        roughness: 0.1,
        emissive: 0x443311,
        emissiveIntensity: 0.2
      });

      // Back Material: Dark/Distorted
      const backMaterial = new THREE.MeshStandardMaterial({
        color: 0x111111,
        metalness: 0.5,
        roughness: 0.8,
        emissive: 0x220000,
        emissiveIntensity: 0.5
      });

      const mesh = new THREE.Mesh(geometry, [frontMaterial, backMaterial]);
      mesh.position.x = offset;
      return mesh;
    };

    const w1 = createW(-0.4);
    const w2 = createW(0.4);
    group.add(w1);
    group.add(w2);
    scene.add(group);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 3;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.y += 0.01;
      
      // Subtle tilt based on mouse
      group.rotation.x = mouseY * 0.2;
      group.rotation.z = mouseX * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="flex items-center justify-center" />;
};
