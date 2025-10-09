
import { Product } from '../types'; // Supondo que você tenha um arquivo de tipos

const products: Product[] = [
  {
    id: 1,
    name: 'Lost Mary MO 20K',
    price: 120.00,
    originalPrice: 140.00,
    image: 'https://i.imgur.com/C6jNnUW.png', // Substitua pela imagem correta
    gallery: [
      'https://i.imgur.com/C6jNnUW.png',
    
    ],
    category: 'Descartável',
    rating: 4.9,
    description: 'O Lost Mary MO20000 Pro oferece uma tela de animação HD, bateria de 800mAh e potência ajustável de 13-25W.',
    inStock: true,
    features: [
      "Até 20.000 Puffs",
      "Tela de Animação HD",
      "Potência Ajustável (13-25W)",
      "Bateria de 800mAh",
      "Recarregável via USB-C"
    ],
    specifications: {
      "Capacidade de E-líquido": "18ml",
      "Força da Nicotina": "5% (50mg)",
      "Bobina": "Dual Mesh 0.9ohm"
    },
    flavors: [
      { name: 'Mexican Mango', stock: 2 },
      { name: 'Ice Mint', stock: 2 },
      { name: 'Watermelon Ice', stock: 2 }
    ]
  },
  {
    id: 2,
    name: 'ELFBAR BC 15k',
    price: 110.00,
    originalPrice: 130.00,
    image: 'https://i.imgur.com/PECB2n4.png', // Substitua pela imagem correta
    gallery: [
      'https://i.imgur.com/PECB2n4.png',
    ],
    category: 'Descartável',
    rating: 4.8,
    description: 'O ELFBAR BC15000 é um descartável de longa duração com design ergonômico e sabores intensos.',
    inStock: true,
    features: [
      "Até 15.000 Puffs",
      "Design Ergonômico",
      "Indicador de Bateria e Líquido",
      "Sabores Intensos",
      "Recarregável via USB-C"
    ],
    specifications: {
      "Capacidade de E-líquido": "18ml",
      "Força da Nicotina": "5% (50mg)",
      "Bateria": "650mAh"
    },
    flavors: [
      { name: 'Sour Apple Ice', stock: 1 },
      { name: 'Passion Fruit Orange Guava', stock: 1 }
    ]
  }
];

export const getProducts = () => products;

export const getProductById = (id: string) => {
  return products.find(p => p.id === parseInt(id, 10));
};