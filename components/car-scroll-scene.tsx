"use client"

import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

const CAR_MODEL_PATH = "/models/mclaren_f1_1993_by_alex.ka..glb"

function CarModel() {
  const { scene } = useGLTF(CAR_MODEL_PATH)
  const groupRef = useRef<THREE.Group>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useFrame(() => {
    if (!groupRef.current) return

    const carY = -(scrollY / 300)
    groupRef.current.position.y = carY

    groupRef.current.rotation.z = Math.sin(scrollY * 0.001) * 0.1
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene.clone()} scale={[3, 3, 3]} />
    </group>
  )
}

function CarSceneContent() {
  return (
    <>
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
      <pointLight position={[0, 5, 5]} intensity={1} color="#6366f1" />

      <Suspense fallback={null}>
        <CarModel />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
      />
    </>
  )
}

export function CarScrollBackground() {
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
        <CarSceneContent />
      </Canvas>
    </div>
  )
}

useGLTF.preload(CAR_MODEL_PATH)
