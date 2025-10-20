
import { Product } from '../types'; // Supondo que você tenha um arquivo de tipos

const publicImage = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;

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
    inStock: false,
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
      { name: 'Mexican Mango', stock: 0 },
      { name: 'Ice Mint', stock: 0 },
      { name: 'Watermelon Ice', stock: 0 }
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
    inStock: false,
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
      { name: 'Sour Apple Ice', stock: 0 },
      { name: 'Passion Fruit Orange Guava', stock: 0 }
    ]
  },
  {
    id: 3,
    name: 'Ignite V120',
    price: 150.00,
    originalPrice: 169.90,
    image: publicImage('ignite-v120.jpg'),
    gallery: [
      publicImage('ignite-v120.jpg')
    ],
    category: 'Descartável',
    rating: 4.9,
    description: 'O Ignite V120 entrega vapor consistente com design compacto, bateria reforçada e uma seleção vibrante de sabores.',
    inStock: true,
    features: [
      'Até 12.000 puffs',
      'Bobina mesh dupla para sabor intenso',
      'Bateria recarregável de 800mAh',
      'Indicador de nível LED',
      'Porta USB-C para recarga rápida'
    ],
    specifications: {
      'Capacidade de E-líquido': '18ml',
      'Força da Nicotina': '5% (50mg)',
      'Faixa de Potência': '12W - 18W'
    },
    flavors: [
  { name: 'Straw Nana', stock: 1 },
  { name: 'Green Apple', stock: 1 },
  { name: 'Cactus', stock: 1 }
    ]
  }
];

export const getProducts = () => products;

export const getProductById = (id: string) => {
  return products.find(p => p.id === parseInt(id, 10));
};