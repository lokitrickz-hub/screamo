export const NAV_LINKS = [
  { label: "Zajęcia", href: "/zajecia" },
  { label: "Kadra", href: "/kadra" },
  { label: "Aktualności", href: "/blog" },
  { label: "O nas", href: "/historia" },
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
    photo: "/images/DSC_4334.JPG",
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
    description: "Wszystko zaczęło się w sieci. Grupa chłopaków z Nowego Sącza i okolic poznała się przez internet, dzieląc rzadką pasję do ekstremalnych ewolucji w powietrzu. Założyli Screamo Trickz w 2011 roku. Pierwszy, historyczny skład tworzyli wspólnie: Andrzej, Sebastian, Kuba, Tomasz oraz Mateusz. Ich pierwszą \"salą treningową\" była zwykła stodoła dziadka Andrzeja Steca. To w tych surowych warunkach, na sianie, bez profesjonalnych mat, wykuwał się ich charakter i unikalny styl łączący sztuki walki, akrobatykę i breakdance.",
    image: "/images/gallery-4.jpg",
    highlight: true,
  },
  {
    label: "Rozwój Zespołu",
    title: "Zjednoczeni przez Tricking",
    description: "Z biegiem lat pierwotny skład ulegał naturalnym zmianom. Część ekipy podążyła nowymi ścieżkami, a przeprowadzki niektórych członków sprawiły, że działalność grupy rozszerzyła się na inne polskie miasta. Setki godzin wspólnych treningów doprowadziły do uformowania nowego, profesjonalnego trzonu zespołu. Do grupy dołączył brat Andrzeja — Rafał, oraz jego rówieśnik i kolega, Dawid. Obaj od podstaw zostali wyszkoleni i wprowadzeni w świat trickingu bezpośrednio przez Andrzeja. Skład uzupełnił również Kamil, który na co dzień mieszka i działa u siebie w Katowicach, ale z pełnym zaangażowaniem dołączył do nowosądeckiej ekipy. W ten sposób uformowała się zgrana, oparta na przyjaźni i braterstwie maszyna, która wkrótce miała zdominować polską scenę Extreme Martial Tricks.",
    highlight: true,
  },
  {
    label: "Złote Lata Zawodów",
    title: "Mistrzowie Polski bez Konkurencji",
    description: "Screamo Trickz zaczęło regularnie stawać na najwyższym stopniu podium. Zdobyli wielokrotne Mistrzostwo Polski w Trickingu, udowadniając swoją bezdyskusyjną dominację. Spektakularnym sukcesem był m.in. start na Mistrzostwach Polski w Radlinie, skąd ekipa występująca w ogromnym składzie przywiozła łącznie aż 38 medali (w tym 14 złotych). Walczyli tam w takich kategoriach jak tor przeszkód, bitwy na tricki czy widowiskowe rozbicia desek.",
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
    description: "Obecnie Screamo Trickz to nie tylko elitarni zawodnicy, ale też wybitni trenerzy i pedagodzy (m.in. Andrzej Stec i Sebastian Michulec, którzy pełnią dziś rolę trenerów Kadry Polski). Ich praca u podstaw przynosi światowe efekty — to pod okiem Andrzeja 10-letnia Anastazja Jurek wywalczyła tytuł Mistrzyni Europy w Trickingu w angielskim Birmingham. Grupa prowadzi również innowacyjne zajęcia akrobatyczne dla młodzieży z mniejszych miejscowości.",
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
