"use client"

import * as React from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

function boostRedMaterial(mat: THREE.Material) {
  const next = mat.clone()
  if ("color" in next && next.color instanceof THREE.Color) {
    next.color.set("#ff3b3b")
  }
  if (next instanceof THREE.MeshStandardMaterial || next instanceof THREE.MeshPhongMaterial) {
    next.emissive.set("#ff5555")
    next.emissiveIntensity = 3.5
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

function RotatingSky() {
  const groupRef = React.useRef<THREE.Group>(null)
  const scrollRef = React.useRef(0)
  const { scene } = useGLTF("/models/sky.glb")

  React.useEffect(() => {
    const onScroll = () => {
      scrollRef.current = window.scrollY
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const model = React.useMemo(() => {
    const clone = scene.clone(true)
    clone.updateMatrixWorld(true)

    const box = new THREE.Box3().setFromObject(clone)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1

    clone.position.sub(center)
    clone.scale.setScalar(6 / maxDim)
    applyRedGlow(clone)

    const group = new THREE.Group()
    group.add(clone)
    return group
  }, [scene])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const scrollBoost = Math.min(14, scrollRef.current * 0.025)
    groupRef.current.rotation.y += delta * (2.5 + scrollBoost)
  })

  return (
    <group ref={groupRef}>
      <primitive object={model} />
    </group>
  )
}

export function SkyBackground() {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden dark:block"
    >
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8.5], fov: 42 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%" }}
      >
        <color attach="background" args={["#02040a"]} />
        <ambientLight intensity={1.8} />
        <directionalLight intensity={3.5} position={[4, 2, 6]} color="#ffcccc" />
        <pointLight intensity={6} position={[0, 0, 4]} color="#ff6666" />
        <React.Suspense fallback={null}>
          <RotatingSky />
        </React.Suspense>
      </Canvas>
    </div>
  )
}

useGLTF.preload("/models/sky.glb")
