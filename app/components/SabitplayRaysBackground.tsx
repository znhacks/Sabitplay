"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const beamVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const beamFragmentShader = `
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uCoreIntensity;
  varying vec2 vUv;

  void main() {
    // Smooth vertical fade at the top and bottom ends
    float vFade = sin(vUv.y * 3.14159265);
    vFade = pow(clamp(vFade, 0.0, 1.0), 1.3);

    // Soft horizontal falloff across beam width
    float hFade = sin(vUv.x * 3.14159265);
    hFade = pow(clamp(hFade, 0.0, 1.0), 0.85);

    // Bright specular core running down the center
    float core = pow(hFade, 3.5) * uCoreIntensity;

    float alpha = (hFade * 0.65 + core) * vFade * uOpacity;
    vec3 col = mix(uColor, vec3(1.0, 0.99, 0.98), clamp(core * 0.7, 0.0, 1.0));

    gl_FragColor = vec4(col, alpha);
  }
`;

export default function SabitplayRaysBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 480], [1, 0]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040405, 0.035);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 12);

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const maxDpr = isTouch ? 1.25 : 2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isTouch,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDpr));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    const beamsGroup = new THREE.Group();
    // Default diagonal angle ~ -42 degrees matching Sabitplay brand aesthetic
    beamsGroup.rotation.z = THREE.MathUtils.degToRad(-42);
    beamsGroup.rotation.x = THREE.MathUtils.degToRad(8);
    scene.add(beamsGroup);

    interface BeamConfig {
      width: number;
      height: number;
      x: number;
      y: number;
      z: number;
      color: number;
      opacity: number;
      coreIntensity: number;
    }

    const beamConfigs: BeamConfig[] = [
      // Outer Left ambient beam
      {
        width: 0.18,
        height: 22,
        x: -4.2,
        y: 0,
        z: -2.5,
        color: 0x4d4238,
        opacity: 0.25,
        coreIntensity: 0.3,
      },
      // Mid Left beam
      {
        width: 0.35,
        height: 25,
        x: -2.2,
        y: 0.2,
        z: -1.2,
        color: 0x8a7969,
        opacity: 0.45,
        coreIntensity: 0.55,
      },
      // Main Center Volumetric Beam (foreground flagship beam)
      {
        width: 2.8,
        height: 29,
        x: 0,
        y: 0,
        z: 0.2,
        color: 0xf5efeb,
        opacity: 0.88,
        coreIntensity: 1.25,
      },
      // Inner Specular Core Slab for extra depth
      {
        width: 0.85,
        height: 25,
        x: 0,
        y: 0,
        z: 0.4,
        color: 0xfffdf9,
        opacity: 0.95,
        coreIntensity: 1.6,
      },
      // Mid Right beam
      {
        width: 0.35,
        height: 25,
        x: 2.2,
        y: -0.2,
        z: -1.2,
        color: 0x8a7969,
        opacity: 0.45,
        coreIntensity: 0.55,
      },
      // Outer Right ambient beam
      {
        width: 0.18,
        height: 22,
        x: 4.2,
        y: 0,
        z: -2.5,
        color: 0x4d4238,
        opacity: 0.25,
        coreIntensity: 0.3,
      },
    ];

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    beamConfigs.forEach((cfg) => {
      const geo = new THREE.PlaneGeometry(cfg.width, cfg.height, 1, 32);
      geometries.push(geo);

      const mat = new THREE.ShaderMaterial({
        vertexShader: beamVertexShader,
        fragmentShader: beamFragmentShader,
        uniforms: {
          uColor: { value: new THREE.Color(cfg.color) },
          uOpacity: { value: cfg.opacity },
          uCoreIntensity: { value: cfg.coreIntensity },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.NormalBlending,
      });
      materials.push(mat);

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(cfg.x, cfg.y, cfg.z);
      beamsGroup.add(mesh);
    });

    // Mouse parallax variables
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX = normX;
      mouseY = -normY;
    };

    if (!isTouch && !shouldReduceMotion) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // Visibility-aware animation loop
    let isVisible = true;
    let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      if (!shouldReduceMotion) {
        targetCameraX = mouseX * 0.9;
        targetCameraY = mouseY * 0.6;

        camera.position.x += (targetCameraX - camera.position.x) * 0.05;
        camera.position.y += (targetCameraY - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);

        // Gentle organic breathing motion
        beamsGroup.position.y = Math.sin(elapsed * 0.6) * 0.12;
        beamsGroup.rotation.z =
          THREE.MathUtils.degToRad(-42) + Math.sin(elapsed * 0.4) * 0.008;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (!isTouch && !shouldReduceMotion) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [shouldReduceMotion]);

  return (
    <motion.div
      style={{ opacity: scrollOpacity }}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#040405]"
    >
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Radial center glow */}
      <div className="absolute h-[650px] w-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,239,235,0.12)_0%,rgba(245,239,235,0.03)_50%,transparent_75%)] pointer-events-none" />

      {/* Dark vignette overlay for contrast and typography readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(4,4,5,0.55)_60%,#040405_92%)] pointer-events-none" />

      {/* Bottom fade into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#040405] to-transparent pointer-events-none" />
    </motion.div>
  );
}
