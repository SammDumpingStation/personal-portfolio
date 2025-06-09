import { Logo } from "../types/logos-type";

const logos: Logo[] = [
  {
    id: "logo-1",
    title: "Next.js",
    image: "/logos/nextjs.svg",
    invert: true,
  },
  {
    id: "logo-2",
    title: "TailwindCSS",
    image: "/logos/tailwind.svg",
  },
  {
    id: "logo-3",
    title: "TypeScript",
    image: "/logos/typescript.svg",
  },
  {
    id: "logo-4",
    title: "Shadcn UI",
    image: "/logos/shadcn-ui.svg",
    invert: true,
  },
  {
    id: "logo-5",
    title: "Express",
    image: "/logos/express.svg",
    invert: true,
  },
  {
    id: "logo-6",
    title: "Supabase",
    image: "/logos/supabase.svg",
  },
  {
    id: "logo-7",
    title: "MongoDB",
    image: "/logos/mongodb.svg",
  },
  {
    id: "logo-8",
    title: "Mongoose",
    image: "/logos/mongoose.svg",
  },
];

type TechStackProps = {
  frontend: Logo[];
  backend: Logo[];
  mobile: Logo[];
  infrastructure: Logo[];
};

const techStack: TechStackProps = {
  frontend: [
    {
      id: "logo-1",
      title: "Next.js",
      image: "/logos/nextjs.svg",
      invert: true,
    },
    {
      id: "logo-2",
      title: "TailwindCSS",
      image: "/logos/tailwind.svg",
    },
    {
      id: "logo-3",
      title: "TypeScript",
      image: "/logos/typescript.svg",
    },
    {
      id: "logo-4",
      title: "Shadcn UI",
      image: "/logos/shadcn-ui.svg",
      invert: true,
    },
  ],
  backend: [
    {
      id: "logo-5",
      title: "Express",
      image: "/logos/express.svg",
      invert: true,
    },
    {
      id: "logo-6",
      title: "Supabase",
      image: "/logos/supabase.svg",
    },
    {
      id: "logo-9",
      title: "Prisma",
      image: "/logos/prisma.svg",
      invert: true,
    },
    {
      id: "logo-7",
      title: "MongoDB",
      image: "/logos/mongodb.svg",
    },
    {
      id: "logo-8",
      title: "Mongoose",
      image: "/logos/mongoose.svg",
    },
    {
      id: "logo-11",
      title: "Node.js",
      image: "/logos/node-js.svg",
    },
    {
      id: "logo-10",
      title: "Socket.io",
      image: "/logos/socket-io.svg",
      invert: true,
    },
    {
      id: "backend-1",
      title: "Cloud Firestore",
      image: "/logos/cloud-firestore.svg",
    },
  ],
  mobile: [
    {
      id: "logo-12",
      title: "React Native",
      image: "/logos/reactjs.svg",
    },
    {
      id: "logo-13",
      title: "React Native Reusables",
      image: "/logos/react-native-reusables.png",
    },
    {
      id: "logo-16",
      title: "Expo",
      image: "/logos/expo.svg",
    },
    {
      id: "logo-14",
      title: "NativewindCSS",
      image: "https://v2.nativewind.dev/img/logo.svg",
    },
  ],
  infrastructure: [
    {
      id: "infra-1",
      title: "DigitalOcean",
      image: "/logos/digital-ocean.svg",
    },
    {
      id: "infra-2",
      title: "Docker",
      image: "/logos/docker.svg",
    },
    {
      id: "infra-3",
      title: "Firebase",
      image: "/logos/firebase.svg",
    },
  ],
};

export { logos, techStack };
