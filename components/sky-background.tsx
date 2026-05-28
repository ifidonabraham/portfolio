"use client"

import * as React from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Stars, useGLTF } from "@react-three/drei"
import * as THREE from "three"

function SpinningSkyModel() {
  const outerRef = React.useRef<THREE.Group>(null)
  const innerRef = React.useRef<THREE.Group>(null)
  const { scene } = useGLTF("/models/sky.glb")
  const { camera } = useThree()
  const lastScrollY = React.useRef(0)
  const scrollBoost = React.useRef(0)
  const elapsed = React.useRef(0)

  React.useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      const delta = Math.abs(current - lastScrollY.current)
      lastScrollY.current = current
      // Gear-like behavior: small scroll still causes strong spin.
      scrollBoost.current = Math.min(20, scrollBoost.current + Math.pow(delta * 0.12, 0.82))
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const normalizedModel = React.useMemo(() => {
    const clone = scene.clone()
    clone.updateMatrixWorld(true)

    const box = new THREE.Box3().setFromObject(clone)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    const scale = 5 / maxDim

    const wrapper = new THREE.Group()
    clone.position.sub(center)
    clone.scale.setScalar(scale)

    clone.traverse((obj) => {
      obj.frustumCulled = false
    })

    wrapper.add(clone)
    return wrapper
  }, [scene])

  useFrame((state, delta) => {
    if (!outerRef.current || !innerRef.current) return

    elapsed.current += delta

    // Strong zoom sweep from full-globe view into tight line view.
    const wave = (Math.sin(elapsed.current * 0.65) + 1) / 2
    const targetScale = THREE.MathUtils.lerp(1.1, 1.95, wave)
    const targetCameraZ = THREE.MathUtils.lerp(10.5, 3.6, wave)

    outerRef.current.scale.lerpScalar(targetScale, 0.12)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetCameraZ, 0.12)
    camera.lookAt(0, 0, 0)

    // Fast baseline spin + heavy scroll acceleration.
    const fastBase = 5.6
    const speed = fastBase + scrollBoost.current

    // Gear-style counter-rotation around latitudinal belt.
    outerRef.current.rotation.y += delta * speed
    outerRef.current.rotation.x += delta * 0.04
    innerRef.current.rotation.y -= delta * speed * 2.2
    innerRef.current.rotation.z += delta * speed * 0.55

    // Slow decay, so momentum stays noticeable.
    scrollBoost.current = Math.max(0, scrollBoost.current - delta * 2.2)

    state.invalidate()
  })

  return (
    <group ref={outerRef} scale={1.2}>
      <group ref={innerRef}>
        <primitive object={normalizedModel} />
      </group>
    </group>
  )
}

export function SkyBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 10.5], fov: 34 }}
      >
        <color attach="background" args={["#03070f"]} />
        <fog attach="fog" args={["#02050c", 16, 42]} />
        <Stars
          radius={80}
          depth={28}
          count={3600}
          factor={2.4}
          saturation={0}
          fade
          speed={0.24}
        />
        <ambientLight intensity={3.4} />
        <hemisphereLight intensity={2.6} color="#ffb3b3" groundColor="#3a0000" />
        <directionalLight intensity={5.2} position={[4, 5, 6]} color="#ffe0e0" />
        <directionalLight intensity={3.6} position={[-5, -2, -5]} color="#ff4d4d" />
        <pointLight intensity={6.0} position={[0, 0, 4]} color="#ff8c8c" />
        <pointLight intensity={3.6} position={[0, 0, -4]} color="#ff5c5c" />
        <React.Suspense fallback={null}>
          <SpinningSkyModel />
        </React.Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-background/5 dark:bg-background/10" />
    </div>
  )
}

useGLTF.preload("/models/sky.glb")
