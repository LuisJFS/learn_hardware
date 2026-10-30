// Scene.jsx — Configuración del Canvas, cámara ortográfica, luces, grid y controles
import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera, OrbitControls, Grid } from '@react-three/drei';
import ComputerModel from './ComputerModel';

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.7} color="#faf5ee" />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#d4e8ff" />
      <pointLight position={[0, 3, 0]} intensity={0.3} color="#00b0b9" />
    </>
  );
}

function IsometricGrid() {
  return (
    <Grid
      position={[0, -0.01, 0]}
      args={[20, 20]}
      cellSize={0.5}
      cellThickness={0.5}
      cellColor="#d4cfc6"
      sectionSize={2}
      sectionThickness={1}
      sectionColor="#c4bfb6"
      fadeDistance={18}
      fadeStrength={1.5}
      infiniteGrid
    />
  );
}

const ISO_ANGLE = Math.atan(1 / Math.sqrt(1));

function CameraHandler({ zoomLevel, controlsRef }) {
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0.35, 0);
      controlsRef.current.update();
    }
  }, [controlsRef]);

  return null;
}

export default function Scene({
  activeComponent,
  onSelectComponent,
  zoom = 10,
  controlsRef,
}) {
  return (
    <div className="w-full h-full">
      <Canvas shadows gl={{ antialias: true, alpha: false }} style={{ background: '#f4f1ea' }}>
        <OrthographicCamera
          makeDefault
          zoom={zoom}
          position={[5, 5, 5]}
          near={0.1}
          far={100}
        />
        <OrbitControls
          ref={controlsRef}
          target={[0, 0.35, 0]}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={ISO_ANGLE}
          maxPolarAngle={ISO_ANGLE}
          enableDamping
          dampingFactor={0.05}
        />
        <CameraHandler zoomLevel={zoom} controlsRef={controlsRef} />
        <SceneLights />
        <IsometricGrid />
        <ComputerModel
          activeComponent={activeComponent}
          onSelectComponent={onSelectComponent}
        />
      </Canvas>
    </div>
  );
}

