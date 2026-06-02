"use client"

import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

const MCLAREN_PATH = "/models/mclaren_f1_1993_by_alex.ka..glb"
const DODGE_PATH = "/models/dodge_charger_srt_police.glb"

function useScrollY() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return scrollY
}

// McLaren — orbits around center, descends with scroll
function McLarenModel({ scrollY }: { scrollY: number }) {
  const { scene } = useGLTF(MCLAREN_PATH)
  const groupRef = useRef<THREE.Group>(null)
  const scrollRef = useRef(scrollY)

  useEffect(() => {
    scrollRef.current = scrollY
  }, [scrollY])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.elapsedTime
    const radius = 4
    const speed = 0.45

    // Circular orbit on X/Z plane
    groupRef.current.position.x = radius * Math.cos(t * speed)
    groupRef.current.position.z = radius * Math.sin(t * speed)
    // Descend as user scrolls
    groupRef.current.position.y = -(scrollRef.current / 280)
    // Face direction of travel
    groupRef.current.rotation.y = -(t * speed) + Math.PI
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene.clone()} scale={[5, 5, 5]} />
    </group>
  )
}

// Dodge Charger — enters from top at scrollY 1500, orbits with opposite phase
function DodgeModel({ scrollY }: { scrollY: number }) {
  const { scene } = useGLTF(DODGE_PATH)
  const groupRef = useRef<THREE.Group>(null)
  const scrollRef = useRef(scrollY)

  useEffect(() => {
    scrollRef.current = scrollY
  }, [scrollY])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.elapsedTime
    const radius = 5
    const speed = 0.35
    // Opposite phase start (Math.PI offset) so cars don't align
    const phase = Math.PI

    groupRef.current.position.x = radius * Math.cos(t * speed + phase)
    groupRef.current.position.z = radius * Math.sin(t * speed + phase)
    // Enters from above at scrollY=1500, then descends
    const offset = Math.max(0, scrollRef.current - 1500)
    groupRef.current.position.y = 10 - offset / 260
    // Face direction of travel
    groupRef.current.rotation.y = -(t * speed + phase) + Math.PI
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene.clone()} scale={[5, 5, 5]} />
    </group>
  )
}

function SceneContent({ scrollY }: { scrollY: number }) {
  return (
    <>
      <color attach="background" args={["#02040a"]} />
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <directionalLight position={[-10, 5, -10]} intensity={1} />
      <pointLight position={[0, 8, 0]} intensity={1.5} />

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
        camera={{ position: [0, 2, 10], fov: 60, near: 0.1, far: 1000 }}
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
