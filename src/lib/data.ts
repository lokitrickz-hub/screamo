export const NAV_LINKS = [
  { label: "Start", href: "#hero" },
  { label: "O nas", href: "#about" },
  { label: "Kadra", href: "#masters" },
  { label: "Aktualności", href: "#news" },
  { label: "Galeria", href: "#gallery" },
  { label: "Historia", href: "/historia" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export interface Trainer {
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
    name: "Mariusz Piskorz",
    role: "Drugi Trener",
    bio: "Filary techniczne klubu. Ekspert od przygotowania siłowego i akrobatycznego. Jego doświadczenie pozwala zawodnikom bezpiecznie przesuwać granice swoich możliwości fizycznych. Słynie z dbałości o czystość techniki każdego kicka i twista.",
    photo: "/images/trainer-mariusz.jpg",
    video: "/videos/mariusz-trick.mp4",
    trick: "Butterfly Twist",
    socials: {
      instagram: "https://www.instagram.com/piskorzmariusz/",
      facebook: "https://www.facebook.com/mariusz.piszkorz",
    },
  },
  {
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
    title: "Warsaw Tricking Gathering 2025",
    excerpt: "12-14 września 2025 — ScreamoTrickz na największym evencie trickingowym w Polsce! Trzy dni pełne batli, warsztatów i niesamowitej energii w Warszawie.",
    date: "2025-09-14",
    image: "/images/news-1.jpg",
    tag: "Event",
  },
  {
    id: 2,
    title: "31 medali na Mistrzostwach Polski!",
    excerpt: "ScreamoTrickz dominuje podium w kategoriach Tricking Battle i Rozbijanie Desek. Rekordowa liczba medali potwierdza — Nowy Sącz jest stolicą trickingu w Polsce!",
    date: "2025-03-15",
    image: "/images/gallery-22.jpg",
    tag: "Zawody",
  },
  {
    id: 3,
    title: "ScreamoTrickz w Pytanie na Śniadanie!",
    excerpt: "Nasza zawodniczka Anastazja Jurek — mistrzyni Europy w trickingu do lat 12 — wraz z trenerem Andrzejem Stecem gościli w programie TVP. Góralka z pasją podbija Polskę!",
    date: "2025-07-01",
    image: "/images/gallery-6.jpg",
    tag: "Media",
  },
  {
    id: 4,
    title: "Nowe nabory w JumpManii",
    excerpt: "Rozpoczynamy zapisy do grup początkujących w JumpManii. Zrób swój pierwszy krok w stronę grawitacji — treningi dla każdego wieku!",
    date: "2025-04-01",
    image: "/images/gallery-12.jpg",
    tag: "Nabór",
  },
  {
    id: 5,
    title: "Pokaz na Dniach Nowego Sącza",
    excerpt: "ScreamoTrickz zaprezentuje się podczas Dni Nowego Sącza na scenie głównej. Zapraszamy na widowiskowy pokaz akrobatyczny!",
    date: "2025-06-10",
    image: "/images/gallery-17.jpg",
    tag: "Event",
  },
  {
    id: 6,
    title: "Półfinał Mam Talent!",
    excerpt: "Nasz spektakularny występ w półfinale 12. edycji programu Mam Talent! — moment, w którym ScreamoTrickz stał się marką rozpoznawalną w całej Polsce.",
    date: "2019-11-15",
    image: "/images/gallery-22.jpg",
    tag: "TV",
    youtube: "https://www.youtube.com/watch?v=ywHOHj4tLII",
  },
];

export interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail: string;
  alt: string;
  span?: "wide" | "tall" | "large";
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, type: "image", src: "/images/gallery-1.jpg", thumbnail: "/images/gallery-1.jpg", alt: "Akrobatyka na scenie", span: "tall" },
  { id: 2, type: "image", src: "/images/gallery-2.jpg", thumbnail: "/images/gallery-2.jpg", alt: "Pokaz trickingowy" },
  { id: 3, type: "image", src: "/images/gallery-3.jpg", thumbnail: "/images/gallery-3.jpg", alt: "Zawodnik w akcji", span: "tall" },
  { id: 4, type: "image", src: "/images/gallery-4.jpg", thumbnail: "/images/gallery-4.jpg", alt: "Trening akrobatyczny", span: "wide" },
  { id: 5, type: "image", src: "/images/gallery-5.jpg", thumbnail: "/images/gallery-5.jpg", alt: "Skok akrobatyczny" },
  { id: 6, type: "image", src: "/images/gallery-6.jpg", thumbnail: "/images/gallery-6.jpg", alt: "Trening grupowy", span: "large" },
  { id: 7, type: "image", src: "/images/gallery-7.jpg", thumbnail: "/images/gallery-7.jpg", alt: "Zawody akrobatyczne" },
  { id: 8, type: "image", src: "/images/gallery-8.jpg", thumbnail: "/images/gallery-8.jpg", alt: "Pokaz na scenie", span: "tall" },
  { id: 9, type: "image", src: "/images/gallery-9.jpg", thumbnail: "/images/gallery-9.jpg", alt: "Zawodnik ScreamoTrickz" },
  { id: 10, type: "image", src: "/images/gallery-10.jpg", thumbnail: "/images/gallery-10.jpg", alt: "Trening akrobatyczny", span: "wide" },
  { id: 11, type: "image", src: "/images/gallery-11.jpg", thumbnail: "/images/gallery-11.jpg", alt: "Pokaz trickingowy" },
  { id: 12, type: "image", src: "/images/gallery-12.jpg", thumbnail: "/images/gallery-12.jpg", alt: "Zawodnik w powietrzu" },
  { id: 13, type: "image", src: "/images/gallery-13.jpg", thumbnail: "/images/gallery-13.jpg", alt: "Drużyna ScreamoTrickz", span: "wide" },
  { id: 14, type: "image", src: "/images/gallery-14.jpg", thumbnail: "/images/gallery-14.jpg", alt: "Akrobatyka sportowa" },
  { id: 15, type: "image", src: "/images/gallery-15.jpg", thumbnail: "/images/gallery-15.jpg", alt: "Screeny z treningu", span: "wide" },
  { id: 16, type: "image", src: "/images/gallery-16.jpg", thumbnail: "/images/gallery-16.jpg", alt: "Screeny z treningu" },
  { id: 17, type: "image", src: "/images/gallery-17.jpg", thumbnail: "/images/gallery-17.jpg", alt: "Zdjęcie klubowe", span: "tall" },
  { id: 18, type: "image", src: "/images/gallery-18.jpg", thumbnail: "/images/gallery-18.jpg", alt: "Nastka — zawodniczka" },
  { id: 22, type: "image", src: "/images/gallery-22.jpg", thumbnail: "/images/gallery-22.jpg", alt: "Zawody — drużyna", span: "tall" },
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
