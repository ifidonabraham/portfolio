"use client"

import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Center, useGLTF } from "@react-three/drei"
import * as THREE from "three"

const MODEL_PATH = "/models/night_sky_visible_spectrum_monochromatic.glb"

const RED = new THREE.Color("#ff3a3a")
const RED_GLOW = new THREE.Color("#ff5555")

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
    next.emissiveIntensity = 2.8
  } else if ("color" in next && next.color instanceof THREE.Color) {
    next.color.copy(RED)
  }

  next.toneMapped = false
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

function RotatingSkyModel() {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF(MODEL_PATH)

  const model = useMemo(() => {
    const clone = scene.clone(true)
    applyRedGlow(clone)
    return clone
  }, [scene])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.08
    groupRef.current.rotation.x += delta * 0.01
  })

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={model} scale={2.8} />
      </Center>
    </group>
  )
}

export function SpaceModelBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Canvas
        frameloop="always"
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#ffdddd" />
          <pointLight position={[-4, -2, 4]} intensity={1.2} />
          <RotatingSkyModel />
        </Suspense>
      </Canvas>
      {/* Keeps hero text readable over the globe */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#02040a]/30 via-[#02040a]/55 to-[#02040a]/75 dark:from-[#02040a]/40 dark:via-[#02040a]/60 dark:to-[#02040a]/85"
        aria-hidden
      />
    </div>
  )
}

useGLTF.preload(MODEL_PATH)
