export const NAV_LINKS = [
  { label: "Zajęcia", href: "/zajecia" },
  { label: "Plan zajęć", href: "/plan-zajec" },
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
    photo: "/images/Jondrulla-2.png",
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
  content?: string;
  date: string;
  image: string;
  tag: string;
  youtube?: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    slug: "nowe-nabory-wiosna-2026",
    title: "Nowe nabory — wiosna 2026!",
    excerpt: "Ruszają zapisy do grup początkujących! Pierwsza lekcja próbna gratis. Treningi w trzech lokalizacjach w Nowym Sączu — dla dzieci od 5 lat.",
    content: "Wiosenny nabór 2026 oficjalnie otwarty! Zapraszamy dzieci od 5 roku życia na treningi trickingu i akrobatyki w Nowym Sączu. Zajęcia odbywają się w trzech lokalizacjach: Dunajcowa 60A, JumpMania oraz Elektryk. Pierwsza lekcja próbna jest całkowicie bezpłatna — przyjdź i sprawdź, czy to sport dla Twojego dziecka! Grupy prowadzone przez doświadczonych trenerów z wieloletnim stażem zawodniczym. Zapisy telefonicznie: 514 201 443.",
    date: "2026-03-10",
    image: "/images/zawody-IMG_9093.jpg",
    tag: "Nabór",
  },
  {
    id: 2,
    slug: "31-medali-mistrzostwa-polski",
    title: "31 medali na Mistrzostwach Polski!",
    excerpt: "Zawodnicy ScreamoTrickz pod okiem trenera Andrzeja Steca zdobyli aż 31 medali — 15 złotych, 12 srebrnych i 4 brązowe. Takiego wyniku nie powstydziłaby się żadna profesjonalna kadra!",
    content: "Trickingu nie da się zatrzymać! Zawodnicy ScreamoTrickz z Nowego Sącza pod okiem trenera Andrzeja Steca zdobyli na Mistrzostwach Polski aż 31 medali — w tym 15 złotych, 12 srebrnych i 4 brązowe. Rywalizacja toczyła się w czterech kategoriach: Tricking Battle First Step, Rozbijanie Desek, Run and Fight oraz Tricking Battle Pro. Zawodnicy prezentowali spektakularne kombinacje powietrznych salt, kopnięć i ewolucji. Na treningach wspierała ich Wiktoria Bisaga — wielokrotna Mistrzyni Polski, która jako asystentka trenera wniosła swoje doświadczenie techniczne i zawodnicze do pracy z młodszymi adeptami. Takiego wyniku nie powstydziłaby się żadna profesjonalna kadra sportowa.",
    date: "2025-05-19",
    image: "/images/zawody-IMG_1385.jpg",
    tag: "Zawody",
  },
  {
    id: 3,
    slug: "warsaw-tricking-gathering-2025",
    title: "Warsaw Tricking Gathering 2025",
    excerpt: "ScreamoTrickz na największym evencie trickingowym w Polsce! Trzy dni batli, warsztatów z międzynarodowymi legendami trickingu w Warszawie.",
    content: "Warsaw Tricking Gathering 2025 to trzydniowy event (12–14 września), który odbył się w Arthouse Kolowa w Warszawie. Tricking wrócił do stolicy po 14 latach przerwy! Zawody rozegrano w trzech kategoriach wiekowych: dzieci do 12 lat, młodzież 12–18 lat i open. Warsztaty prowadzili międzynarodowi trenerzy, m.in. Kojo z Wielkiej Brytanii i Johannes z Finlandii. Ekipa ScreamoTrickz wzięła udział w rywalizacji i warsztatach, reprezentując Nowy Sącz na najwyższym poziomie.",
    date: "2025-09-12",
    image: "/images/news-1.jpg",
    tag: "Event",
  },
  {
    id: 4,
    slug: "pytanie-na-sniadanie",
    title: "ScreamoTrickz w Pytanie na Śniadanie!",
    excerpt: "Nasza zawodniczka Anastazja Jurek — mistrzyni Europy w trickingu do lat 12 — wraz z trenerem Andrzejem Stecem gościli w programie TVP. Góralka z pasją podbija Polskę!",
    content: "Anastazja Jurek, mistrzyni Europy w trickingu do lat 12, wraz z trenerem Andrzejem Stecem wystąpili w porannym programie TVP \u201EPytanie na Śniadanie\u201D. Podczas wywiadu opowiedzieli o początkach przygody z trickingiem, sukcesach na arenie międzynarodowej i codziennych treningach. Anastazja zaprezentowała również kilka efektownych trików na żywo, zachwycając widzów i prowadzących program!",
    date: "2025-07-01",
    image: "/images/gallery-6.jpg",
    tag: "Media",
  },
  {
    id: 5,
    slug: "polfinal-mam-talent",
    title: "Półfinał Mam Talent!",
    excerpt: "Screamo Trickz jako pierwsza grupa trickingowa w historii programu Mam Talent! Przebrani za superbohaterów zachwycili jurorów i miliony widzów 12. edycji.",
    content: "2 listopada 2019 roku Screamo Trickz \u2014 Tomasz Trzupek, Andrzej Stec, Kamil Nędza, Rafał Stec i Dawid Kołodziej \u2014 wystąpili w półfinale 12. edycji programu Mam Talent! na antenie TVN. Jako pierwsza grupa trickingowa w historii programu, już na przesłuchaniach (14 września 2019) usłyszeli trzy razy \u201Etak\u201D od jurorów. W półfinale zaprezentowali widowiskowy występ w kostiumach superbohaterów, łącząc tricking, akrobatykę i elementy sztuk walki. Zajęli 5. miejsce w głosowaniu widzów. Ten występ sprawił, że ScreamoTrickz stało się marką rozpoznawalną w całej Polsce.",
    date: "2019-11-02",
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
    label: "2008 r.",
    title: "Od pasji do przełomowego spotkania",
    description: "Historia drużyny zaczęła się zupełnie niepozornie — od pasji kilku chłopaków, którzy trenowali na własną rękę w bardzo skromnych warunkach. Tomek, Sebastian i Jakub skakali po murkach w Nowym Sączu, Mateusz ćwiczył u siebie w Łososinie, a Andrzej stawiał pierwsze kroki w stodole z kolegami. Choć każdy rozwijał się osobno, los ich połączył — w 2008 roku poznali się przez internet i postanowili spotkać się na żywo. Od tego momentu zaczęli regularnie trenować razem, dzielić się wiedzą i wzajemnie motywować.",
    image: "/images/ekipa-z-philem.jpg",
    highlight: true,
  },
  {
    label: "2011 r.",
    title: "Narodziny Screamo TRICKZ",
    description: "Z biegiem lat ich umiejętności rosły w zawrotnym tempie. Dzięki ciężkiej pracy, determinacji i wspólnej pasji osiągnęli bardzo wysoki poziom sprawności. W 2011 roku ich wysiłki zostały sformalizowane — tak powstała drużyna Screamo TRICKZ. Z czasem pierwotny skład ewoluował, a do grupy dołączyli kolejni pasjonaci (m.in. Dawid, Rafał i Kamil), tworząc profesjonalny trzon, który wkrótce miał zdominować polską scenę sztuk ekstremalnych.",
    highlight: true,
  },
  {
    label: "Złote Lata Zawodów",
    title: "Mistrzowie Polski bez Konkurencji",
    description: "Zespół zaczął regularnie stawać na najwyższym stopniu podium. Zdobyli wielokrotne Mistrzostwo Polski w Trickingu, udowadniając swoją bezdyskusyjną dominację. Spektakularnym sukcesem był m.in. start na Mistrzostwach Polski w Radlinie, skąd reprezentacja Screamo Trickz przywiozła łącznie aż 38 medali (w tym 14 złotych), deklasując konkurencję w takich kategoriach jak tor przeszkód, bitwy na tricki czy widowiskowe rozbicia desek.",
    image: "/images/zawody2.jpg",
    highlight: true,
  },
  {
    label: "Scena Ogólnopolska",
    title: "Fenomen w \"Mam Talent\"",
    description: "Nadszedł czas wyjścia z niszy. Screamo Trickz wystąpiło w ogólnopolskim programie \"Mam Talent\" telewizji TVN. Ich naładowany adrenaliną występ castingowy poderwał publiczność z miejsc, zapewniając im trzy razy \"TAK\". W półfinale na żywo grupa wystąpiła w strojach superbohaterów, prezentując ekstremalnie trudne, wręcz przeczące prawom fizyki ewolucje, co na zawsze zapisało się w historii formatu jako pokaz absolutnej lekkości i mistrzostwa.",
    image: "/images/mam-talent-1.jpg",
    highlight: true,
  },
  {
    label: "Nowe Drogi",
    title: "Ewolucja i własny klub",
    description: "Jak to często bywa, z czasem każdy z chłopaków poszedł swoją drogą, rozwijając się w różnych miejscach w Polsce. Andrzej postanowił jednak zostać w Nowym Sączu, gdzie założył profesjonalny klub sportowy ScreamoTrickz. To właśnie tam zaczął na poważnie szkolić dzieci i młodzież, przekazując im swoją wiedzę, doświadczenie i zaszczepiając w nich sportowego ducha.",
    image: "/images/gallery-18.jpg",
    highlight: true,
  },
  {
    label: "Dziś",
    title: "Nowe Pokolenie Mistrzów",
    description: "Dziś praca Andrzeja i innych trenerów przynosi niesamowite efekty. Jego podopieczni osiągają niebywałe sukcesy w Polsce, a także wyraźnie zaznaczają swoją obecność na arenie międzynarodowej (m.in. tytuł Mistrzyni Europy 10-letniej Anastazji Jurek w Birmingham). To żywy dowód na to, że prawdziwa pasja i ciężka praca, które narodziły się w skromnej stodole, mogą prowadzić do wielkich rzeczy.",
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
