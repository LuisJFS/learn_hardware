// SidePanel.jsx — Panel lateral derecho en estética Neobrutalista
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu, Settings, Zap, Database, Layers, HardDrive,
  Monitor, Thermometer, Wind, Shield, Award, Timer, Eye, Usb,
  Box, Ruler, Volume2, Droplets, ChevronRight, Clock, Sparkles
} from 'lucide-react';
import { components, TABS, LESSON_PROGRESS } from '../data/HardwareData';

// Mapa de iconos con trazado grueso
const iconMap = {
  cpu: Cpu,
  settings: Settings,
  zap: Zap,
  database: Database,
  layers: Layers,
  'hard-drive': HardDrive,
  monitor: Monitor,
  thermometer: Thermometer,
  wind: Wind,
  shield: Shield,
  award: Award,
  timer: Timer,
  eye: Eye,
  usb: Usb,
  box: Box,
  ruler: Ruler,
  'volume-2': Volume2,
  droplets: Droplets,
  'memory-stick': Database,
};

function getIcon(name, size = 18) {
  const Icon = iconMap[name] || Settings;
  return <Icon size={size} strokeWidth={2.4} />;
}

function CurrentTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold bg-white border-2 border-black px-2 py-0.5 rounded-md shadow-[2px_2px_0px_0px_#000]">
      <Clock size={12} strokeWidth={2.5} className="text-black" />
      <span>
        {time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </span>
    </div>
  );
}

/* ─── Pestaña: RESUMEN ─── */
function SummaryTab({ data }) {
  const accentColors = ['bg-[#FFE600]', 'bg-[#00F0FF]', 'bg-[#A3E635]', 'bg-[#FF6B8B]', 'bg-[#C084FC]'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.15 }}
      className="space-y-4"
    >
      {/* Caja de título y descripción */}
      <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_#000]">
        <div className="inline-block bg-[#00F0FF] border-2 border-black px-2.5 py-0.5 text-[10px] font-black tracking-wider uppercase mb-2 rounded-sm shadow-[2px_2px_0px_0px_#000]">
          FICHA GENERAL
        </div>
        <h2 className="text-lg font-black text-black tracking-tight mb-2 leading-tight">
          {data.summary.title}
        </h2>
        <p className="text-xs text-black font-medium leading-relaxed">
          {data.summary.description}
        </p>
      </div>

      {/* Características técnicas */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded-xs">
            CARACTERÍSTICAS CLAVE
          </span>
          <span className="text-[10px] font-bold font-mono text-gray-500">
            {data.summary.features.length} ITEMS
          </span>
        </div>

        <div className="space-y-2">
          {data.summary.features.map((feat, i) => {
            const iconBg = accentColors[i % accentColors.length];
            return (
              <div
                key={i}
                className="flex items-center gap-3 p-2.5 bg-white rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] transition-all duration-150"
              >
                <div className={`w-9 h-9 rounded-md border-2 border-black ${iconBg} flex items-center justify-center text-black flex-shrink-0 shadow-[2px_2px_0px_0px_#000]`}>
                  {getIcon(feat.icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-black text-black/60 uppercase tracking-wider">
                    {feat.label}
                  </div>
                  <div className="text-xs font-black text-black truncate">
                    {feat.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Pestaña: ESPECIFICACIONES ─── */
function SpecsTab({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.15 }}
      className="space-y-3"
    >
      <div className="bg-[#FFE600] border-2 border-black p-3 rounded-xl shadow-[4px_4px_0px_0px_#000]">
        <h2 className="text-sm font-black text-black tracking-wider uppercase">
          {data.specs.title}
        </h2>
        <p className="text-[11px] font-bold text-black/80 mt-0.5">
          Parámetros de ingeniería y arquitectura física
        </p>
      </div>

      <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_#000]">
        {data.specs.items.map((item, i) => (
          <div
            key={i}
            className={`flex justify-between items-center py-2.5 px-3.5 border-b-2 border-black last:border-b-0 ${
              i % 2 === 0 ? 'bg-[#FFFDF9]' : 'bg-[#F4F1EA]'
            }`}
          >
            <span className="text-[11px] font-black text-black/70 uppercase tracking-wider">
              {item.label}
            </span>
            <span className="text-xs font-black text-black bg-white border-2 border-black px-2 py-0.5 rounded-sm shadow-[2px_2px_0px_0px_#000]">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Pestaña: EJEMPLO ─── */
function ExampleTab({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.15 }}
      className="space-y-3"
    >
      <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_#000]">
        <div className="inline-block bg-[#A3E635] border-2 border-black px-2.5 py-0.5 text-[10px] font-black tracking-wider uppercase mb-2 rounded-sm shadow-[2px_2px_0px_0px_#000]">
          BENCHMARK REAL
        </div>
        <h2 className="text-base font-black text-black tracking-tight mb-2">
          {data.example.title}
        </h2>
        <p className="text-xs text-black font-medium leading-relaxed">
          {data.example.description}
        </p>
      </div>

      <div>
        <div className="text-[11px] font-black uppercase tracking-wider bg-black text-[#FFE600] px-2 py-0.5 inline-block mb-2 rounded-xs">
          CASOS DE USO ÓPTIMOS
        </div>
        <div className="grid grid-cols-1 gap-2">
          {data.example.useCases.map((uc, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 p-2.5 bg-white rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] transition-all"
            >
              <div className="w-6 h-6 rounded-md bg-[#FFE600] border-2 border-black flex items-center justify-center font-black text-xs flex-shrink-0">
                {i + 1}
              </div>
              <span className="text-xs font-black text-black">{uc}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Pestaña: CONEXIÓN ─── */
function ConnectionTab({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.15 }}
      className="space-y-3"
    >
      <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_#000]">
        <div className="inline-block bg-[#FF6B8B] border-2 border-black px-2.5 py-0.5 text-[10px] font-black tracking-wider uppercase mb-2 rounded-sm shadow-[2px_2px_0px_0px_#000]">
          INTERFAZ DE BUS & BUSES
        </div>
        <h2 className="text-base font-black text-black tracking-tight mb-2">
          {data.connection.title}
        </h2>
        <p className="text-xs text-black font-medium leading-relaxed">
          {data.connection.description}
        </p>
      </div>

      <div className="space-y-2">
        {data.connection.connections.map((conn, i) => (
          <div
            key={i}
            className="p-3 bg-white rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] transition-all"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-black text-black flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-black inline-block" />
                {conn.to}
              </span>
              <span className="text-[10px] font-black px-2 py-0.5 bg-[#00F0FF] text-black border-2 border-black rounded-sm shadow-[2px_2px_0px_0px_#000]">
                {conn.type}
              </span>
            </div>
            <p className="text-[11px] font-bold text-black/70 pl-3.5">
              {conn.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Panel Principal Neobrutalista ─── */
export default function SidePanel({ activeComponent, onSelectComponent }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeData = components.find((c) => c.id === activeComponent) || components[0];
  const activeIndex = components.findIndex((c) => c.id === activeComponent);

  useEffect(() => {
    setActiveTab(0);
  }, [activeComponent]);

  const tabContent = [
    <SummaryTab key="summary" data={activeData} />,
    <SpecsTab key="specs" data={activeData} />,
    <ExampleTab key="example" data={activeData} />,
    <ConnectionTab key="connection" data={activeData} />,
  ];

  return (
    <div className="w-[400px] h-full bg-[#FAF7F0] border-l-[3.5px] border-black flex flex-col overflow-hidden select-none">
      {/* ─── Cabecera Neobrutalista ─── */}
      <div className="p-4 bg-[#FFE600] border-b-[3px] border-black">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-black text-[#00F0FF] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000]">
              <Cpu size={22} strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-black text-black tracking-tight leading-none">
                  APRENDE HARDWARE
                </h1>
                <span className="text-[9px] font-black bg-black text-white px-1.5 py-0.5 rounded-xs">
                  PRO
                </span>
              </div>
              <p className="text-[10px] font-mono font-bold text-black/75 tracking-wider mt-0.5 uppercase">
                EXPLORA • ENTIENDE • CONSTRUYE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Módulo y Progreso ─── */}
      <div className="p-4 bg-white border-b-[3px] border-black">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black text-black bg-[#A3E635] border-2 border-black px-2.5 py-0.5 rounded-md shadow-[2px_2px_0px_0px_#000] tracking-wider uppercase">
              {LESSON_PROGRESS.module}
            </span>
            <span className="text-xs font-black font-mono text-black bg-[#FAF7F0] border-2 border-black px-2 py-0.5 rounded-md shadow-[2px_2px_0px_0px_#000]">
              {activeIndex + 1} / {LESSON_PROGRESS.total}
            </span>
          </div>
          <CurrentTime />
        </div>

        {/* Barra de progreso gruesa neobrutalista */}
        <div className="w-full h-4 bg-white border-2 border-black rounded-md overflow-hidden p-0.5 shadow-[3px_3px_0px_0px_#000]">
          <motion.div
            className="h-full bg-[#00F0FF] border-r-2 border-black"
            initial={{ width: 0 }}
            animate={{ width: `${((activeIndex + 1) / LESSON_PROGRESS.total) * 100}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* ─── Carrusel de Componentes ─── */}
      <div className="p-3.5 bg-[#F4F1EA] border-b-[3px] border-black">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[10px] font-black text-black uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#FF6B8B] border border-black inline-block" />
            COMPONENTES
          </h3>
          <span className="text-[10px] font-mono font-bold text-black/60">
            SELECCIONA UNO
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {components.map((comp, i) => {
            const isActive = comp.id === activeComponent;
            return (
              <button
                key={comp.id}
                type="button"
                onClick={() => onSelectComponent(comp.id)}
                className={`
                  flex-shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-black tracking-wide
                  transition-all duration-150 border-2 border-black whitespace-nowrap cursor-pointer
                  ${isActive
                    ? 'bg-[#00F0FF] text-black shadow-[3px_3px_0px_0px_#000] -translate-x-0.5 -translate-y-0.5'
                    : 'bg-white text-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#000]'
                  }
                `}
              >
                {i + 1}. {comp.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Pestañas (Tabs) Estilo Neobrutalista ─── */}
      <div className="px-3 pt-3 bg-[#FAF7F0] border-b-[3px] border-black">
        <div className="grid grid-cols-4 gap-1.5">
          {TABS.map((tab, i) => {
            const isActive = i === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`
                  py-2 px-1 text-[10px] font-black tracking-wider transition-all duration-150
                  border-2 border-black rounded-t-lg truncate cursor-pointer
                  ${isActive
                    ? 'bg-[#FFE600] text-black shadow-[3px_0px_0px_0px_#000] -translate-y-1 border-b-2'
                    : 'bg-white text-black hover:bg-[#00F0FF] hover:-translate-y-0.5 shadow-[1px_1px_0px_0px_#000]'
                  }
                `}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Contenido Scrolleable ─── */}
      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin bg-[#FAF7F0]">
        <AnimatePresence mode="wait">
          {tabContent[activeTab]}
        </AnimatePresence>
      </div>
    </div>
  );
}
