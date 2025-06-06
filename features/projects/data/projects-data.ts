import { Globe, Users, Zap } from "lucide-react";
import { ProjectCardProps, ProjectProps } from "../types/project-type";

const projectHighlights: ProjectCardProps[] = [
  {
    id: "1",
    organization: "Five Star Finance Inc.",
    title: "S.T.E.L.L.A.",
    subtitle:
      "I helped build a lending system for AFP retirees, focusing on a user-friendly interface for fast loan applications.",
    techStack: [
      {
        id: "logo-1",
        title: "Next.js",
        image: "/logos/nextjs-small.svg",
      },
      {
        id: "logo-2",
        title: "TypeScript",
        image: "/logos/typescript-small.svg",
      },
      {
        id: "logo-3",
        title: "Prisma",
        image: "/logos/prisma-small.svg",
      },
      {
        id: "logo-4",
        title: "PostgreSQL",
        image: "/logos/postgresql-small.svg",
      },
    ],
    images: {
      light: "/images/stella/hero-light.webp",
      dark: "/images/stella/hero-dark.webp",
    },
    category: "Web App",
  },
  {
    id: "2",
    organization: "Application Development",
    title: "Food Sentinel",
    subtitle:
      "I collaborated on a catering platform, developing real-time order tracking for a smooth user experience.",
    techStack: [
      {
        id: "logo-1",
        title: "Next.js",
        image: "/logos/nextjs-small.svg",
      },
      {
        id: "logo-2",
        title: "Express",
        image: "/logos/express-small.svg",
      },
      {
        id: "logo-3",
        title: "MongoDB",
        image: "/logos/mongodb-small.svg",
      },
      {
        id: "logo-4",
        title: "WebSocket",
        image: "/logos/websocket-small.svg",
      },
    ],
    images: {
      light: "/images/food-sentinel/hero-light.webp",
      dark: "/images/food-sentinel/hero-dark.webp",
    },
    category: "Full Stack",
  },
  {
    id: "3",
    organization: "Software Engineering",
    title: "KOSHI",
    subtitle:
      "I created a mobile app to help users find their perfect car, earning 2nd place in a university competition.",
    techStack: [
      {
        id: "logo-1",
        title: "React Native",
        image: "/logos/react-native-small.svg",
      },
      {
        id: "logo-2",
        title: "Firebase",
        image: "/logos/firebase-small.svg",
      },
    ],
    images: {
      light: "/images/koshi.webp",
    },
    category: "Mobile",
  },
];

const projectsCards: ProjectCardProps[] = [
  {
    id: "1",
    organization: "Five Star Finance Inc.",
    title: "STELLA",
    subtitle:
      "We built a lending system for AFP retirees, making loan applications and benefit payments fast and simple.",
    techStack: [
      {
        id: "logo-1",
        title: "Next.js",
        image: "/logos/nextjs-small.svg",
      },
      {
        id: "logo-2",
        title: "TypeScript",
        image: "/logos/typescript-small.svg",
      },
      {
        id: "logo-3",
        title: "Prisma",
        image: "/logos/prisma-small.svg",
      },
      {
        id: "logo-4",
        title: "PostgreSQL",
        image: "/logos/postgresql-small.svg",
      },
    ],
    images: {
      light: "/images/stella/hero-light.webp",
      dark: "/images/stella/hero-dark.webp",
    },
    category: "Web App",
  },
  {
    id: "2",
    organization: "Application Development",
    title: "Food Sentinel",
    subtitle:
      "I developed a full-stack catering platform with real-time order tracking and smooth payment processing.",
    techStack: [
      {
        id: "logo-1",
        title: "Next.js",
        image: "/logos/nextjs-small.svg",
      },
      {
        id: "logo-2",
        title: "Express",
        image: "/logos/express-small.svg",
      },
      {
        id: "logo-3",
        title: "MongoDB",
        image: "/logos/mongodb-small.svg",
      },
      {
        id: "logo-4",
        title: "WebSocket",
        image: "/logos/websocket-small.svg",
      },
    ],
    images: {
      light: "/images/food-sentinel/hero-light.webp",
      dark: "/images/food-sentinel/hero-dark.webp",
    },
    category: "Full Stack",
  },
  {
    id: "3",
    organization: "Software Engineering",
    title: "KOSHI",
    subtitle:
      "I created a mobile app to help users find their perfect car, earning 2nd place in a university competition.",
    techStack: [
      {
        id: "logo-1",
        title: "React Native",
        image: "/logos/react-native-small.svg",
      },
      {
        id: "logo-2",
        title: "Firebase",
        image: "/logos/firebase-small.svg",
      },
    ],
    images: {
      light: "/images/koshi.webp",
    },
    category: "Mobile",
  },
  {
    id: "4",
    organization: "Web Systems",
    title: "Flicks: Movie Ticketing Booking System ",
    subtitle:
      "I built a movie ticketing system with a ChatGPT-inspired interface, making it easy for users to book tickets through a user-friendly design.",
    techStack: [
      {
        id: "1",
        title: "PHP",
        image: "/logos/php-small.svg",
      },
      {
        id: "2",
        title: "TailwindCSS",
        image: "/logos/tailwind-small.svg",
      },
      {
        id: "3",
        title: "MySQL",
        image: "/logos/mysql-small.svg",
      },
      {
        id: "4",
        title: "Laravel",
        image: "/logos/laravel-small.svg",
      },
    ],
    images: {
      light: "/images/flicks/hero.webp",
    },
    category: "Web App",
  },
  {
    id: "5",
    organization: "Web Systems",
    title: "NBSC Hospital Management System",
    subtitle:
      "I developed a hospital management system for NBSC, streamlining patient records and appointments.",
    techStack: [
      {
        id: "1",
        title: "PHP",
        image: "/logos/php-small.svg",
      },
      {
        id: "2",
        title: "TailwindCSS",
        image: "/logos/tailwind-small.svg",
      },
      {
        id: "3",
        title: "MySQL",
        image: "/logos/mysql-small.svg",
      },
      {
        id: "4",
        title: "Laravel",
        image: "/logos/laravel-small.svg",
      },
      {
        id: "5",
        title: "Livewire",
        image: "/logos/livewire-small.svg",
      },
      {
        id: "6",
        title: "Flowbite",
        image: "/logos/flowbite-small.svg",
      },
    ],
    images: {
      light: "/images/nbsc-hos/hero.webp",
    },
    category: "Web App",
  },
  {
    id: "6",
    organization: "Web Systems",
    title: "Kaamulan Blog",
    subtitle:
      "I created a blog website for Kaamulan, a local festival in Bukidnon, using HTML CSS and JavaScript.",
    techStack: [
      {
        id: "1",
        title: "HTML",
        image: "/logos/html-small.svg",
      },
      {
        id: "2",
        title: "CSS",
        image: "/logos/css-small.svg",
      },
      {
        id: "3",
        title: "JavaScript",
        image: "/logos/javascript-small.svg",
      },
    ],
    images: {
      light: "/images/kaamulan/hero.webp",
    },
    category: "Web App",
  },
  {
    id: "7",
    organization: "Web Systems",
    title: "Joyce Gallery",
    subtitle:
      "I created a gallery website for my mother Joyce for her 50th birthday, showcasing the memories of her life.",
    techStack: [
      {
        id: "1",
        title: "Next.js",
        image: "/logos/nextjs-small.svg",
      },
      {
        id: "2",
        title: "TailwindCSS",
        image: "/logos/tailwind-small.svg",
      },
      {
        id: "3",
        title: "Typescript",
        image: "/logos/typescript-small.svg",
      },
      {
        id: "4",
        title: "Shadcn UI",
        image: "/logos/shadcn-ui-small.svg",
      },
    ],
    images: {
      light: "/images/joyce-gallery/hero.webp",
    },
    category: "Web App",
  }, 
  {
    id: "8",
    organization: "Web Systems",
    title: "Maharlika Banking Solutions",
    subtitle:
      "I created a website for Maharlika Banking Solutions, using Plain JAVA GUI",
    techStack: [
      {
        id: "1",
        title: "Java",
        image: "/logos/java-small.svg",
      },
      {
        id: "2",
        title: "JavaFX",
        image: "/logos/javafx-small.svg",
      },
      {
        id: "3",
        title: "MySQL",
        image: "/logos/mysql-small.svg",
      },
    ],
    images: {
      light: "/images/MBS/hero.webp",
    },
    category: "Web App",
  }
];

const projects: ProjectProps[] = [
  {
    id: "1",
    organization: "Five Star Finance Inc.",
    title: "STELLA",
    subtitle:
      "We built a lending system for AFP retirees, making loan applications and benefit payments fast and simple.",
    techStack: [
      {
        id: "logo-1",
        title: "Next.js",
        image: "/logos/nextjs-small.svg",
      },
      {
        id: "logo-2",
        title: "TypeScript",
        image: "/logos/typescript-small.svg",
      },
      {
        id: "logo-3",
        title: "Prisma",
        image: "/logos/prisma-small.svg",
      },
      {
        id: "logo-4",
        title: "PostgreSQL",
        image: "/logos/postgresql-small.svg",
      },
    ],
    images: {
      light: "/images/stella/hero-light.webp",
      dark: "/images/stella/hero-dark.webp",
    },
    category: "Web App",
    timeline: "2024",
    role: "Full Stack Developer",
    teamSize: "2",
    status: "Ongoing",
    liveDemoLink: "https://stella.fivestarfinance.com",
    about: "",
    features: [
      {
        icon: Zap,
        title: "Lightning Fast",
        description:
          "Optimized performance with server-side rendering and edge functions",
      },
      {
        icon: Users,
        title: "User Authentication",
        description:
          "Secure authentication system with role-based access control",
      },
      {
        icon: Globe,
        title: "Responsive Design",
        description: "Fully responsive interface that works on all devices",
      },
    ],
    gallery: [
      {
        light: "/images/stella/hero-light.webp",
        dark: "/images/stella/hero-dark.webp",
      },
    ],
  },
];

export { projectHighlights, projectsCards, projects };
