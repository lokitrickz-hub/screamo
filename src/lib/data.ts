export const NAV_LINKS = [
  { label: "Start", href: "/" },
  { label: "Kadra", href: "/kadra" },
  { label: "Blog", href: "/blog" },
  { label: "Historia", href: "/historia" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export interface Trainer {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  video: string;
  trick: string;
  socials: {
    instagram?: string;
    youtube?: string;
    facebook?: string;
  };
}

export const TRAINERS: Trainer[] = [
  {
    slug: "andrzej-stec",
    name: "Andrzej Stec",
    role: "Założyciel & Główny Trener",
    bio: "Wizjoner i serce ScreamoTrickz. Od 2011 roku wyznacza kierunek rozwoju klubu. Specjalizuje się w technicznych ewolucjach i metodyce nauczania trickingu od podstaw. To on przeprowadził grupę z podwórkowych treningów na ogólnopolską scenę.",
    photo: "/images/trainer-andrzej.jpg",
    video: "/videos/andrzej-trick.mp4",
    trick: "Corkscrew 720",
    socials: {
      instagram: "https://www.instagram.com/trener_andrzej_stec/",
      youtube: "https://www.youtube.com/@Trener_Andrzej_Stec",
      facebook: "https://www.facebook.com/andrzej.stec.16",
    },
  },
  {
    slug: "mariusz-piskorz",
    name: "Mariusz Piskorz",
    role: "Drugi Trener",
    bio: "Trener z wieloletnim doświadczeniem i niebywałym podejściem do dzieci. Na zajęciach u Mariusza zapomnij o nudzie! Jest wesoło, ale zawsze konkretnie.",
    photo: "/images/trainer-mariusz.jpg",
    video: "/videos/mariusz-trick.mp4",
    trick: "Butterfly Twist",
    socials: {
      instagram: "https://www.instagram.com/piskorzmariusz/",
      facebook: "https://www.facebook.com/mariusz.piszkorz",
    },
  },
  {
    slug: "wiktoria-bisaga",
    name: "Wiktoria Bisaga",
    role: "Instruktorka & Mistrzyni",
    bio: "Wielokrotna Mistrzyni Polski i jedna z najbardziej utytułowanych zawodniczek w kraju. Udowadnia, że tricking to sport bez barier. W klubie zajmuje się szkoleniem nowych pokoleń, łącząc surową dyscyplinę sportową z pasją do widowiskowych pokazów.",
    photo: "/images/trainer-wiktoria.jpg",
    video: "/videos/wiktoria-trick.mp4",
    trick: "Aerial Cartwheel",
    socials: {
      instagram: "https://www.instagram.com/bisagusia/",
      facebook: "https://www.facebook.com/wiktoria.bisaga.71",
    },
  },
];

export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tag: string;
  youtube?: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    slug: "warsaw-tricking-gathering-2025",
    title: "Warsaw Tricking Gathering 2025",
    excerpt: "12-14 września 2025 — ScreamoTrickz na największym evencie trickingowym w Polsce! Trzy dni pełne batli, warsztatów i niesamowitej energii w Warszawie.",
    date: "2025-09-14",
    image: "/images/news-1.jpg",
    tag: "Event",
  },
  {
    id: 2,
    slug: "31-medali-mistrzostwa-polski",
    title: "31 medali na Mistrzostwach Polski!",
    excerpt: "ScreamoTrickz dominuje podium w kategoriach Tricking Battle i Rozbijanie Desek. Rekordowa liczba medali potwierdza — Nowy Sącz jest stolicą trickingu w Polsce!",
    date: "2025-03-15",
    image: "/images/gallery-22.jpg",
    tag: "Zawody",
  },
  {
    id: 3,
    slug: "pytanie-na-sniadanie",
    title: "ScreamoTrickz w Pytanie na Śniadanie!",
    excerpt: "Nasza zawodniczka Anastazja Jurek — mistrzyni Europy w trickingu do lat 12 — wraz z trenerem Andrzejem Stecem gościli w programie TVP. Góralka z pasją podbija Polskę!",
    date: "2025-07-01",
    image: "/images/gallery-6.jpg",
    tag: "Media",
  },
  {
    id: 4,
    slug: "nowe-nabory-jumpmania",
    title: "Nowe nabory w JumpManii",
    excerpt: "Rozpoczynamy zapisy do grup początkujących w JumpManii. Zrób swój pierwszy krok w stronę grawitacji — treningi dla każdego wieku!",
    date: "2025-04-01",
    image: "/images/gallery-12.jpg",
    tag: "Nabór",
  },
  {
    id: 5,
    slug: "pokaz-dni-nowego-sacza",
    title: "Pokaz na Dniach Nowego Sącza",
    excerpt: "ScreamoTrickz zaprezentuje się podczas Dni Nowego Sącza na scenie głównej. Zapraszamy na widowiskowy pokaz akrobatyczny!",
    date: "2025-06-10",
    image: "/images/gallery-17.jpg",
    tag: "Event",
  },
  {
    id: 6,
    slug: "polfinal-mam-talent",
    title: "Półfinał Mam Talent!",
    excerpt: "Nasz spektakularny występ w półfinale 12. edycji programu Mam Talent! — moment, w którym ScreamoTrickz stał się marką rozpoznawalną w całej Polsce.",
    date: "2019-11-15",
    image: "/images/gallery-22.jpg",
    tag: "TV",
    youtube: "https://www.youtube.com/watch?v=ywHOHj4tLII",
  },
];

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  image?: string;
  highlight?: boolean;
}

export const TIMELINE: TimelineEvent[] = [
  {
    year: 2011,
    title: "Wielki Wybuch — Początki",
    description: "Grupa powstała z czystej pasji do ruchu. Andrzej Stec, zainspirowany filmami w internecie, zaczął gromadzić wokół siebie ludzi, którzy nie bali się upadać, by ostatecznie wzbić się w górę. Spotykali się na trawie, piasku i starych materacach, budując fundamenty pod to, co dziś znamy jako ScreamoTrickz.",
    image: "/images/gallery-4.jpg",
    highlight: true,
  },
  {
    year: 2014,
    title: "Budowanie Autorytetu",
    description: "Lata intensywnych treningów i pierwszych wyjazdów na ogólnopolskie zawody. Grupa zaczęła być rozpoznawalna dzięki unikalnemu stylowi, łączącemu siłę z niesamowitą płynnością ruchu.",
    highlight: true,
  },
  {
    year: 2019,
    title: "Przełom w Mam Talent!",
    description: "ScreamoTrickz staje się marką ogólnopolską. Po spektakularnych występach w 12. edycji programu Mam Talent!, grupa dociera do półfinału, zdobywając uznanie jury i tysięcy widzów przed telewizorami. To wtedy narodziła się idea sformalizowania grupy.",
    image: "/images/gallery-22.jpg",
    highlight: true,
  },
  {
    year: 2020,
    title: "Narodziny UKS ScreamoTrickz",
    description: "Oficjalne zarejestrowanie jako Uczniowski Klub Sportowy. Rozpoczęcie systematycznej pracy z dziećmi i młodzieżą w Nowym Sączu. Domem treningowym staje się Park Trampolin JumpMania.",
    image: "/images/gallery-18.jpg",
    highlight: true,
  },
  {
    year: 2024,
    title: "Dominacja na Arenie Narodowej",
    description: "Klub staje się potęgą w polskim trickingu. Podczas ostatnich Mistrzostw Polski zawodnicy ScreamoTrickz zdobyli rekordową liczbę 31 medali, potwierdzając, że Nowy Sącz jest stolicą tej dyscypliny w Polsce.",
    image: "/images/news-1.jpg",
    highlight: true,
  },
];

export const SOCIAL_LINKS = {
  instagram: {
    url: "https://www.instagram.com/screamotrickz.official/",
    handle: "@screamotrickz.official",
  },
  youtube: {
    url: "https://www.youtube.com/@ScreamoTrickz",
    handle: "@ScreamoTrickz",
  },
  facebook: {
    url: "https://www.facebook.com/ScreamoTrickz",
    handle: "ScreamoTrickz",
  },
} as const;
