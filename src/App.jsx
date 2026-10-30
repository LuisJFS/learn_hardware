// App.jsx — Estado global que conecta la escena 3D con el UI Overlay
import { useState, useRef, useEffect, useCallback } from 'react';
import Scene from './components/Scene';
import SidePanel from './components/SidePanel';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import { HelpCircle, X, Rotate3d, MousePointerClick, ZoomIn } from 'lucide-react';

function getResponsiveDefaultZoom() {
  if (typeof window === 'undefined') return 58;
  const canvasWidth = window.innerWidth - 380;
  if (canvasWidth < 600) return 42;
  if (canvasWidth < 900) return 50;
  if (canvasWidth < 1200) return 58;
  return 66;
}

export default function App() {
  const [history, setHistory] = useState(['motherboard']);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [zoom, setZoom] = useState(getResponsiveDefaultZoom);
  const [showInfo, setShowInfo] = useState(false);
  const controlsRef = useRef(null);

  const activeComponent = history[historyIndex] || 'motherboard';

  // Ajuste responsivo al redimensionar la ventana
  useEffect(() => {
    const handleResize = () => {
      setZoom((prev) => {
        // Solo adaptar si no ha sido alejado o acercado manualmente de forma extrema
        const target = getResponsiveDefaultZoom();
        return Math.abs(prev - target) < 15 ? target : prev;
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectComponent = useCallback((id) => {
    setHistory((prev) => {
      const next = prev.slice(0, historyIndex + 1);
      if (next[next.length - 1] === id) return prev;
      return [...next, id];
    });
    setHistoryIndex((prev) => prev + 1);
  }, [historyIndex]);

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex((prev) => prev - 1);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((prev) => prev + 1);
    }
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 110));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 32));
  };

  const handleReset = () => {
    setZoom(getResponsiveDefaultZoom());
    if (controlsRef.current) {
      controlsRef.current.reset();
      controlsRef.current.target.set(0, 0.35, 0);
      controlsRef.current.update();
    }
  };

  return (
    <div className="w-screen h-screen flex bg-[#f4f1ea] overflow-hidden select-none">
      {/* ─── Área del Canvas 3D ─── */}
      <div className="flex-1 relative h-full">
        <Scene
          activeComponent={activeComponent}
          onSelectComponent={handleSelectComponent}
          zoom={zoom}
          controlsRef={controlsRef}
        />

        {/* Overlays */}
        <Sidebar />
        <Toolbar
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onReset={handleReset}
          onUndo={handleUndo}
          onRedo={handleRedo}
          onInfo={() => setShowInfo(true)}
          canUndo={historyIndex > 0}
          canRedo={historyIndex < history.length - 1}
        />

        {/* Modal de Información / Ayuda */}
        {showInfo && (
          <div className="absolute inset-0 z-50 bg-black/30 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-md w-full p-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00b0b9]/15 text-[#00b0b9] flex items-center justify-center">
                    <HelpCircle size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">Controles de Simulación</h3>
                    <p className="text-[11px] text-gray-400">Guía de navegación interactiva</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowInfo(false)}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-3 text-xs text-gray-600 mb-6">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="p-1.5 rounded-lg bg-white text-[#00b0b9] shadow-xs">
                    <MousePointerClick size={16} />
                  </div>
                  <div>
                    <strong className="text-gray-800 block mb-0.5">Seleccionar pieza</strong>
                    Haz clic directamente en cualquier pieza 3D o en su etiqueta flotante para ver su ficha técnica detallada.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="p-1.5 rounded-lg bg-white text-[#00b0b9] shadow-xs">
                    <Rotate3d size={16} />
                  </div>
                  <div>
                    <strong className="text-gray-800 block mb-0.5">Rotar perspectiva</strong>
                    Mantén presionado el clic izquierdo y arrastra para rotar alrededor del ensamble en ángulo isométrico.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="p-1.5 rounded-lg bg-white text-[#00b0b9] shadow-xs">
                    <ZoomIn size={16} />
                  </div>
                  <div>
                    <strong className="text-gray-800 block mb-0.5">Ajustar encuadre</strong>
                    Usa los botones (+) y (-) de la botonera inferior para acercar o alejar el zoom si necesitas mayor detalle.
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowInfo(false)}
                className="w-full py-2.5 rounded-xl bg-[#00b0b9] hover:bg-[#009aa2] text-white font-bold text-xs tracking-wider transition-colors cursor-pointer shadow-md shadow-[#00b0b9]/25"
              >
                ENTENDIDO
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ─── Panel Lateral Derecho ─── */}
      <SidePanel
        activeComponent={activeComponent}
        onSelectComponent={handleSelectComponent}
      />
    </div>
  );
}
