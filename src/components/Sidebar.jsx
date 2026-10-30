// Sidebar.jsx — Barra lateral izquierda en estilo Neobrutalista
import { Home, BookOpen, Cpu, Play, Settings } from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Inicio', id: 'home', color: 'hover:bg-[#FFE600]' },
  { icon: BookOpen, label: 'Lecciones', id: 'lessons', color: 'hover:bg-[#00F0FF]', active: true },
  { icon: Cpu, label: 'Hardware', id: 'hardware', color: 'hover:bg-[#A3E635]' },
  { icon: Play, label: 'Simulación', id: 'simulation', color: 'hover:bg-[#FF6B8B]' },
  { icon: Settings, label: 'Ajustes', id: 'settings', color: 'hover:bg-[#C084FC]' },
];

export default function Sidebar() {
  return (
    <div className="absolute left-5 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2.5 bg-[#FFFDF9] border-[3px] border-black p-2.5 rounded-xl shadow-[5px_5px_0px_0px_#000]">
      {/* Mini sticker de cabecera */}
      <div className="w-full text-center pb-1 border-b-2 border-black mb-0.5">
        <span className="text-[9px] font-black tracking-widest uppercase bg-black text-[#FFE600] px-1.5 py-0.5 rounded-sm">
          NAV
        </span>
      </div>

      {sidebarItems.map(({ icon: Icon, label, id, color, active }) => (
        <button
          key={id}
          type="button"
          title={label}
          className={`
            w-11 h-11 flex items-center justify-center rounded-lg border-2 border-black
            transition-all duration-150 cursor-pointer
            ${active
              ? 'bg-[#00F0FF] shadow-[3px_3px_0px_0px_#000] -translate-x-0.5 -translate-y-0.5 text-black'
              : 'bg-white text-black shadow-[2px_2px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
            }
            ${color}
          `}
        >
          <Icon size={20} strokeWidth={2.4} />
        </button>
      ))}
    </div>
  );
}
