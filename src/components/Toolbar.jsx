// Toolbar.jsx — Botonera flotante inferior en estilo Neobrutalista
import { Undo2, Redo2, ZoomIn, ZoomOut, Info, RotateCcw } from 'lucide-react';

export default function Toolbar({
  onZoomIn,
  onZoomOut,
  onReset,
  onInfo,
}) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#FFFDF9] border-[3px] border-black rounded-xl px-3 py-2 shadow-[6px_6px_0px_0px_#000]">
      {/* Zoom In */}
      <button
        type="button"
        onClick={onZoomIn}
        title="Acercar (+)"
        className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#00F0FF] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 cursor-pointer"
      >
        <ZoomIn size={19} strokeWidth={2.5} />
      </button>

      {/* Zoom Out */}
      <button
        type="button"
        onClick={onZoomOut}
        title="Alejar (-)"
        className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#00F0FF] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 cursor-pointer"
      >
        <ZoomOut size={19} strokeWidth={2.5} />
      </button>

      {/* Reset Cam */}
      <button
        type="button"
        onClick={onReset}
        title="Reiniciar perspectiva isométrica"
        className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-black bg-[#FFE600] text-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FFF] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 cursor-pointer"
      >
        <RotateCcw size={19} strokeWidth={2.5} />
      </button>

      <div className="w-[2px] h-7 bg-black mx-1" />

      {/* Info Help */}
      <button
        type="button"
        onClick={onInfo}
        title="Guía de navegación y atajos"
        className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-black bg-[#FF6B8B] text-black shadow-[2px_2px_0px_0px_#000] hover:bg-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 cursor-pointer"
      >
        <Info size={19} strokeWidth={2.5} />
      </button>
    </div>
  );
}
