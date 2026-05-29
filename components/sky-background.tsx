"use client"

import * as React from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Center, useGLTF } from "@react-three/drei"
import { useTheme } from "next-themes"
import * as THREE from "three"

const RED = new THREE.Color("#ff3a3a")
const RED_GLOW = new THREE.Color("#ff6666")

function boostRedMaterial(mat: THREE.Material) {
  const next = mat.clone()

  if (
    next instanceof THREE.MeshBasicMaterial ||
    next instanceof THREE.LineBasicMaterial ||
    next instanceof THREE.PointsMaterial
  ) {
    next.color.copy(RED)
  } else if (
    next instanceof THREE.MeshStandardMaterial ||
    next instanceof THREE.MeshPhongMaterial ||
    next instanceof THREE.MeshLambertMaterial
  ) {
    next.color.copy(RED)
    next.emissive.copy(RED_GLOW)
    next.emissiveIntensity = 4
  } else if ("color" in next && next.color instanceof THREE.Color) {
    next.color.copy(RED)
  }

  next.toneMapped = false
  if ("opacity" in next) next.opacity = 1
  if ("transparent" in next) next.transparent = false
  return next
}

function applyRedGlow(root: THREE.Object3D) {
  root.traverse((obj) => {
    obj.frustumCulled = false

    if (
      obj instanceof THREE.Mesh ||
      obj instanceof THREE.Line ||
      obj instanceof THREE.LineSegments ||
      obj instanceof THREE.Points
    ) {
      const materials = Array.isArray(obj.material) ? obj.material : [obj.material]
      obj.material = materials.map((mat) => (mat ? boostRedMaterial(mat) : mat))
    }
  })
}

function CelestialGlobe() {
  const spinRef = React.useRef<THREE.Group>(null)
  const scrollRef = React.useRef(0)
  const { scene } = useGLTF("/models/sky.glb")

  const model = React.useMemo(() => {
    const clone = scene.clone(true)
    applyRedGlow(clone)
    return clone
  }, [scene])

  React.useEffect(() => {
    const onScroll = () => {
      scrollRef.current = window.scrollY
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useFrame((_, delta) => {
    if (!spinRef.current) return
    const scrollBoost = Math.min(16, scrollRef.current * 0.03)
    spinRef.current.rotation.y += delta * (1.2 + scrollBoost)
    spinRef.current.rotation.x = Math.sin(performance.now() * 0.00015) * 0.08
  })

  return (
    <group ref={spinRef}>
      <Center>
        <primitive object={model} scale={5.5} />
      </Center>
    </group>
  )
}

function SkyScene() {
  return (
    <>
      <color attach="background" args={["#02040a"]} />
      <fog attach="fog" args={["#02040a", 14, 28]} />
      <ambientLight intensity={2.2} />
      <directionalLight intensity={4} position={[5, 3, 8]} color="#ffdddd" />
      <pointLight intensity={8} position={[0, 0, 6]} color="#ff5555" />
      <pointLight intensity={3} position={[-6, -2, 4]} color="#ffffff" />
      <React.Suspense fallback={null}>
        <CelestialGlobe />
      </React.Suspense>
    </>
  )
}

export function SkyBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[1] ${isDark ? "block" : "hidden"}`}
    >
      <Canvas
        frameloop="always"
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 7.5], fov: 45, near: 0.1, far: 100 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <SkyScene />
      </Canvas>
    </div>
  )
}

useGLTF.preload("/models/sky.glb")
