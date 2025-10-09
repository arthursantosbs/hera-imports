
export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  description: string
  features: string[]
  specifications: Record<string, string>
  gallery: string[]
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone Premium X1',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Eletrônicos',
    rating: 4.8,
    description: 'Smartphone de última geração com câmera profissional e performance excepcional.',
    features: [
      'Câmera tripla 108MP',
      'Tela AMOLED 6.7"',
      'Bateria 5000mAh',
      'Carregamento rápido 65W',
      'Processador Octa-core'
    ],
    specifications: {
      'Tela': '6.7" AMOLED 120Hz',
      'Processador': 'Snapdragon 8 Gen 2',
      'RAM': '12GB',
      'Armazenamento': '256GB',
      'Bateria': '5000mAh',
      'Sistema': 'Android 14'
    },
    gallery: [
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '2',
    name: 'Fones Premium Wireless',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Áudio',
    rating: 4.9,
    description: 'Fones de ouvido sem fio com cancelamento de ruído ativo e qualidade de som superior.',
    features: [
      'Cancelamento de ruído ativo',
      'Bateria 30h de duração',
      'Bluetooth 5.3',
      'Driver de 40mm',
      'Controles touch'
    ],
    specifications: {
      'Tipo': 'Over-ear',
      'Conectividade': 'Bluetooth 5.3',
      'Bateria': '30 horas',
      'Driver': '40mm dinâmico',
      'Peso': '250g',
      'Carregamento': 'USB-C'
    },
    gallery: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '3',
    name: 'Relógio Inteligente Pro',
    price: 1299,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wearables',
    rating: 4.7,
    description: 'Smartwatch avançado com monitoramento de saúde completo e design premium.',
    features: [
      'Monitor cardíaco 24/7',
      'GPS integrado',
      'Resistente à água',
      'Tela Always-On',
      'Bateria 7 dias'
    ],
    specifications: {
      'Tela': '1.4" AMOLED',
      'Bateria': '7 dias',
      'Resistência': 'IP68',
      'Sensores': 'Cardíaco, GPS, Acelerômetro',
      'Compatibilidade': 'iOS/Android',
      'Material': 'Alumínio Premium'
    },
    gallery: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '4',
    name: 'Notebook Gaming Elite',
    price: 4999,
    originalPrice: 5999,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'Computadores',
    rating: 4.9,
    description: 'Notebook gamer de alta performance com placa de vídeo dedicada e tela 144Hz.',
    features: [
      'RTX 4060 8GB',
      'Intel i7 13ª geração',
      'Tela 15.6" 144Hz',
      'SSD 1TB NVMe',
      'RGB Backlight'
    ],
    specifications: {
      'Processador': 'Intel Core i7-13700H',
      'Placa de Vídeo': 'RTX 4060 8GB',
      'RAM': '16GB DDR5',
      'Armazenamento': '1TB SSD NVMe',
      'Tela': '15.6" Full HD 144Hz',
      'Sistema': 'Windows 11 Home'
    },
    gallery: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '5',
    name: 'Câmera Profissional 4K',
    price: 3299,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fotografia',
    rating: 4.8,
    description: 'Câmera mirrorless profissional com gravação 4K e sistema de foco avançado.',
    features: [
      'Sensor APS-C 24MP',
      'Gravação 4K 60fps',
      'Estabilização 5 eixos',
      'Foco automático híbrido',
      'Tela articulada touch'
    ],
    specifications: {
      'Sensor': 'APS-C 24.2MP',
      'Gravação': '4K 60fps',
      'ISO': '100-32000',
      'Estabilização': '5 eixos',
      'Bateria': '500 fotos',
      'Conectividade': 'Wi-Fi, Bluetooth, USB-C'
    },
    gallery: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '6',
    name: 'Tablet Design Pro',
    price: 1899,
    originalPrice: 2299,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tablets',
    rating: 4.6,
    description: 'Tablet profissional ideal para design e criatividade com suporte à caneta stylus.',
    features: [
      'Tela 12.9" Liquid Retina',
      'Suporte Apple Pencil',
      'Processador M1',
      'Armazenamento 256GB',
      'Câmeras duplas'
    ],
    specifications: {
      'Tela': '12.9" Liquid Retina',
      'Processador': 'Apple M1',
      'RAM': '8GB',
      'Armazenamento': '256GB',
      'Câmera': 'Dupla 12MP + 10MP',
      'Bateria': '10 horas'
    },
    gallery: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category)
}

export const getCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))]
}
