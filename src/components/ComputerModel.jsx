// ComputerModel.jsx — Renderizado de los componentes 3D con etiquetas Html
import { useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { components } from '../data/HardwareData';

/* ─── Etiqueta 3D flotante ─── */
function ComponentLabel({ label, position, isActive, onClick }) {
  const stalkHeight = 0.55;
  const labelY = position[1] + stalkHeight;

  return (
    <group position={[position[0], labelY, position[2]]}>
      {/* Línea conectora */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([0, 0, 0, 0, -stalkHeight, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={isActive ? '#00b0b9' : '#8c8c8c'} linewidth={1.5} />
      </line>

      {/* Pill HTML */}
      <Html
        center
        position={[0, 0, 0]}
        style={{
          pointerEvents: 'auto',
          userSelect: 'none',
        }}
      >
        <button
          type="button"
          onClick={onClick}
          className={`
            flex items-center gap-1.5 px-2.5 py-1 rounded-full cursor-pointer
            transition-all duration-200 whitespace-nowrap select-none
            shadow-md hover:shadow-lg
            ${isActive
              ? 'bg-white border-2 border-[#00b0b9] ring-2 ring-[#00b0b9]/30 scale-105'
              : 'bg-white/95 border border-gray-300 hover:border-[#00b0b9] hover:scale-105'
            }
          `}
          style={{ fontSize: '10px', fontFamily: 'system-ui, sans-serif' }}
        >
          <div
            className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
              isActive ? 'bg-[#00b0b9]' : 'bg-gray-400'
            }`}
          />
          <span className="font-bold text-gray-800 tracking-wider text-[10px]">{label}</span>
        </button>
      </Html>
    </group>
  );
}

/* ─── Motherboard (placa base grande) ─── */
function Motherboard({ isActive, onClick }) {
  const ref = useRef();
  return (
    <group ref={ref} position={[0, 0, 0]}>
      {/* Placa PCB principal */}
      <mesh position={[0, 0.05, 0]} onClick={onClick} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.1, 2.8]} />
        <meshStandardMaterial
          color={isActive ? '#358856' : '#2d6a4f'}
          roughness={0.6}
          metalness={0.3}
        />
      </mesh>
      {/* Circuitos decorativos */}
      {[...Array(6)].map((_, i) => (
        <mesh key={`trace-${i}`} position={[-1.2 + i * 0.5, 0.11, 0.4 + (i % 2) * 0.6]}>
          <boxGeometry args={[0.35, 0.02, 0.02]} />
          <meshStandardMaterial color="#4a9e6d" metalness={0.5} />
        </mesh>
      ))}
      {/* Socket CPU placeholder */}
      <mesh position={[0, 0.12, 0.3]}>
        <boxGeometry args={[0.6, 0.03, 0.6]} />
        <meshStandardMaterial color="#555555" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Slots RAM */}
      {[0, 0.2, 0.4, 0.6].map((offset, i) => (
        <mesh key={`slot-${i}`} position={[1.0 + offset * 0.5, 0.12, 0.2]}>
          <boxGeometry args={[0.08, 0.03, 1.0]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      ))}
      {/* Chipset */}
      <mesh position={[0.3, 0.12, -0.6]}>
        <boxGeometry args={[0.4, 0.05, 0.4]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.6} />
      </mesh>
      {/* Conectores traseros (I/O Shield) */}
      <mesh position={[-1.55, 0.25, 0.8]}>
        <boxGeometry args={[0.15, 0.35, 1.2]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* PCIe slots */}
      {[0, 0.4, 0.7].map((offset, i) => (
        <mesh key={`pcie-${i}`} position={[-0.3, 0.12, -1.0 - offset * 0.3]}>
          <boxGeometry args={[2.0, 0.04, 0.08]} />
          <meshStandardMaterial color={i === 0 ? '#00b0b9' : '#333333'} />
        </mesh>
      ))}
      {/* Condensadores */}
      {[...Array(8)].map((_, i) => (
        <mesh key={`cap-${i}`} position={[-0.6 + i * 0.18, 0.18, 0.9]}>
          <cylinderGeometry args={[0.04, 0.04, 0.12, 8]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.7} />
        </mesh>
      ))}
      {/* VRM heatsinks */}
      <mesh position={[-0.6, 0.2, 0.3]}>
        <boxGeometry args={[0.3, 0.15, 0.8]} />
        <meshStandardMaterial color="#555555" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.2, 1.1]}>
        <boxGeometry args={[1.0, 0.12, 0.2]} />
        <meshStandardMaterial color="#555555" metalness={0.8} roughness={0.3} />
      </mesh>
    </group>
  );
}

/* ─── CPU ─── */
function CPU({ isActive, onClick }) {
  return (
    <group position={[0, 0.15, 0.3]}>
      {/* IHS (Integrated Heat Spreader) */}
      <mesh onClick={onClick} castShadow>
        <boxGeometry args={[0.5, 0.08, 0.5]} />
        <meshStandardMaterial
          color={isActive ? '#5aabe6' : '#4a90d9'}
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>
      {/* Borde */}
      <mesh position={[0, -0.03, 0]}>
        <boxGeometry args={[0.55, 0.04, 0.55]} />
        <meshStandardMaterial color="#999" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Texto grabado simulado */}
      <mesh position={[0, 0.045, 0]}>
        <boxGeometry args={[0.3, 0.005, 0.15]} />
        <meshStandardMaterial color="#6eb5e8" metalness={0.7} />
      </mesh>
    </group>
  );
}

/* ─── RAM (módulos) ─── */
function RAM({ isActive, onClick }) {
  return (
    <group position={[1.2, 0.15, 0.2]}>
      {[0, 0.15].map((offset, i) => (
        <group key={i} position={[offset, 0, 0]}>
          <mesh onClick={onClick} castShadow>
            <boxGeometry args={[0.08, 0.55, 0.8]} />
            <meshStandardMaterial
              color={isActive ? '#e8944a' : '#e07b39'}
              roughness={0.4}
              metalness={0.3}
            />
          </mesh>
          {/* Chips en el módulo */}
          {[...Array(4)].map((_, j) => (
            <mesh key={j} position={[0.045, 0.05 + j * 0.12 - 0.2, 0]}>
              <boxGeometry args={[0.01, 0.08, 0.12]} />
              <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
            </mesh>
          ))}
          {/* Heatspreader superior */}
          <mesh position={[0, 0.32, 0]}>
            <boxGeometry args={[0.09, 0.1, 0.82]} />
            <meshStandardMaterial
              color={isActive ? '#f0a060' : '#d4782e'}
              metalness={0.6}
              roughness={0.2}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ─── GPU ─── */
function GPU({ isActive, onClick }) {
  return (
    <group position={[-0.3, 0.3, -1.2]}>
      {/* PCB de la GPU */}
      <mesh onClick={onClick} castShadow>
        <boxGeometry args={[2.2, 0.08, 0.6]} />
        <meshStandardMaterial
          color={isActive ? '#d94444' : '#1a1a2e'}
          roughness={0.5}
          metalness={0.4}
        />
      </mesh>
      {/* Backplate */}
      <mesh position={[0, 0.06, 0]}>
        <boxGeometry args={[2.2, 0.03, 0.6]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Shroud / Cooler */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[2.3, 0.12, 0.65]} />
        <meshStandardMaterial
          color={isActive ? '#e05555' : '#c0392b'}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>
      {/* Ventiladores (3x) */}
      {[-0.7, 0, 0.7].map((x, i) => (
        <group key={i} position={[x, -0.17, 0]}>
          <mesh>
            <cylinderGeometry args={[0.25, 0.25, 0.02, 24]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
          </mesh>
          {/* Aspas */}
          {[...Array(7)].map((_, j) => (
            <mesh
              key={j}
              rotation={[0, (j * Math.PI * 2) / 7, 0]}
              position={[Math.cos((j * Math.PI * 2) / 7) * 0.12, -0.015, Math.sin((j * Math.PI * 2) / 7) * 0.12]}
            >
              <boxGeometry args={[0.15, 0.01, 0.04]} />
              <meshStandardMaterial color="#333" />
            </mesh>
          ))}
        </group>
      ))}
      {/* Conectores de video */}
      <mesh position={[-1.15, -0.02, 0]}>
        <boxGeometry args={[0.08, 0.2, 0.5]} />
        <meshStandardMaterial color="#666" metalness={0.8} />
      </mesh>
    </group>
  );
}

/* ─── SSD ─── */
function SSD({ isActive, onClick }) {
  return (
    <group position={[1.0, 0.15, -0.8]}>
      {/* Cuerpo del SSD M.2 */}
      <mesh onClick={onClick} castShadow>
        <boxGeometry args={[0.9, 0.04, 0.22]} />
        <meshStandardMaterial
          color={isActive ? '#a35bc0' : '#8e44ad'}
          roughness={0.4}
          metalness={0.4}
        />
      </mesh>
      {/* Label / Sticker */}
      <mesh position={[0.1, 0.025, 0]}>
        <boxGeometry args={[0.5, 0.005, 0.18]} />
        <meshStandardMaterial color="#b766d6" roughness={0.8} />
      </mesh>
      {/* Chips NAND */}
      {[-0.2, 0.0, 0.2].map((x, i) => (
        <mesh key={i} position={[x, 0.03, 0]}>
          <boxGeometry args={[0.12, 0.02, 0.14]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} />
        </mesh>
      ))}
      {/* Conector M.2 */}
      <mesh position={[-0.42, 0, 0]}>
        <boxGeometry args={[0.08, 0.03, 0.2]} />
        <meshStandardMaterial color="#c8a200" metalness={0.9} />
      </mesh>
    </group>
  );
}

/* ─── PSU ─── */
function PSU({ isActive, onClick }) {
  return (
    <group position={[-1.3, 0.35, 0.6]}>
      {/* Cuerpo principal */}
      <mesh onClick={onClick} castShadow>
        <boxGeometry args={[0.8, 0.5, 0.7]} />
        <meshStandardMaterial
          color={isActive ? '#f5b042' : '#2a2a2a'}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>
      {/* Ventilador lateral */}
      <mesh position={[0, 0.26, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.02, 24]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} />
      </mesh>
      {/* Grilla del ventilador */}
      <mesh position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.01, 24]} />
        <meshStandardMaterial color="#444" wireframe metalness={0.8} />
      </mesh>
      {/* Label */}
      <mesh position={[0.41, 0, 0]}>
        <boxGeometry args={[0.01, 0.3, 0.4]} />
        <meshStandardMaterial
          color={isActive ? '#f5b042' : '#f39c12'}
          roughness={0.6}
        />
      </mesh>
      {/* Conector de cables */}
      <mesh position={[-0.41, -0.1, 0]}>
        <boxGeometry args={[0.02, 0.2, 0.4]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}

/* ─── Cooler ─── */
function Cooler({ isActive, onClick }) {
  return (
    <group position={[0, 0.55, 0.3]}>
      {/* Base de contacto */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.45, 0.05, 0.45]} />
        <meshStandardMaterial color="#b87333" metalness={0.95} roughness={0.1} />
      </mesh>
      {/* Heatpipes */}
      {[-0.12, -0.04, 0.04, 0.12].map((x, i) => (
        <mesh key={i} position={[x, 0.3, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.55, 8]} />
          <meshStandardMaterial color="#b87333" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
      {/* Aletas del disipador */}
      {[...Array(12)].map((_, i) => (
        <mesh key={i} position={[0, 0.15 + i * 0.04, 0]}>
          <boxGeometry args={[0.5, 0.015, 0.5]} />
          <meshStandardMaterial
            color={isActive ? '#4ab8d9' : '#c0c0c0'}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>
      ))}
      {/* Ventilador */}
      <mesh position={[0.3, 0.35, 0]}>
        <boxGeometry args={[0.08, 0.45, 0.45]} />
        <meshStandardMaterial
          color={isActive ? '#3498db' : '#2a2a2a'}
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}

/* ─── Componente principal ─── */
export default function ComputerModel({ activeComponent, onSelectComponent }) {
  const componentMap = {
    motherboard: Motherboard,
    cpu: CPU,
    ram: RAM,
    gpu: GPU,
    ssd: SSD,
    psu: PSU,
    cooler: Cooler,
  };

  return (
    <group>
      {components
        .filter((c) => c.id !== 'case')
        .map((comp) => {
          const Component3D = componentMap[comp.id];
          if (!Component3D) return null;
          const isActive = activeComponent === comp.id;
          return (
            <group key={comp.id}>
              <Component3D
                isActive={isActive}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectComponent(comp.id);
                }}
              />
              <ComponentLabel
                label={comp.label}
                position={comp.position}
                isActive={isActive}
                onClick={() => onSelectComponent(comp.id)}
              />
            </group>
          );
        })}
    </group>
  );
}
