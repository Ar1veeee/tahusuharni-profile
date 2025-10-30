import type { Product } from '../types';
import tahuPutih from '../assets/tahu-putih.png';
import tahuGoreng from '../assets/tahu-goreng.png';
import tempe from '../assets/tempe.png'

export const products: Product[] = [
  {
    id: 1,
    name: 'Tahu Putih Segar',
    price: 500,
    image: tahuPutih,
    description: 'Tahu lembut buatan tangan tanpa bahan pengawet, cocok untuk digoreng, ditumis, atau diolah sesuai selera.',
    type: 'Tahu'
  },
  { 
    id: 2, 
    name: 'Tahu Goreng', 
    price: 500, 
    image: tahuGoreng, 
    description: 'Tahu matang siap santap, digoreng dengan minyak bersih hingga keemasan, gurih di luar, lembut di dalam.', 
    type: 'Tahu'
  },
  { 
    id: 3, 
    name: 'Tempe Buntelan Daun Pisang', 
    price: 6000, 
    image: tempe,
    description: 'tempe tradisional dibungkus daun pisang segar untuk menjaga aroma alami dan cita rasa khas Jawa. diproses dengan cara fermentasi alami menggunakan ragi pilihan', 
    type: 'Tempe'
  },
];