// HardwareData.js — Datos de componentes, descripciones, categorías e items

export const components = [
  {
    id: 'motherboard',
    name: 'TARJETA MADRE',
    shortName: 'MOTHERBOARD',
    label: 'MOTHERBOARD',
    position: [-0.9, 0.12, 0.8],
    color: '#2d6a4f',
    summary: {
      title: 'TARJETA MADRE (MOTHERBOARD)',
      description:
        'La tarjeta madre es el componente principal que conecta y permite la comunicación entre todos los demás componentes del sistema. Actúa como el "sistema nervioso" de la computadora, distribuyendo energía y datos a través de sus buses y circuitos integrados.',
      features: [
        { icon: 'cpu', label: 'Socket CPU', value: 'LGA 1700 / AM5' },
        { icon: 'memory-stick', label: 'Slots RAM', value: '4x DDR5' },
        { icon: 'hard-drive', label: 'Almacenamiento', value: 'M.2 NVMe + SATA' },
        { icon: 'usb', label: 'Puertos I/O', value: 'USB 3.2, HDMI, Audio' },
        { icon: 'settings', label: 'Chipset', value: 'Intel Z790 / AMD X670' },
      ],
    },
    specs: {
      title: 'ESPECIFICACIONES TÉCNICAS',
      items: [
        { label: 'Factor de forma', value: 'ATX (305 × 244 mm)' },
        { label: 'Capas PCB', value: '6 capas con blindaje EMI' },
        { label: 'Alimentación', value: '24-pin ATX + 8-pin EPS' },
        { label: 'Slots PCIe', value: '1x PCIe 5.0 x16, 2x PCIe 4.0 x4' },
        { label: 'Red', value: 'Ethernet 2.5G + Wi-Fi 6E' },
        { label: 'Audio', value: 'Realtek ALC4080 7.1 canales' },
      ],
    },
    example: {
      title: 'EJEMPLO DE USO',
      description:
        'En un PC gaming de gama alta, la tarjeta madre ASUS ROG Strix Z790-E utiliza un socket LGA 1700 para procesadores Intel de 12ª-14ª generación. Soporta RAM DDR5 hasta 7800 MHz y ofrece conectividad PCIe 5.0 para las GPUs más recientes.',
      useCases: [
        'Gaming de alto rendimiento',
        'Estaciones de trabajo profesionales',
        'Servidores domésticos',
        'Producción multimedia',
      ],
    },
    connection: {
      title: 'CONEXIONES',
      description:
        'La tarjeta madre se conecta con todos los componentes del sistema. Es el hub central que distribuye datos y energía.',
      connections: [
        { to: 'CPU', type: 'Socket LGA/AM', desc: 'Conexión directa al procesador' },
        { to: 'RAM', type: 'Slots DIMM', desc: 'Módulos de memoria DDR5' },
        { to: 'GPU', type: 'PCIe x16', desc: 'Tarjeta gráfica dedicada' },
        { to: 'SSD/HDD', type: 'M.2 / SATA', desc: 'Almacenamiento' },
        { to: 'PSU', type: '24-pin + 8-pin', desc: 'Fuente de alimentación' },
      ],
    },
  },
  {
    id: 'cpu',
    name: 'CPU',
    shortName: 'CPU',
    label: 'CPU',
    position: [0, 0.22, 0.3],
    color: '#4a90d9',
    summary: {
      title: 'PROCESADOR (CPU)',
      description:
        'La Unidad Central de Procesamiento (CPU) es el "cerebro" de la computadora. Ejecuta instrucciones, realiza cálculos matemáticos y lógicos, y coordina las operaciones de todos los demás componentes del sistema.',
      features: [
        { icon: 'settings', label: 'Frecuencia de reloj', value: '3.0 – 5.8 GHz' },
        { icon: 'layers', label: 'Núcleos / Hilos', value: '8C/16T – 24C/32T' },
        { icon: 'database', label: 'Caché L3', value: '32 MB – 64 MB' },
        { icon: 'zap', label: 'TDP', value: '65W – 253W' },
        { icon: 'cpu', label: 'Litografía', value: '5nm – 7nm' },
      ],
    },
    specs: {
      title: 'ESPECIFICACIONES TÉCNICAS',
      items: [
        { label: 'Arquitectura', value: 'x86-64 / ARM64' },
        { label: 'Set de instrucciones', value: 'SSE4.2, AVX-512, AMX' },
        { label: 'Bus de datos', value: 'PCIe 5.0, 20 líneas' },
        { label: 'Controlador memoria', value: 'DDR5-5600 (dual channel)' },
        { label: 'Gráficos integrados', value: 'Intel UHD 770 / AMD RDNA 2' },
        { label: 'Proceso fabricación', value: 'Intel 7 / TSMC N5' },
      ],
    },
    example: {
      title: 'EJEMPLO DE USO',
      description:
        'El Intel Core i9-14900K es un procesador de 24 núcleos (8P + 16E) que alcanza hasta 6.0 GHz en modo turbo. Ideal para gaming, streaming y renderizado 3D simultáneo.',
      useCases: [
        'Renderizado 3D en tiempo real',
        'Compilación de código',
        'Inteligencia artificial',
        'Gaming competitivo',
      ],
    },
    connection: {
      title: 'CONEXIONES',
      description:
        'El CPU se conecta directamente a la tarjeta madre a través del socket y se comunica con la RAM y la GPU mediante buses de alta velocidad.',
      connections: [
        { to: 'Motherboard', type: 'Socket', desc: 'LGA 1700 / AM5' },
        { to: 'RAM', type: 'Bus memoria', desc: 'DDR5 Dual Channel' },
        { to: 'GPU', type: 'PCIe 5.0', desc: '16 líneas directas' },
        { to: 'Cooler', type: 'Contacto', desc: 'Disipador térmico' },
      ],
    },
  },
  {
    id: 'ram',
    name: 'MEMORIA RAM',
    shortName: 'RAM',
    label: 'RAM',
    position: [1.25, 0.45, 0.2],
    color: '#e07b39',
    summary: {
      title: 'MEMORIA RAM',
      description:
        'La memoria RAM (Random Access Memory) es la memoria de acceso rápido donde el sistema almacena temporalmente los datos e instrucciones que el procesador necesita en tiempo real. Es volátil: se borra al apagar el equipo.',
      features: [
        { icon: 'zap', label: 'Velocidad', value: 'DDR5-6000 MT/s' },
        { icon: 'database', label: 'Capacidad', value: '16 GB – 128 GB' },
        { icon: 'timer', label: 'Latencia', value: 'CL30 – CL40' },
        { icon: 'cpu', label: 'Voltaje', value: '1.1V – 1.35V' },
        { icon: 'layers', label: 'Canales', value: 'Dual / Quad Channel' },
      ],
    },
    specs: {
      title: 'ESPECIFICACIONES TÉCNICAS',
      items: [
        { label: 'Tipo', value: 'DDR5 SDRAM' },
        { label: 'Factor de forma', value: 'DIMM 288-pin' },
        { label: 'Ancho de banda', value: '51.2 GB/s (por canal)' },
        { label: 'ECC', value: 'On-die ECC integrado' },
        { label: 'XMP / EXPO', value: 'Perfiles de overclock' },
        { label: 'Regulador voltaje', value: 'PMIC integrado en módulo' },
      ],
    },
    example: {
      title: 'EJEMPLO DE USO',
      description:
        'Un kit de Corsair Dominator Platinum DDR5-6200 (2x16GB) ofrece 32GB de memoria a alta velocidad con latencia CL30, perfecto para gaming y edición de video en 4K.',
      useCases: [
        'Edición de video 4K/8K',
        'Máquinas virtuales',
        'Bases de datos en memoria',
        'Multitarea intensiva',
      ],
    },
    connection: {
      title: 'CONEXIONES',
      description:
        'La RAM se inserta en los slots DIMM de la tarjeta madre y se comunica directamente con el controlador de memoria integrado en el CPU.',
      connections: [
        { to: 'Motherboard', type: 'Slot DIMM', desc: 'Conexión física DDR5' },
        { to: 'CPU', type: 'Bus memoria', desc: 'Canal directo al IMC' },
      ],
    },
  },
  {
    id: 'gpu',
    name: 'GPU',
    shortName: 'GPU',
    label: 'GPU',
    position: [-0.3, 0.4, -1.2],
    color: '#c0392b',
    summary: {
      title: 'TARJETA GRÁFICA (GPU)',
      description:
        'La GPU (Graphics Processing Unit) es el componente encargado de procesar y renderizar gráficos. Contiene miles de núcleos especializados en cálculos paralelos, esencial para gaming, diseño 3D e inteligencia artificial.',
      features: [
        { icon: 'monitor', label: 'VRAM', value: '12 GB – 24 GB GDDR6X' },
        { icon: 'cpu', label: 'CUDA Cores', value: '7,168 – 16,384' },
        { icon: 'zap', label: 'Frecuencia', value: '2.2 – 2.5 GHz Boost' },
        { icon: 'thermometer', label: 'TDP', value: '200W – 450W' },
        { icon: 'settings', label: 'Ray Tracing', value: 'RT Cores 3ª Gen' },
      ],
    },
    specs: {
      title: 'ESPECIFICACIONES TÉCNICAS',
      items: [
        { label: 'Arquitectura', value: 'NVIDIA Ada Lovelace / AMD RDNA 3' },
        { label: 'Interfaz', value: 'PCIe 4.0 x16' },
        { label: 'Bus memoria', value: '256-bit / 384-bit' },
        { label: 'Ancho de banda', value: '912 GB/s' },
        { label: 'Salidas video', value: '3x DP 1.4a + 1x HDMI 2.1' },
        { label: 'Alimentación', value: '16-pin 12VHPWR' },
      ],
    },
    example: {
      title: 'EJEMPLO DE USO',
      description:
        'La NVIDIA GeForce RTX 4080 Super con 16GB GDDR6X ofrece ray tracing en tiempo real y DLSS 3 con generación de frames, permitiendo gaming en 4K a más de 120 FPS.',
      useCases: [
        'Gaming en 4K Ultra',
        'Renderizado 3D profesional',
        'Entrenamiento de IA / ML',
        'Minería de criptomonedas',
      ],
    },
    connection: {
      title: 'CONEXIONES',
      description:
        'La GPU se conecta a la tarjeta madre mediante el slot PCIe x16 y requiere alimentación directa de la fuente de poder.',
      connections: [
        { to: 'Motherboard', type: 'PCIe x16', desc: 'Slot de expansión' },
        { to: 'PSU', type: '12VHPWR', desc: 'Cable de alimentación 450W' },
        { to: 'Monitor', type: 'HDMI/DP', desc: 'Salida de video' },
      ],
    },
  },
  {
    id: 'ssd',
    name: 'SSD',
    shortName: 'SSD',
    label: 'SSD',
    position: [1.0, 0.35, -0.8],
    color: '#8e44ad',
    summary: {
      title: 'ALMACENAMIENTO SSD',
      description:
        'El SSD (Solid State Drive) es un dispositivo de almacenamiento que utiliza memoria flash NAND para guardar datos de forma persistente. A diferencia de los discos duros mecánicos, no tiene partes móviles, lo que lo hace más rápido, silencioso y resistente.',
      features: [
        { icon: 'hard-drive', label: 'Capacidad', value: '500 GB – 4 TB' },
        { icon: 'zap', label: 'Lectura', value: 'Hasta 7,300 MB/s' },
        { icon: 'zap', label: 'Escritura', value: 'Hasta 6,900 MB/s' },
        { icon: 'layers', label: 'NAND', value: 'TLC / QLC 3D NAND' },
        { icon: 'timer', label: 'Latencia', value: '< 20 µs' },
      ],
    },
    specs: {
      title: 'ESPECIFICACIONES TÉCNICAS',
      items: [
        { label: 'Interfaz', value: 'NVMe PCIe 5.0 x4' },
        { label: 'Factor de forma', value: 'M.2 2280' },
        { label: 'Controlador', value: 'Phison E26 / Samsung Elpis' },
        { label: 'DRAM Cache', value: '2 GB DDR4' },
        { label: 'Resistencia', value: '1,200 TBW (2TB)' },
        { label: 'Encriptación', value: 'AES-256 Hardware' },
      ],
    },
    example: {
      title: 'EJEMPLO DE USO',
      description:
        'El Samsung 990 Pro de 2TB con interfaz PCIe 4.0 x4 ofrece velocidades de lectura de 7,450 MB/s, reduciendo los tiempos de carga de juegos y el arranque del sistema a segundos.',
      useCases: [
        'Sistema operativo (boot drive)',
        'Librerías de juegos',
        'Edición de video en tiempo real',
        'Bases de datos de alto rendimiento',
      ],
    },
    connection: {
      title: 'CONEXIONES',
      description:
        'El SSD M.2 se conecta directamente a la tarjeta madre a través del slot M.2, sin necesidad de cables.',
      connections: [
        { to: 'Motherboard', type: 'M.2 Slot', desc: 'Conexión directa PCIe' },
        { to: 'CPU', type: 'PCIe lanes', desc: 'Líneas directas del procesador' },
      ],
    },
  },
  {
    id: 'psu',
    name: 'FUENTE DE PODER',
    shortName: 'PSU',
    label: 'PSU',
    position: [-1.3, 0.3, 0.6],
    color: '#f39c12',
    summary: {
      title: 'FUENTE DE PODER (PSU)',
      description:
        'La PSU (Power Supply Unit) convierte la corriente alterna (AC) del tomacorriente en corriente directa (DC) regulada que necesitan los componentes del PC. Distribuye voltajes de +3.3V, +5V y +12V a través de múltiples rieles.',
      features: [
        { icon: 'zap', label: 'Potencia', value: '750W – 1600W' },
        { icon: 'award', label: 'Certificación', value: '80 Plus Platinum' },
        { icon: 'settings', label: 'Modularidad', value: 'Full Modular' },
        { icon: 'wind', label: 'Ventilación', value: 'Fan 140mm semi-pasivo' },
        { icon: 'shield', label: 'Protecciones', value: 'OVP, UVP, SCP, OTP' },
      ],
    },
    specs: {
      title: 'ESPECIFICACIONES TÉCNICAS',
      items: [
        { label: 'Potencia total', value: '1000W continuo' },
        { label: 'Riel +12V', value: '83.3A (single rail)' },
        { label: 'Eficiencia', value: '92% a 50% carga' },
        { label: 'Factor de forma', value: 'ATX 3.0' },
        { label: 'Conector GPU', value: '12VHPWR nativo' },
        { label: 'Garantía', value: '10 años' },
      ],
    },
    example: {
      title: 'EJEMPLO DE USO',
      description:
        'La Corsair RM1000x con certificación 80 Plus Gold proporciona 1000W de potencia continua con funcionamiento semi-pasivo (ventilador se detiene en baja carga) y cables totalmente modulares.',
      useCases: [
        'PC gaming de gama alta',
        'Workstations con múltiples GPUs',
        'Servidores domésticos 24/7',
        'Sistemas con overclock extremo',
      ],
    },
    connection: {
      title: 'CONEXIONES',
      description:
        'La PSU distribuye energía a todos los componentes mediante cables dedicados para cada uno.',
      connections: [
        { to: 'Motherboard', type: '24-pin ATX', desc: 'Alimentación principal' },
        { to: 'CPU', type: '8-pin EPS', desc: 'Alimentación del procesador' },
        { to: 'GPU', type: '12VHPWR', desc: 'Alimentación tarjeta gráfica' },
        { to: 'SSD/HDD', type: 'SATA Power', desc: 'Alimentación almacenamiento' },
      ],
    },
  },
  {
    id: 'cooler',
    name: 'COOLER',
    shortName: 'COOLER',
    label: 'COOLER',
    position: [0, 1.05, 0.3],
    color: '#3498db',
    summary: {
      title: 'SISTEMA DE REFRIGERACIÓN',
      description:
        'El cooler o sistema de refrigeración mantiene la temperatura del procesador dentro de rangos seguros de operación. Puede ser un disipador de aire con heatpipes y ventiladores, o un sistema de refrigeración líquida (AIO) con radiador.',
      features: [
        { icon: 'thermometer', label: 'TDP soportado', value: 'Hasta 300W' },
        { icon: 'wind', label: 'Ventiladores', value: '2x 140mm PWM' },
        { icon: 'volume-2', label: 'Ruido', value: '20 – 35 dBA' },
        { icon: 'droplets', label: 'Tipo', value: 'AIO Líquida 280mm' },
        { icon: 'settings', label: 'Compatibilidad', value: 'LGA 1700 / AM5' },
      ],
    },
    specs: {
      title: 'ESPECIFICACIONES TÉCNICAS',
      items: [
        { label: 'Tipo radiador', value: 'Aluminio 280mm' },
        { label: 'Bomba', value: 'Asetek Gen 7, 2800 RPM' },
        { label: 'Flujo de aire', value: '73.7 CFM por ventilador' },
        { label: 'Presión estática', value: '2.65 mmH₂O' },
        { label: 'Vida útil', value: '70,000 horas' },
        { label: 'RGB', value: 'ARGB direccionable' },
      ],
    },
    example: {
      title: 'EJEMPLO DE USO',
      description:
        'El NZXT Kraken X63 es un AIO de 280mm que mantiene un i9-14900K a menos de 80°C bajo carga completa, con una pantalla LCD personalizable en la bomba.',
      useCases: [
        'Overclocking de CPU',
        'Sistemas silenciosos (HTPC)',
        'PCs compactos (ITX)',
        'Builds estéticas con RGB',
      ],
    },
    connection: {
      title: 'CONEXIONES',
      description:
        'El cooler se monta directamente sobre el CPU y se conecta al header de ventilador de la tarjeta madre.',
      connections: [
        { to: 'CPU', type: 'Contacto térmico', desc: 'Placa fría + pasta térmica' },
        { to: 'Motherboard', type: 'Fan Header', desc: 'Conector PWM 4-pin' },
        { to: 'Case', type: 'Montaje', desc: 'Tornillos al chasis' },
      ],
    },
  },
  {
    id: 'case',
    name: 'GABINETE',
    shortName: 'CASE',
    label: 'CASE',
    position: [0, 0, 0],
    color: '#7f8c8d',
    summary: {
      title: 'GABINETE (CASE)',
      description:
        'El gabinete o case es la estructura que alberga y protege todos los componentes internos del PC. Proporciona flujo de aire, organización de cables, acceso a puertos frontales y define la estética del sistema.',
      features: [
        { icon: 'box', label: 'Factor de forma', value: 'Mid-Tower ATX' },
        { icon: 'wind', label: 'Ventiladores', value: '3x 120mm incluidos' },
        { icon: 'eye', label: 'Panel lateral', value: 'Vidrio templado' },
        { icon: 'usb', label: 'Panel frontal', value: 'USB-C 3.2 + Audio' },
        { icon: 'ruler', label: 'GPU máxima', value: '380mm de largo' },
      ],
    },
    specs: {
      title: 'ESPECIFICACIONES TÉCNICAS',
      items: [
        { label: 'Dimensiones', value: '465 × 220 × 485 mm' },
        { label: 'Material', value: 'Acero SPCC + Vidrio templado' },
        { label: 'Bahías SSD', value: '2x 2.5" + 2x 3.5"' },
        { label: 'Radiador frontal', value: 'Hasta 360mm' },
        { label: 'Peso', value: '7.8 kg (vacío)' },
        { label: 'Filtros polvo', value: 'Magnéticos removibles' },
      ],
    },
    example: {
      title: 'EJEMPLO DE USO',
      description:
        'El NZXT H7 Flow ofrece excelente flujo de aire con panel frontal perforado, vidrio templado lateral y espacio para radiadores de hasta 360mm, perfecto para builds gaming.',
      useCases: [
        'Gaming builds de alto rendimiento',
        'Workstations profesionales',
        'Builds estéticas con iluminación RGB',
        'Sistemas de refrigeración líquida custom',
      ],
    },
    connection: {
      title: 'CONEXIONES',
      description:
        'El gabinete alberga todos los componentes y conecta el panel frontal a la tarjeta madre.',
      connections: [
        { to: 'Motherboard', type: 'Standoffs', desc: 'Tornillos de montaje' },
        { to: 'Motherboard', type: 'Panel frontal', desc: 'USB, Audio, Power/Reset' },
        { to: 'PSU', type: 'Bahía inferior', desc: 'Compartimento con shroud' },
        { to: 'Ventiladores', type: 'Montaje', desc: 'Slots 120/140mm' },
      ],
    },
  },
];

export const TABS = ['RESUMEN', 'ESPECIFICACIONES', 'EJEMPLO', 'CONEXIÓN'];

export const LESSON_PROGRESS = {
  module: 'BÁSICO',
  current: 1,
  total: 8,
};

