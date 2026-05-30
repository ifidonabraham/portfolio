"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Center, useGLTF } from "@react-three/drei"
import * as THREE from "three"

const MODEL_PATH = "/models/night_sky_visible_spectrum_monochromatic.glb"

function LoadingIndicator() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.8, 24, 24]} />
      <meshBasicMaterial color="#ff3333" wireframe />
    </mesh>
  )
}

function RotatingGlobe() {
  const spinRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF(MODEL_PATH)

  useFrame((_, delta) => {
    if (!spinRef.current) return
    spinRef.current.rotation.y += delta * 0.2
    spinRef.current.rotation.x += delta * 0.025
  })

  return (
    <Center>
      <group ref={spinRef} scale={2.2}>
        <primitive object={scene} />
      </group>
    </Center>
  )
}

function HeroScene() {
  return (
    <>
      <color attach="background" args={["#02040a"]} />
      <ambientLight intensity={1.5} />
      <Suspense fallback={<LoadingIndicator />}>
        <RotatingGlobe />
      </Suspense>
    </>
  )
}

export function SpaceModelBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 min-h-full w-full"
      aria-hidden="true"
    >
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 7], fov: 42, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <HeroScene />
      </Canvas>
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02040a]/20 to-[#02040a]/50"
        aria-hidden
      />
    </div>
  )
}

useGLTF.preload(MODEL_PATH)

export function preloadHeroModel() {
  useGLTF.preload(MODEL_PATH)
}
