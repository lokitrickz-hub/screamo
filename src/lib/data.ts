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
    image: "/images/zawody-IMG_1385.jpg",
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
    image: "/images/zawody-IMG_9093.jpg",
    tag: "Nabór",
  },
  {
    id: 5,
    slug: "pokaz-dni-nowego-sacza",
    title: "Pokaz na Dniach Nowego Sącza",
    excerpt: "ScreamoTrickz zaprezentuje się podczas Dni Nowego Sącza na scenie głównej. Zapraszamy na widowiskowy pokaz akrobatyczny!",
    date: "2025-06-10",
    image: "/images/zawody-IMG_9228.jpg",
    tag: "Event",
  },
  {
    id: 6,
    slug: "polfinal-mam-talent",
    title: "Półfinał Mam Talent!",
    excerpt: "Nasz spektakularny występ w półfinale 12. edycji programu Mam Talent! — moment, w którym ScreamoTrickz stał się marką rozpoznawalną w całej Polsce.",
    date: "2019-11-15",
    image: "/images/mam-talent-3.jpg",
    tag: "TV",
    youtube: "https://www.youtube.com/watch?v=ywHOHj4tLII",
  },
];

export interface TimelineEvent {
  label: string;
  title: string;
  description: string;
  image?: string;
  highlight?: boolean;
}

export const TIMELINE: TimelineEvent[] = [
  {
    label: "2011 r.",
    title: "Cyfrowa Iskra i Stodoła Dziadka",
    description: "Wszystko zaczęło się w sieci. Grupa chłopaków z Nowego Sącza i okolic poznała się przez internet, dzieląc rzadką pasję do ekstremalnych ewolucji w powietrzu. Założyli Screamo Trickz w 2011 roku. Ich pierwszą, historyczną \"salą treningową\" była zwykła stodoła dziadka Andrzeja Steca. To w tych surowych warunkach, na sianie, bez profesjonalnych mat, wykuwał się ich żelazny charakter i unikalny styl łączący sztuki walki, akrobatykę i breakdance.",
    image: "/images/gallery-4.jpg",
    highlight: true,
  },
  {
    label: "Rozwój zespołu",
    title: "Zjednoczeni przez Tricking",
    description: "Katorżnicze treningi doprowadziły do uformowania profesjonalnego trzonu zespołu. Do Andrzeja dołączyli Kamil, Dawid, Rafał i Tomasz. Grupa wyszła poza granice Sądecczyzny, integrując talenty również z Warszawy i Katowic. Tak powstała zgrana maszyna, która wkrótce miała zdominować polską scenę Extreme Martial Tricks.",
    highlight: true,
  },
  {
    label: "Złote Lata Zawodów",
    title: "Mistrzowie Polski bez Konkurencji",
    description: "Screamo Trickz zaczęło regularnie stawać na najwyższym stopniu podium. Zdobyli wielokrotne Mistrzostwo Polski w Trickingu, udowadniając swoją bezdyskusyjną dominację. Spektakularnym sukcesem był m.in. start w Radlinie, skąd ekipa przywiozła łącznie aż 38 medali (w tym 14 złotych) w takich kategoriach jak bitwy na tricki czy rozbicia desek.",
    image: "/images/gallery-22.jpg",
    highlight: true,
  },
  {
    label: "Występ Castingowy",
    title: "Trzy razy \"TAK\" od Polski",
    description: "Nadszedł czas wyjścia z niszy. Screamo Trickz wystąpiło w ogólnopolskim programie \"Mam Talent\" telewizji TVN. Ich castingowy, naładowany adrenaliną występ poderwał publiczność z miejsc, a jury było zachwycone precyzją, dramaturgią i niesamowitym zgraniem drużyny. Bez cienia wątpliwości otrzymali trzy razy \"TAK\", stając się fenomenem w skali całego kraju.",
    image: "/images/mam-talent-1.jpg",
    highlight: true,
  },
  {
    label: "Telewizyjny Półfinał",
    title: "Superbohaterowie w Prime-Time",
    description: "W odcinku półfinałowym emitowanym na żywo, grupa podniosła poprzeczkę jeszcze wyżej, występując w strojach superbohaterów. Zaprezentowali ekstremalnie trudne, wręcz przeczące prawom fizyki ewolucje. Chociaż w głosowaniu widzów zdobyli piąte miejsce i ostatecznie pożegnali się z programem, ich występ zapisał się w historii formatu jako pokaz absolutnej lekkości i mistrzostwa.",
    image: "/images/mam-talent-2.jpg",
    highlight: true,
  },
  {
    label: "Od 27 lipca 2021",
    title: "Od Sal Treningowych po Wielkie Sceny",
    description: "Ogromny kapitał popularności pozwolił grupie na wejście na rynek profesjonalnych usług eventowych. Screamo Trickz stało się pożądaną atrakcją wielkich imprez plenerowych i festiwali. Doskonałym przykładem był ich spektakularny pokaz akrobatyczny uświetniający prestiżowy Festiwal Kultury \"Karpaty Offer\" w rodzinnym Nowym Sączu pod koniec lipca 2021 roku.",
    image: "/images/gallery-18.jpg",
    highlight: true,
  },
  {
    label: "Dziś",
    title: "Nowe Pokolenie Mistrzów",
    description: "Obecnie Screamo Trickz to nie tylko elitarni zawodnicy, ale też wybitni pedagodzy. Trenerzy dzielą się wiedzą w Akademii, wychowując kolejne pokolenia. Ich praca u podstaw przynosi światowe efekty — to pod okiem Andrzeja Steca 10-letnia Anastazja Jurek wywalczyła tytuł Mistrzyni Europy w Trickingu w angielskim Birmingham. Grupa prowadzi również innowacyjne zajęcia akrobatyczne dla młodzieży z mniejszych miejscowości, m.in. w gminie Ochotnica Dolna, krzewiąc kulturę ruchu tam, gdzie jest ona najbardziej potrzebna.",
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
