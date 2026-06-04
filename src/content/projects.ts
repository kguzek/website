interface TranslatedString {
  en: string;
  pl: string;
}

export interface ProjectImage {
  id: number;
  alt: string;
  url: string;
  width: number;
  height: number;
  filename: string;
  mimeType: string;
  filesize: number;
}

interface ProjectCategory {
  id: number;
  label: TranslatedString;
}

interface ProjectTechnology {
  id: number;
  name: string;
  hasLogo: boolean;
  isSimpleIcon: boolean;
}

export interface Project {
  id: number;
  slug: string;
  title: TranslatedString;
  description: Record<string, string>;
  excerpt: TranslatedString;
  repository: string | null;
  url: string | null;
  downloadUrl: string | null;
  mainImage: ProjectImage | null;
  extraImages: ProjectImage[];
  categories: ProjectCategory[];
  technologies: ProjectTechnology[];
  datePublished: string;
}

type ProjectsData = Project[];

export function technologyName(name: string): string {
  return name.replace(/_/g, " ");
}

const projects: ProjectsData = [
  {
    id: 6,
    slug: "web-topwr",
    title: { en: "ToPWR Admin Panel", pl: "Panel Administratora ToPWR" },
    description: { en: "", pl: "" },
    excerpt: {
      en: "ToPWR is a mobile application developed by KN Solvro. This website is an online admin panel which allows student organization members and university staff to create, edit and remove content from the a…",
      pl: "ToPWR to aplikacja mobilna autorstwa KN Solvro. Ten projekt jest panelem administracyjnym online, który umożliwia członkom organizacji studenckiej oraz pracownikom uczelni tworzenie, edytowanie i usuwanie treści z aplikacji.",
    },
    repository: "https://github.com/Solvro/web-topwr",
    url: "https://to.pwr.edu.pl",
    downloadUrl: null,
    mainImage: {
      id: 14895,
      alt: "ToPWR Admin Panel Dashboard",
      url: "/projects/media/web-topwr/web-topwr-dashboard.png",
      width: 1920,
      height: 1050,
      filename: "web-topwr-dashboard.png",
      mimeType: "image/png",
      filesize: 102715,
    },
    extraImages: [
      {
        id: 14896,
        alt: "ToPWR Admin Panel Student Organizations List",
        url: "/projects/media/web-topwr/web-topwr-organizations.png",
        width: 1920,
        height: 1050,
        filename: "web-topwr-organizations.png",
        mimeType: "image/png",
        filesize: 166048,
      },
      {
        id: 14897,
        alt: "ToPWR Admin Panel Organization Edit Form",
        url: "/projects/media/web-topwr/web-topwr-organizations-edit.png",
        width: 1920,
        height: 1050,
        filename: "web-topwr-organizations-edit.png",
        mimeType: "image/png",
        filesize: 234964,
      },
      {
        id: 14901,
        alt: "ToPWR Admin Panel Banners Creation Form",
        url: "/projects/media/web-topwr/web-topwr-banners-create.png",
        width: 1920,
        height: 1050,
        filename: "web-topwr-banners-create.png",
        mimeType: "image/png",
        filesize: 173879,
      },
      {
        id: 14898,
        alt: "ToPWR Admin Panel Events Calendar",
        url: "/projects/media/web-topwr/web-topwr-calendar-events.png",
        width: 1920,
        height: 1050,
        filename: "web-topwr-calendar-events.png",
        mimeType: "image/png",
        filesize: 108571,
      },
      {
        id: 14899,
        alt: "ToPWR Admin Panel Contributors Pivot Fields",
        url: "/projects/media/web-topwr/web-topwr-milestones-contributors-pivot.png",
        width: 1920,
        height: 1050,
        filename: "web-topwr-milestones-contributors-pivot.png",
        mimeType: "image/png",
        filesize: 153263,
      },
      {
        id: 14900,
        alt: "ToPWR Admin Panel Contributors Relation Form",
        url: "/projects/media/web-topwr/web-topwr-milestones-contributors-relations.png",
        width: 1920,
        height: 1050,
        filename: "web-topwr-milestones-contributors-relations.png",
        mimeType: "image/png",
        filesize: 193866,
      },
    ],
    categories: [
      { id: 2, label: { en: "Website", pl: "Strona internetowa" } },
      { id: 5, label: { en: "Application", pl: "Aplikacja" } },
    ],
    technologies: [
      { id: 4, name: "TypeScript", hasLogo: true, isSimpleIcon: false },
      { id: 16, name: "Next_JS", hasLogo: true, isSimpleIcon: false },
      { id: 18, name: "React", hasLogo: true, isSimpleIcon: false },
      { id: 6, name: "Tailwind_CSS", hasLogo: true, isSimpleIcon: false },
      { id: 17, name: "Lucide", hasLogo: true, isSimpleIcon: false },
    ],
    datePublished: "2025-04-03T12:00:00.000Z",
  },
  {
    id: 7,
    slug: "pogotownik",
    title: { en: "Pogotownik", pl: "Pogotownik" },
    description: { en: "", pl: "" },
    excerpt: {
      en: 'Pogotownik (a Polish portmanteau combining "emergency" & "guide") is an app that aggregates all the information one could need in case of emergency.It includes an interactive map consisting of:A bunke…',
      pl: "Pogotownik to aplikacja agregująca wszystkie informacje potrzebne w przypadkach szeroko pojętego zagrożenia, zawierająca interaktywną mapę z danymi z Państwowej Straży Pożarnej, Głównego Inspektoratu Ochrony Środowiska, NASA FIRMS oraz IMGW.",
    },
    repository: null,
    url: "https://pogotownik.pl",
    downloadUrl: null,
    mainImage: {
      id: 14902,
      alt: "Pogotownik Website Map Page",
      url: "/projects/media/pogotownik/pogotownik-map.png",
      width: 2880,
      height: 1800,
      filename: "pogotownik-map.png",
      mimeType: "image/png",
      filesize: 2565492,
    },
    extraImages: [],
    categories: [
      { id: 2, label: { en: "Website", pl: "Strona internetowa" } },
      { id: 5, label: { en: "Application", pl: "Aplikacja" } },
    ],
    technologies: [
      { id: 4, name: "TypeScript", hasLogo: true, isSimpleIcon: false },
      { id: 16, name: "Next_JS", hasLogo: true, isSimpleIcon: false },
      { id: 18, name: "React", hasLogo: true, isSimpleIcon: false },
      { id: 6, name: "Tailwind_CSS", hasLogo: true, isSimpleIcon: false },
      { id: 17, name: "Lucide", hasLogo: true, isSimpleIcon: false },
    ],
    datePublished: "2025-10-11T12:00:00.000Z",
  },
  {
    id: 8,
    slug: "grzegorz-kwiecien-malarstwo",
    title: { en: "Paintings by Grzegorz Kwiecień", pl: "Grzegorz Kwiecień Malarstwo" },
    description: { en: "", pl: "" },
    excerpt: {
      en: "This is a portfolio website built to showcase a large collection of paintings efficiently. It uses responsive images, lazy loading, and optimized asset handling to ensure smooth browsing and fast load…",
      pl: "To jest portfolio online, które sprawnie prezentuje bogatą kolekcję obrazów, zaprojektowane tak, żeby duże, wysokiej jakości zdjęcia wczytywały się szybko i płynnie.",
    },
    repository: null,
    url: "https://malarstwo.grzegorzkwiecien.pl",
    downloadUrl: null,
    mainImage: {
      id: 14903,
      alt: "Grzegorz Kwiecień's Portfolio Homepage",
      url: "/projects/media/grzegorz-kwiecien-malarstwo/grzegorz-kwiecien-homepage.png",
      width: 1920,
      height: 1080,
      filename: "grzegorz-kwiecien-homepage.png",
      mimeType: "image/png",
      filesize: 2846304,
    },
    extraImages: [
      {
        id: 14904,
        alt: "Grzegorz Kwiecień's Portfolio Paintings List",
        url: "/projects/media/grzegorz-kwiecien-malarstwo/grzegorz-kwiecien-portfolio.png",
        width: 1920,
        height: 1080,
        filename: "grzegorz-kwiecien-portfolio.png",
        mimeType: "image/png",
        filesize: 1710549,
      },
      {
        id: 14905,
        alt: 'Grzegorz Kwiecień\'s Portfolio Painting "Azyl"',
        url: "/projects/media/grzegorz-kwiecien-malarstwo/grzegorz-kwiecien-azyl.png",
        width: 1920,
        height: 1080,
        filename: "grzegorz-kwiecien-azyl.png",
        mimeType: "image/png",
        filesize: 1035017,
      },
    ],
    categories: [{ id: 2, label: { en: "Website", pl: "Strona internetowa" } }],
    technologies: [
      { id: 4, name: "TypeScript", hasLogo: true, isSimpleIcon: false },
      { id: 16, name: "Next_JS", hasLogo: true, isSimpleIcon: false },
      { id: 18, name: "React", hasLogo: true, isSimpleIcon: false },
      { id: 6, name: "Tailwind_CSS", hasLogo: true, isSimpleIcon: false },
      { id: 17, name: "Lucide", hasLogo: true, isSimpleIcon: false },
      { id: 14, name: "Directus", hasLogo: true, isSimpleIcon: false },
    ],
    datePublished: "2026-03-22T12:00:00.000Z",
  },
  {
    id: 2,
    slug: "dampol-website",
    title: { en: "Dampol Website", pl: "Strona Dampol" },
    description: { en: "", pl: "" },
    excerpt: {
      en: "This is a website written in Angular for a local Polish container manufacturer called Dampol Investment sp. z o.o. based in Czekanów, Silesia. The website contains a model showcase, and serves as an o…",
      pl: "Strona internetowa stworzona za pomocą frameworku Angular dla lokalnego producenta pawilonów Dampol Investment sp. z o.o. z siedzibą w Czekanowie na Śląsku.",
    },
    repository: null,
    url: "https://modern-container.com",
    downloadUrl: "",
    mainImage: {
      id: 3,
      alt: "Dampol demo all devices white",
      url: "/projects/media/dampol-website/all-devices-white.png",
      width: 1800,
      height: 760,
      filename: "all-devices-white.png",
      mimeType: "image/png",
      filesize: 1042300,
    },
    extraImages: [
      {
        id: 4,
        alt: "Dampol demo homepage desktop",
        url: "/projects/media/dampol-website/desktop.png",
        width: 1713,
        height: 1366,
        filename: "desktop.png",
        mimeType: "image/png",
        filesize: 1485427,
      },
      {
        id: 5,
        alt: "Dampol demo homepage laptop",
        url: "/projects/media/dampol-website/laptop.png",
        width: 753,
        height: 450,
        filename: "laptop.png",
        mimeType: "image/png",
        filesize: 370305,
      },
      {
        id: 6,
        alt: "Dampol demo homepage mobile black",
        url: "/projects/media/dampol-website/mobile-black.png",
        width: 538,
        height: 1100,
        filename: "mobile-black.png",
        mimeType: "image/png",
        filesize: 749816,
      },
      {
        id: 7,
        alt: "Dampol demo homepage mobile white",
        url: "/projects/media/dampol-website/mobile-white.png",
        width: 298,
        height: 606,
        filename: "mobile-white.png",
        mimeType: "image/png",
        filesize: 253128,
      },
      {
        id: 8,
        alt: "Dampol demo homepage tablet black",
        url: "/projects/media/dampol-website/tablet-black.png",
        width: 1741,
        height: 2500,
        filename: "tablet-black.png",
        mimeType: "image/png",
        filesize: 2014728,
      },
      {
        id: 9,
        alt: "Dampol demo homepage tablet white",
        url: "/projects/media/dampol-website/tablet-white.png",
        width: 2294,
        height: 3178,
        filename: "tablet-white.png",
        mimeType: "image/png",
        filesize: 3008286,
      },
      {
        id: 10,
        alt: "Dampol demo models desktop",
        url: "/projects/media/dampol-website/desktop-1.png",
        width: 1713,
        height: 1366,
        filename: "desktop-1.png",
        mimeType: "image/png",
        filesize: 628623,
      },
      {
        id: 11,
        alt: "Dampol demo models laptop",
        url: "/projects/media/dampol-website/laptop-1.png",
        width: 753,
        height: 450,
        filename: "laptop-1.png",
        mimeType: "image/png",
        filesize: 214809,
      },
      {
        id: 12,
        alt: "Dampol demo models mobile black",
        url: "/projects/media/dampol-website/mobile-black-1.png",
        width: 538,
        height: 1100,
        filename: "mobile-black-1.png",
        mimeType: "image/png",
        filesize: 358449,
      },
      {
        id: 13,
        alt: "Dampol demo models mobile white",
        url: "/projects/media/dampol-website/mobile-white-1.png",
        width: 298,
        height: 606,
        filename: "mobile-white-1.png",
        mimeType: "image/png",
        filesize: 121726,
      },
      {
        id: 14,
        alt: "Dampol demo models tablet black",
        url: "/projects/media/dampol-website/tablet-black-1.png",
        width: 1741,
        height: 2500,
        filename: "tablet-black-1.png",
        mimeType: "image/png",
        filesize: 1322734,
      },
      {
        id: 15,
        alt: "Dampol demo models tablet white",
        url: "/projects/media/dampol-website/tablet-white-1.png",
        width: 2294,
        height: 3178,
        filename: "tablet-white-1.png",
        mimeType: "image/png",
        filesize: 1999783,
      },
    ],
    categories: [
      { id: 2, label: { en: "Website", pl: "Strona internetowa" } },
      { id: 6, label: { en: "E-Commerce", pl: "E-Commerce" } },
    ],
    technologies: [
      { id: 4, name: "TypeScript", hasLogo: true, isSimpleIcon: false },
      { id: 3, name: "Angular", hasLogo: true, isSimpleIcon: false },
      { id: 14, name: "Directus", hasLogo: true, isSimpleIcon: false },
    ],
    datePublished: "2023-07-26T21:28:15.000Z",
  },
  {
    id: 5,
    slug: "gerpol-websites",
    title: { en: "Gerpol Websites", pl: "Gerpol Websites" },
    description: { en: "", pl: "" },
    excerpt: {
      en: "This project is a modern web application built for a home renovation services company. It showcases a contractor directory and a user-friendly interface designed with Lucide icons. The Next.js applica…",
      pl: "This project is a modern web application built for a home renovation services company. It showcases a contractor directory and a user-friendly interface designed with Lucide icons. The Next.js applica…",
    },
    repository: "https://github.com/kguzek/gerpol-websites",
    url: "https://das-profiteam-berlin.de",
    downloadUrl: "https://traum-bad-berlin.de",
    mainImage: {
      id: 14893,
      alt: "Das Profiteam Homepage",
      url: "/projects/media/gerpol-websites/das-profiteam-homepage.png",
      width: 3600,
      height: 1890,
      filename: "das-profiteam-homepage.png",
      mimeType: "image/png",
      filesize: 4157497,
    },
    extraImages: [
      {
        id: 14894,
        alt: "Traum Bad Homepage",
        url: "/projects/media/gerpol-websites/traum-bad-homepage.png",
        width: 3600,
        height: 1890,
        filename: "traum-bad-homepage.png",
        mimeType: "image/png",
        filesize: 1421568,
      },
    ],
    categories: [
      { id: 2, label: { en: "Website", pl: "Strona internetowa" } },
      { id: 6, label: { en: "E-Commerce", pl: "E-Commerce" } },
    ],
    technologies: [
      { id: 4, name: "TypeScript", hasLogo: true, isSimpleIcon: false },
      { id: 16, name: "Next_JS", hasLogo: true, isSimpleIcon: false },
      { id: 18, name: "React", hasLogo: true, isSimpleIcon: false },
      { id: 6, name: "Tailwind_CSS", hasLogo: true, isSimpleIcon: false },
      { id: 17, name: "Lucide", hasLogo: true, isSimpleIcon: false },
    ],
    datePublished: "2025-03-08T12:00:00.000Z",
  },
  {
    id: 3,
    slug: "suilo-website",
    title: { en: "SUILO Website", pl: "SUILO Website" },
    description: { en: "", pl: "" },
    excerpt: {
      en: "SUILO Website v2 is a responsive single-page-app website created for the School Council of Bilingual High School no. 1, patroned by Edward Dembowski, in Gliwice, Poland. It was tailor-made to the spec…",
      pl: "SUILO Website v2 is a responsive single-page-app website created for the School Council of Bilingual High School no. 1, patroned by Edward Dembowski, in Gliwice, Poland. It was tailor-made to the spec…",
    },
    repository: "https://github.com/kguzek/suilo-website-v2",
    url: "https://kguzek.github.io/suilo-website-v2",
    downloadUrl: null,
    mainImage: {
      id: 28,
      alt: "SUILO Website promotional previews on various devices",
      url: "/projects/media/suilo-website/suilo-website-previews.jpeg",
      width: 1080,
      height: 1080,
      filename: "suilo-website-previews.jpeg",
      mimeType: "image/jpeg",
      filesize: 166539,
    },
    extraImages: [],
    categories: [
      { id: 2, label: { en: "Website", pl: "Strona internetowa" } },
      { id: 7, label: { en: "Education", pl: "Edukacja" } },
      { id: 8, label: { en: "Organisation", pl: "Organizacja" } },
    ],
    technologies: [
      { id: 5, name: "JavaScript", hasLogo: true, isSimpleIcon: false },
      { id: 18, name: "React", hasLogo: true, isSimpleIcon: false },
      { id: 6, name: "Tailwind_CSS", hasLogo: true, isSimpleIcon: false },
      { id: 7, name: "Firebase", hasLogo: true, isSimpleIcon: false },
      { id: 8, name: "Google_Cloud", hasLogo: false, isSimpleIcon: false },
    ],
    datePublished: "2021-12-21T12:00:43.000Z",
  },
  {
    id: 4,
    slug: "event-scheduling-system",
    title: { en: "Event Scheduling System", pl: "System Zarządzania Wydarzeniami" },
    description: { en: "", pl: "" },
    excerpt: {
      en: "An efficient and flexible system for scheduling and managing events. This tool allows users to schedule events, manage attendees, and ensure no conflicts arise with pre-existing events. Built with Jav…",
      pl: "Wydajny i elastyczny system do planowania i zarządzania wydarzeniami, umożliwiający planowanie wydarzeń, zarządzanie uczestnikami oraz zapewnienie braku konfliktów z istniejącymi wydarzeniami.",
    },
    repository: "https://github.com/kguzek/event-scheduling-system",
    url: null,
    downloadUrl: "https://github.com/kguzek/event-scheduling-system/releases/latest",
    mainImage: {
      id: 30,
      alt: "Event Scheduling System main page with event calendar and event list panel",
      url: "/projects/media/event-scheduling-system/ess-screenshot-1.png",
      width: 986,
      height: 743,
      filename: "ess-screenshot-1.png",
      mimeType: "image/png",
      filesize: 68237,
    },
    extraImages: [
      {
        id: 31,
        alt: "Event Scheduling System budget panel with pie chart",
        url: "/projects/media/event-scheduling-system/ess-screenshot-2.png",
        width: 981,
        height: 617,
        filename: "ess-screenshot-2.png",
        mimeType: "image/png",
        filesize: 52496,
      },
    ],
    categories: [
      { id: 5, label: { en: "Application", pl: "Aplikacja" } },
      { id: 9, label: { en: "Management", pl: "Zarządzanie" } },
      { id: 10, label: { en: "Events", pl: "Wydarzenia" } },
    ],
    technologies: [
      { id: 9, name: "Java", hasLogo: true, isSimpleIcon: false },
      { id: 10, name: "Spring", hasLogo: true, isSimpleIcon: false },
      { id: 12, name: "PostgreSQL", hasLogo: true, isSimpleIcon: false },
      { id: 11, name: "Microsoft_Azure", hasLogo: true, isSimpleIcon: false },
      { id: 13, name: "Websocket", hasLogo: true, isSimpleIcon: false },
    ],
    datePublished: "2024-09-07T19:30:21.000Z",
  },
  {
    id: 1,
    slug: "slav-king",
    title: { en: "Slav King", pl: "Slav King" },
    description: { en: "", pl: "" },
    excerpt: {
      en: "Step into the gritty streets of Russia in Slav King, an adrenaline-pumping 2D shooter that puts you in the shoes of a mischievous Slav criminal. This indie gem, crafted with Python and Pygame, offers …",
      pl: "Wkrocz w mroczne ulice Rosji w grze Slav King – pełnej adrenaliny strzelaninie 2D, która stawia Cię w skórze psotnego słowiańskiego przestępcy, oferującej unikalne połączenie akcji, strategii i czarnego humoru.",
    },
    repository: "https://github.com/kguzek/slav-king",
    url: null,
    downloadUrl: "https://github.com/kguzek/slav-king/releases/latest",
    mainImage: {
      id: 1,
      alt: "Slav King Gameplay 1",
      url: "/projects/media/slav-king/gameplay-1.png",
      width: 960,
      height: 540,
      filename: "gameplay-1.png",
      mimeType: "image/png",
      filesize: 657160,
    },
    extraImages: [
      {
        id: 2,
        alt: "Slav King Shop",
        url: "/projects/media/slav-king/shop.png",
        width: 960,
        height: 538,
        filename: "shop.png",
        mimeType: "image/png",
        filesize: 58121,
      },
    ],
    categories: [
      { id: 1, label: { en: "Videogame", pl: "Gra wideo" } },
      { id: 3, label: { en: "Platformer", pl: "Platformówka" } },
      { id: 4, label: { en: "2D", pl: "2D" } },
    ],
    technologies: [
      { id: 1, name: "Python", hasLogo: true, isSimpleIcon: false },
      { id: 2, name: "PyGame", hasLogo: true, isSimpleIcon: false },
    ],
    datePublished: "2022-01-23T14:21:41.000Z",
  },
];

export function getProjects() {
  return projects;
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

function getProjectIndex(slug: string): number {
  return projects.findIndex((p) => p.slug === slug);
}

export function getAdjacentProject(
  slug: string,
  direction: "prev" | "next",
): Project | null {
  const index = getProjectIndex(slug);
  if (index === -1) return null;
  if (direction === "next") {
    return projects[(index + 1) % projects.length];
  }
  return projects[(index - 1 + projects.length) % projects.length];
}
