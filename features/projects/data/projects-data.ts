import { ProjectCardProps } from "../types/project-type";

const projectHighlights: ProjectCardProps[] = [
  {
    id: "1",
    organization: "Five Star Finance Inc.",
    title: "STELLA",
    subtitle:
      "A comprehensive lending system for AFP retirees, streamlining loan applications and benefit disbursements",
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
      light: "/images/stella-light.webp",
      dark: "/images/stella-dark.webp",
    },
  },
  {
    id: "2",
    organization: "Application Development",
    title: "Food Sentinel",
    subtitle:
      "Full-stack platform for managing catering services with real-time order tracking and payment processing",
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
      light: "/images/food-sentinel-light.webp",
      dark: "/images/food-sentinel-dark.webp",
    },
  },
  {
    id: "3",
    organization: "Software Engineering",
    title: "KOSHI",
    subtitle:
      "Award-winning mobile application helping users find their ideal vehicle match (2nd place in competition)",
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
      dark: "/images/koshi.webp",
    },
  },
];

const projects: ProjectCardProps[] = [
  {
    id: "1",
    organization: "Five Star Finance Inc.",
    title: "STELLA",
    subtitle:
      "A comprehensive lending system for AFP retirees, streamlining loan applications and benefit disbursements",
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
      light: "/images/stella-light.webp",
      dark: "/images/stella-dark.webp",
    },
  },
  {
    id: "2",
    organization: "Application Development",
    title: "Food Sentinel",
    subtitle:
      "Full-stack platform for managing catering services with real-time order tracking and payment processing",
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
      light: "/images/food-sentinel-light.webp",
      dark: "/images/food-sentinel-dark.webp",
    },
  },
  {
    id: "3",
    organization: "Software Engineering",
    title: "KOSHI",
    subtitle:
      "Award-winning mobile application helping users find their ideal vehicle match (2nd place in competition)",
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
      dark: "/images/koshi.webp",
    },
  },
];

export { projectHighlights, projects };
