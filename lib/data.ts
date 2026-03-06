export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
  description: string;
  inStock: boolean;
  tags: string[];
}

export interface Story {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorImage: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "CarpMaster Pro 12ft",
    category: "Wędki",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 284,
    badge: "BESTSELLER",
    image: "https://picsum.photos/seed/rod1/600/500",
    description:
      "Profesjonalna wędka feederowa z blankiem z nano-węgla. Wyjątkowa czułość do wykrywania najlżejszych brań.",
    inStock: true,
    tags: ["karp", "feeder", "włókno węglowe"],
  },
  {
    id: 2,
    name: "UltraLight Spinning Reel 3000",
    category: "Kołowrotki",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 156,
    badge: "SALE",
    image: "https://picsum.photos/seed/reel2/600/500",
    description:
      "9+1 łożysk kulkowych, nieskończony system anty-skrętu, niezwykle płynny zwijacz do całodziennego wędkowania.",
    inStock: true,
    tags: ["spinning", "ultralight", "okoń"],
  },
  {
    id: 3,
    name: "Pro Carp Feeder Rig Set (30szt)",
    category: "Akcesoria",
    price: 24.99,
    rating: 4.8,
    reviews: 421,
    image: "https://picsum.photos/seed/tackle3/600/500",
    description:
      "Kompletny zestaw montaży feederowych z koszyczkami method inline, przyponami hair rig i akcesoriami quick-change.",
    inStock: true,
    tags: ["montaż", "feeder", "karp"],
  },
  {
    id: 4,
    name: "Night Predator Headlamp Pro",
    category: "Wyposażenie",
    price: 34.99,
    rating: 4.6,
    reviews: 98,
    image: "https://picsum.photos/seed/light4/600/500",
    description:
      "Czołówka 450 lumenów, wodoodporna, z trybem noktowizji czerwonej. Czas pracy baterii 20 godzin.",
    inStock: true,
    tags: ["noc", "led", "wodoodporny"],
  },
  {
    id: 5,
    name: "Carbon Float Set (12szt)",
    category: "Akcesoria",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.5,
    reviews: 67,
    badge: "SALE",
    image: "https://picsum.photos/seed/float5/600/500",
    description:
      "Wysokowidoczne spławiki węglowe do rzek i wód stojących. W zestawie wagglery insert i bodied.",
    inStock: true,
    tags: ["spławik", "włókno węglowe", "match"],
  },
  {
    id: 6,
    name: "XL Boilie Mix - Truskawka 5kg",
    category: "Przynęty",
    price: 29.99,
    rating: 4.9,
    reviews: 509,
    badge: "TOP RATED",
    image: "https://picsum.photos/seed/bait6/600/500",
    description:
      "Wysokobiałkowa baza do kulek z ekstraktem truskawkowym. Sprawdzony atraktor karpi we wszystkich warunkach.",
    inStock: true,
    tags: ["boilie", "karp", "przynęta"],
  },
  {
    id: 7,
    name: "Titanium Wide Gape Hook Set",
    category: "Akcesoria",
    price: 14.99,
    rating: 4.8,
    reviews: 334,
    image: "https://picsum.photos/seed/hook7/600/500",
    description:
      "Chemicznie ostrzone haczyki tytanowe, wzór wide gape. Rozmiary 4-12 w zestawie.",
    inStock: true,
    tags: ["haczyk", "tytan", "karp"],
  },
  {
    id: 8,
    name: "Teleskopowa Podbierak 1.8m",
    category: "Wyposażenie",
    price: 59.99,
    rating: 4.7,
    reviews: 145,
    image: "https://picsum.photos/seed/net8/600/500",
    description:
      "Siatka do podbieraka XXL z teleskopowym trzonkiem węglowym. Rozkłada się do 1.8m.",
    inStock: true,
    tags: ["podbierak", "włókno węglowe", "karp"],
  },
  {
    id: 9,
    name: "Skrzynka Wędkarska XL - 9 Tacek",
    category: "Wyposażenie",
    price: 44.99,
    originalPrice: 64.99,
    rating: 4.6,
    reviews: 189,
    badge: "SALE",
    image: "https://picsum.photos/seed/box9/600/500",
    description:
      "Modułowy system przechowywania z 9 regulowanymi tackami, uszczelnieniem wodoodpornym i paskiem na ramię.",
    inStock: true,
    tags: ["schowek", "skrzynka", "organizacja"],
  },
  {
    id: 10,
    name: "FeederOn Pro Namiot 2-osobowy",
    category: "Namioty",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.9,
    reviews: 78,
    badge: "NEW",
    image: "https://picsum.photos/seed/bivvy10/600/500",
    description:
      "Namiot hubowy 2-osobowy z podłogą, okryciem zewnętrznym i słupkami burzowymi. Hydrostatic head 10 000mm.",
    inStock: false,
    tags: ["namiot", "schronienie", "karp"],
  },
  {
    id: 11,
    name: "Bezprzewodowy Sygnalizator Brań (4+1)",
    category: "Elektronika",
    price: 129.99,
    rating: 4.8,
    reviews: 212,
    badge: "NEW",
    image: "https://picsum.photos/seed/alarm11/600/500",
    description:
      "4 sygnalizatory + odbiornik z zasięgiem 150m, wibracja, indywidualna regulacja głośności i tonu.",
    inStock: true,
    tags: ["sygnalizator", "bezprzewodowy", "elektronika"],
  },
  {
    id: 12,
    name: "Baitrunner Free Spool 6000",
    category: "Kołowrotki",
    price: 119.99,
    rating: 4.8,
    reviews: 267,
    image: "https://picsum.photos/seed/reel12/600/500",
    description:
      "Ciężki kołowrotek baitrunner z 10+1 łożyskami, hamulec 25lb, szpula quick-clip.",
    inStock: true,
    tags: ["baitrunner", "karp", "kołowrotek"],
  },
];

export const categories = [
  {
    name: "Wędki",
    count: 48,
    image: "https://picsum.photos/seed/catrod/400/300",
    icon: "🎣",
  },
  {
    name: "Kołowrotki",
    count: 36,
    image: "https://picsum.photos/seed/catreel/400/300",
    icon: "⚙️",
  },
  {
    name: "Przynęty",
    count: 94,
    image: "https://picsum.photos/seed/catbait/400/300",
    icon: "🪱",
  },
  {
    name: "Akcesoria",
    count: 215,
    image: "https://picsum.photos/seed/cattackle/400/300",
    icon: "🎯",
  },
  {
    name: "Wyposażenie",
    count: 127,
    image: "https://picsum.photos/seed/catacc/400/300",
    icon: "🔧",
  },
  {
    name: "Namioty",
    count: 22,
    image: "https://picsum.photos/seed/catshelter/400/300",
    icon: "⛺",
  },
];

export const stories: Story[] = [
  {
    id: 1,
    title: "Top 10 Miejsc na Karpia, Które Musisz Odwiedzić w Tym Sezonie",
    excerpt:
      "Odkrywamy najbardziej spektakularne łowiska karpiowe w Europie – od mglistych jezior Polski po krystalicznie czyste rzeki Austrii.",
    category: "Destynacje",
    date: "4 marca 2026",
    readTime: "8 min czytania",
    image: "https://picsum.photos/seed/story1/1200/700",
    author: "Marek Kowalski",
    authorImage: "https://picsum.photos/seed/author1/100/100",
    featured: true,
  },
  {
    id: 2,
    title: "Wędkowanie Nocne: Profesjonalne Porady na Sesje Po Zmroku",
    excerpt:
      "Odkryj sekrety, dzięki którym zawodowi wędkarze łowią trofea pod gwiazdami. Od ustawienia sprzętu po strategię.",
    category: "Techniki",
    date: "28 lutego 2026",
    readTime: "6 min czytania",
    image: "https://picsum.photos/seed/story2/800/500",
    author: "Anna Wiśniewska",
    authorImage: "https://picsum.photos/seed/author2/100/100",
  },
  {
    id: 3,
    title: "Idealny Montaż Feederowy: Kompletny Przewodnik Krok po Kroku",
    excerpt:
      "Od podstawowych koszyczków method po zestawy inline – opanuj sztukę wędkowania feederowego z naszym kompleksowym poradnikiem.",
    category: "Poradniki",
    date: "20 lutego 2026",
    readTime: "10 min czytania",
    image: "https://picsum.photos/seed/story3/800/500",
    author: "Piotr Zając",
    authorImage: "https://picsum.photos/seed/author3/100/100",
  },
  {
    id: 4,
    title: "Sezon Wiosenny 2026: Jakie Ryby Są Aktywne i Gdzie Je Znaleźć",
    excerpt:
      "Ostateczny przewodnik po wędkarstwie wiosennym. Temperatura wody, wzorce żerowania i lokalizacje hot-spotów.",
    category: "Sezonowe",
    date: "15 lutego 2026",
    readTime: "7 min czytania",
    image: "https://picsum.photos/seed/story4/800/500",
    author: "Tomasz Nowak",
    authorImage: "https://picsum.photos/seed/author4/100/100",
  },
  {
    id: 5,
    title: "Test Sprzętu: Wędka CarpMaster Pro – Czy Warta Swojej Ceny?",
    excerpt:
      "Testowaliśmy CarpMaster Pro przez 6 miesięcy w różnych warunkach i na różnych łowiskach. Oto nasz werdykt.",
    category: "Recenzje",
    date: "8 lutego 2026",
    readTime: "9 min czytania",
    image: "https://picsum.photos/seed/story5/800/500",
    author: "Kamil Dąbrowski",
    authorImage: "https://picsum.photos/seed/author5/100/100",
  },
  {
    id: 6,
    title: "Wywiad: W Głowie Wędkarza Zawodowego",
    excerpt:
      "Rozmawiamy z wielokrotnym mistrzem Polski Rafałem Mrózem o jego podejściu, mentalności i wyborze sprzętu.",
    category: "Wywiady",
    date: "30 stycznia 2026",
    readTime: "12 min czytania",
    image: "https://picsum.photos/seed/story6/800/500",
    author: "Redakcja FeederOn",
    authorImage: "https://picsum.photos/seed/author6/100/100",
  },
];

export const stats = [
  { value: "500+", label: "Produktów" },
  { value: "10K+", label: "Wędkarzy" },
  { value: "98%", label: "Satysfakcji" },
  { value: "24/7", label: "Wsparcie" },
];

export const teamMembers = [
  {
    name: "Rafał Kowalczyk",
    role: "Założyciel & Mistrz Wędkarstwa",
    image: "https://picsum.photos/seed/team1/300/300",
    bio: "Ponad 25 lat na łowisku. Stworzył FeederOn, żeby sprzęt pro był dostępny dla każdego wędkarza.",
  },
  {
    name: "Anna Pietrzak",
    role: "Szef Testów Sprzętu",
    image: "https://picsum.photos/seed/team2/300/300",
    bio: "Była mistrzyni kraju. Testuje każdy produkt w prawdziwych warunkach zanim trafi na półkę.",
  },
  {
    name: "Marcin Wróbel",
    role: "Digital & Społeczność",
    image: "https://picsum.photos/seed/team3/300/300",
    bio: "Łączy naszą społeczność wędkarzy i dba o to, żeby każda historia była opowiedziana.",
  },
];
