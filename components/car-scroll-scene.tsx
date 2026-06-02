"use client"

import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

const MCLAREN_PATH = "/models/mclaren_f1_1993_by_alex.ka..glb"
const DODGE_PATH = "/models/dodge_charger_srt_police.glb"

// Shared scroll hook
function useScrollY() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return scrollY
}

// McLaren — starts at bottom-center, drives down and exits around scrollY ~2100
function McLarenModel({ scrollY }: { scrollY: number }) {
  const { scene } = useGLTF(MCLAREN_PATH)
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.position.y = -(scrollY / 300)
    groupRef.current.rotation.y += 0.004
  })

  return (
    <group ref={groupRef} position={[2, 0, 0]}>
      <primitive object={scene.clone()} scale={[2.5, 2.5, 2.5]} />
    </group>
  )
}

// Dodge Charger — enters from top of screen starting at scrollY ~1500, drives down through mid-page
function DodgeModel({ scrollY }: { scrollY: number }) {
  const { scene } = useGLTF(DODGE_PATH)
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    // Enters from top (y=10) at scrollY=1500, drives down
    const offset = Math.max(0, scrollY - 1500)
    groupRef.current.position.y = 10 - offset / 280
    groupRef.current.rotation.y += 0.003
  })

  return (
    <group ref={groupRef} position={[-2, 10, 0]}>
      <primitive object={scene.clone()} scale={[2.5, 2.5, 2.5]} />
    </group>
  )
}

function SceneContent({ scrollY }: { scrollY: number }) {
  return (
    <>
      <color attach="background" args={["#02040a"]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={2.5} />
      <directionalLight position={[-10, 5, -10]} intensity={0.8} />
      <pointLight position={[0, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        <McLarenModel scrollY={scrollY} />
      </Suspense>

      <Suspense fallback={null}>
        <DodgeModel scrollY={scrollY} />
      </Suspense>
    </>
  )
}

export function CarScrollBackground() {
  const scrollY = useScrollY()

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{ top: "50vh" }}
    >
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 15], fov: 50, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <SceneContent scrollY={scrollY} />
      </Canvas>
    </div>
  )
}

useGLTF.preload(MCLAREN_PATH)
useGLTF.preload(DODGE_PATH)
