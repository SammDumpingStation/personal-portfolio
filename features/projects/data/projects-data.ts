import {
  ArrowRight,
  BarChart,
  Calendar,
  Database,
  Edit,
  FileText,
  Filter,
  Globe,
  Image,
  Layout,
  Lock,
  MapPin,
  Monitor,
  Palette,
  Phone,
  Rocket,
  Shield,
  Sliders,
  Smile,
  Ticket,
  Upload,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
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
      "I built a hospital management system for NBSC, simplifying patient record management and appointment scheduling.",
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
      "I developed a blog platform for Kaamulan festival, showcasing Bukidnon's culture with an engaging and accessible design.",
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
      "I crafted a gallery website for my mother Joyce's 50th birthday, beautifully displaying her life's cherished memories.",
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
      "I developed a banking platform for Maharlika, streamlining financial transactions with an intuitive Java-based interface.",
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
  },
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
    timeline: "February 2025 - May 2025 (4 months)",
    role: "Full Stack Web Developer & UI/UX Designer",
    teamSize: "3 Team Project",
    status: "Ongoing",
    isFeatured: true,
    liveDemoLink: "https://stella-chi.vercel.app/dashboard",
    overview: {
      description:
        "STELLA is my ongoing capstone project, and it's been a journey of tackling real-world problems for Five Star Finance Inc. We're building a web system to unify client data across 11 Philippine branches, moving away from scattered Excel sheets that often misidentified returning AFP retirees. It's all about making life easier for branch staff, and I'm excited to see it come together, even if it's been a rollercoaster of adjustments.",
      background:
        "STELLA started as a mission to fix Five Star Finance's outdated Excel-based system, which caused headaches with data silos and client mix-ups. As a thesis project, it's been a chance to apply my skills to something meaningful, focusing on documentation and a frontend MVP that I'm proud to shape.",
      challenge:
        "I initially thought we'd integrate with the main office, but we had to pivot to just the branches, which meant scrapping some features like loan approvals. Balancing coding with thesis paperwork was tough, and I felt the pressure, but seeing the system take form for the staff keeps me motivated.",
      goal: [
        "Centralize client records for accuracy.",
        "Streamline operations for loan and sales teams.",
        "Build an intuitive web interface.",
        "Transition from Excel to a modern platform.",
        "Nail the academic deliverables like UML and DFDs.",
      ],
    },
    features: [
      {
        icon: Database,
        title: "Centralized Database",
        description:
          "Unified client records to prevent misidentification and ensure accurate loan allocations.",
      },
      {
        icon: Shield,
        title: "Robust Security",
        description:
          "Protects sensitive financial and personal data with industry-standard measures.",
      },
      {
        icon: ArrowRight,
        title: "Seamless Data Migration",
        description:
          "Effortless transition from Excel to a centralized system.",
      },
      {
        icon: Smile,
        title: "Intuitive Interface",
        description:
          "Designed for loan and sales teams to simplify daily tasks.",
      },
    ],
    gallery: [
      {
        light: "/images/stella/light-1.webp",
        dark: "/images/stella/dark-1.webp",
      },
      {
        light: "/images/stella/light-2.webp",
        dark: "/images/stella/dark-2.webp",
      },
      {
        light: "/images/stella/light-3.webp",
        dark: "/images/stella/dark-3.webp",
      },
      {
        light: "/images/stella/light-4.webp",
        dark: "/images/stella/dark-4.webp",
      },
      {
        light: "/images/stella/light-5.webp",
        dark: "/images/stella/dark-5.webp",
      },
    ],
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
    timeline: "February 2025 - May 2025 (4 months)",
    role: "Full Stack Web and Mobile Developer & UI/UX Designer",
    teamSize: "4 Team Project",
    status: "Completed",
    liveDemoLink: "",
    overview: {
      description:
        "Food Sentinel was a thrilling project that brought real-time catering to life with WebSocket magic. I poured my heart into crafting a web and mobile app that instantly updates menus and reservations, and the moment our instructors were wowed by its live syncing felt like a huge win. It was a tough but rewarding ride",
      background:
        "This project came from a desire to modernize catering services for a school assignment. I led the front-end work, building a platform that felt alive with instant updates. The joy of seeing it work flawlessly across devices made all the late nights worth it.",
      challenge:
        "Learning WebSockets and Docker while building Food Sentinel was daunting, and we hit roadblocks that tested my patience. We didn't get to add payments due to time, but nailing the real-time features and earning our instructors' shock and awe made every struggle feel triumphant.",
      goal: [
        "Enable real-time order tracking with WebSockets.",
        "Create a seamless full-stack experience.",
        "Ensure smooth performance across web and mobile.",
        "Tackle new tech like Socket.io and Docker.",
        "Impress with standout academic results.",
      ],
    },
    features: [
      {
        icon: Zap,
        title: "Real-Time Order Tracking",
        description:
          "Instant updates on menu changes and reservations powered by WebSockets.",
      },
      {
        icon: Monitor,
        title: "Responsive Design",
        description:
          "Adapts to any screen size for an optimal user experience.",
      },
      {
        icon: Shield,
        title: "User Authentication",
        description: "Secure access for customers and administrators.",
      },
      {
        icon: Phone,
        title: "Cross-Platform Sync",
        description: "Seamless experience across web and mobile platforms.",
      },
    ],
    gallery: [
      {
        light: "/images/food-sentinel/1-light.webp",
        dark: "/images/food-sentinel/1-dark.webp",
      },
      {
        light: "/images/food-sentinel/2-light.webp",
        dark: "/images/food-sentinel/2-dark.webp",
      },
      {
        light: "/images/food-sentinel/3-light.webp",
        dark: "/images/food-sentinel/3-dark.webp",
      },
      {
        light: "/images/food-sentinel/4-light.webp",
        dark: "/images/food-sentinel/4-dark.webp",
      },
      {
        light: "/images/food-sentinel/5-light.webp",
        dark: "/images/food-sentinel/5-dark.webp",
      },
    ],
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
    timeline: "September 2024 - December 2024 (4 months)",
    role: "Full Stack Mobile Developer & UI/UX Designer",
    teamSize: "2 Team Project",
    status: "Completed",
    liveDemoLink: "",
    overview: {
      description:
        "KOSHI, born in a Technopreneurship class, was my answer to clunky car-buying apps. I built a mobile app with car comparisons and local dealership maps, and winning second place in a university competition felt like a proud milestone. It was a mix of frustration and excitement, but I loved bringing this idea to life.",
      background:
        "The idea for KOSHI sparked from my own struggles with outdated car-buying platforms in the late 2020s. Taking on 80% of the development, I turned that frustration into a sleek React Native app that helped users find their perfect car in Cagayan de Oro.",
      challenge:
        "Diving into React Native and Firebase with Expo Go was intimidating, especially configuring native integrations. There were moments I doubted myself, but pushing through to create a polished app that impressed the judges was incredibly rewarding.",
      goal: [
        "Build a user-friendly car comparison tool.",
        "Offer smart search filters.",
        "Integrate maps for local dealerships.",
        "Create an intuitive mobile experience.",
        "Shine in the competition with innovation.",
      ],
    },
    features: [
      {
        icon: Sliders,
        title: "Car Comparison Tool",
        description: "Easily compare different car models side by side.",
      },
      {
        icon: MapPin,
        title: "Map Integration",
        description: "Find local dealerships with ease using integrated maps.",
      },
      {
        icon: Filter,
        title: "Advanced Filters",
        description:
          "Refine searches based on various criteria for a tailored experience.",
      },
    ],
    gallery: [
      {
        light: "/images/koshi/hero-light.webp",
        dark: "/images/koshi/hero-dark.webp",
      },
    ],
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
    timeline: "January 2024 - April 2024 (4 months)",
    role: "Full Stack Web Developer",
    teamSize: "Solo Project",
    status: "Completed",
    liveDemoLink: "",
    overview: {
      description:
        "Flicks was my chance to build a movie ticketing system with a sleek, ChatGPT-inspired look. Using PHP, HTML, and CSS, I created a booking platform that won applause for its design, even if my perfectionism made the process stressful. It was a learning curve I’m proud to have climbed.",
      background:
        "As a web systems project, Flicks was my first big dive into web development. I took on everything—setup, database, UI—drawing inspiration from ChatGPT’s clean aesthetic. Seeing it come together, despite the pressure, was a moment of pride.",
      challenge:
        "My beginner status and perfectionist streak made me second-guess the design constantly, slowing me down. Time constraints killed my Laravel dreams, but focusing on functionality and delivering a crowd-pleasing UI taught me to balance vision with practicality.",
      goal: [
        "Enable real-time order tracking with WebSockets.",
        "Create a seamless full-stack experience.",
        "Ensure smooth performance across web and mobile.",
        "Tackle new tech like Socket.io and Docker.",
        "Impress with standout academic results.",
      ],
    },
    features: [
      {
        icon: Palette,
        title: "Intuitive UI",
        description: "Modern design inspired by ChatGPT for easy navigation.",
      },
      {
        icon: Ticket,
        title: "Easy Booking",
        description:
          "Streamlined process to reserve tickets in just a few clicks.",
      },
      {
        icon: Monitor,
        title: "Responsive Design",
        description: "Fully responsive interface that works on all devices.",
      },
    ],
    gallery: [
      {
        light: "/images/flicks/1.webp",
      },
      {
        light: "/images/flicks/2.webp",
      },
      {
        light: "/images/flicks/3.webp",
      },
      {
        light: "/images/flicks/4.webp",
      },
      {
        light: "/images/flicks/5.webp",
      },
    ],
  },
  {
    id: "5",
    organization: "Web Systems",
    title: "NBSC Hospital Management System",
    subtitle:
      "I built a hospital management system for NBSC, simplifying patient record management and appointment scheduling.",
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
    timeline: "February 2025 - May 2025 (4 months)",
    role: "Full Stack Web Developer",
    teamSize: "4 Team Project",
    status: "Completed",
    liveDemoLink: "",
    overview: {
      description:
        "The NBSC Hospital Management System was a game-changer for me, turning manual hospital processes into a digital powerhouse with Laravel. I laid the groundwork for role-based access, and seeing it help staff and doctors felt incredibly fulfilling, even if coordinating with my team was a challenge.",
      background:
        "This group project aimed to modernize NBSC hospital's operations. I kicked things off with the Laravel and database setup, guiding my team to build a system that staff loved. It was a chance to prove my skills while learning the value of client feedback.",
      challenge:
        "Designing role-based access for doctors, nurses, and students was complex, and aligning with my team's vision took patience. But following the hospital's clear requirements made it rewarding to deliver a system that truly made their work easier.",
      goal: [
        "Create secure access for different hospital roles.",
        "Streamline patient records and appointments.",
        "Ensure data security and reliability.",
        "Meet client needs precisely.",
        "Support team success with a strong foundation.",
      ],
    },
    features: [
      {
        icon: Users,
        title: "Role-Based Access Control",
        description:
          "Secure access tailored to staff, doctors, nurses, and students.",
      },
      {
        icon: FileText,
        title: "Patient Record Management",
        description:
          "Efficient handling of patient data and medical histories.",
      },
      {
        icon: Calendar,
        title: "Appointment Scheduling",
        description: "Easy booking and management of patient appointments.",
      },
      {
        icon: Shield,
        title: "Robust Security",
        description:
          "Protects sensitive health data with top-tier security measures.",
      },
    ],
    gallery: [
      {
        light: "/images/nbsc-hos/1.webp",
      },
      {
        light: "/images/nbsc-hos/2.webp",
      },
      {
        light: "/images/nbsc-hos/3.webp",
      },
      {
        light: "/images/nbsc-hos/4.webp",
      },
      {
        light: "/images/nbsc-hos/5.webp",
      },
    ],
  },
  {
    id: "6",
    organization: "Web Systems",
    title: "Kaamulan Blog",
    subtitle:
      "I developed a blog platform for Kaamulan festival, showcasing Bukidnon's culture with an engaging and accessible design.",
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
    timeline: "January 2024 (1 week)",
    role: "Frontend Developer",
    teamSize: "2 Man Project",
    status: "Completed",
    liveDemoLink: "https://kaamulan-simple-website.vercel.app/index.html",
    overview: {
      description:
        "The Kaamulan Blog was a fun group project to share Bukidnon's vibrant culture online. Using HTML, CSS, and JavaScript, I designed a Notion-inspired blog that felt clean and engaging. It was a lighthearted challenge that sparked my creativity, even if it was just for a class.",
      background:
        "This project was a class assignment to bring the Kaamulan festival to life digitally. I took the lead on research and design, modeling it after Notion's sleek blogs to create something both informative and approachable.",
      challenge:
        "Working with basic tech like HTML and CSS meant limited dynamic features, which was a bit frustrating. But focusing on clean design and rich content let us craft a blog that felt meaningful, even if it was for compliance.",
      goal: [
        "Showcase Bukidnon's Kaamulan festival.",
        "Build a simple, elegant blog platform.",
        "Research authentic cultural content.",
        "Deliver a solid group assignment.",
      ],
    },
    features: [
      {
        icon: Layout,
        title: "Clean Design",
        description: "Modern and elegant look inspired by Notion.",
      },
      {
        icon: Edit,
        title: "Easy Content Updates",
        description: "Simple interface for adding and managing blog posts.",
      },
      {
        icon: Phone,
        title: "Mobile-Friendly",
        description: "Optimized for seamless viewing on phones and tablets.",
      },
    ],
    gallery: [
      {
        light: "/images/kaamulan/1.webp",
      },
      {
        light: "/images/kaamulan/1.webp",
      },
      {
        light: "/images/kaamulan/1.webp",
      },
      {
        light: "/images/kaamulan/1.webp",
      },
      {
        light: "/images/kaamulan/1.webp",
      },
    ],
  },
  {
    id: "7",
    organization: "Web Systems",
    title: "Joyce Gallery",
    subtitle:
      "I crafted a gallery website for my mother Joyce's 50th birthday, beautifully displaying her life's cherished memories.",
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
    timeline: "January 2025 - February 2025 (1 month)",
    role: "Full Stack Web Developer",
    teamSize: "Solo Project",
    status: "Completed",
    liveDemoLink: "https://mama-joyce-gallery.vercel.app/gallery",
    overview: {
      description:
        "Joyce Gallery was a heartfelt project for my mom's 50th birthday, built with Next.js and Cloudinary to share celebration photos. It was a mix of joy and frustration, wrestling with the pages router, but seeing guests love the fast, easy gallery made it all worthwhile.",
      background:
        "Inspired by my mom and a Facebook reel, this project was a personal mission to make her milestone special. Using a Next.js template, I built a gallery that let guests upload and view photos, turning memories into a digital keepsake.",
      challenge:
        "The pages router was unfamiliar territory, and my failed attempts to switch to the app router tested my patience. But pushing through to deliver a speedy, loved gallery for my mom and her guests was a moment of pure pride.",
      goal: [
        "Create a digital space for birthday memories.",
        "Enable seamless photo uploads with Cloudinary.",
        "Ensure a user-friendly experience for all.",
        "Tackle Next.js's pages router challenges.",
      ],
    },
    features: [
      {
        icon: Upload,
        title: "Image Uploads",
        description: "Easily upload photos via Cloudinary for instant sharing.",
      },
      {
        icon: Image,
        title: "Gallery View",
        description: "Browse all uploaded images in a beautiful layout.",
      },
      {
        icon: Rocket,
        title: "Fast Performance",
        description: "Quick loading times for a smooth experience.",
      },
      {
        icon: Lock,
        title: "Secure Storage",
        description: "Photos safely stored in the cloud for peace of mind.",
      },
    ],
    gallery: [
      {
        light: "/images/joyce-gallery/1.webp",
      },
      {
        light: "/images/joyce-gallery/2.webp",
      },
      {
        light: "/images/joyce-gallery/3.webp",
      },
    ],
  },
  {
    id: "8",
    organization: "Web Systems",
    title: "Maharlika Banking Solutions",
    subtitle:
      "I developed a banking platform for Maharlika, streamlining financial transactions with an intuitive Java-based interface.",
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
    category: "Desktop App",
    timeline: "September 2023 - December 2023 (4 months)",
    role: "Full Stack Java Developer",
    teamSize: "Solo Project",
    status: "Completed",
    liveDemoLink: "",
    overview: {
      description:
        "Maharlika Banking Solutions (MBS) was a solo JavaFX project inspired by BPI's clean design, built to manage accounts and transactions. As a beginner, I felt overwhelmed but proud when my intuitive interface won applause. It was a tough climb that showed my growth.",
      background:
        "MBS was a course project to apply Java skills to a banking scenario. I coded every part by hand, drawing from BPI's aesthetic to create a platform that felt clear and reliable for users and admins alike.",
      challenge:
        "As a beginner, my messy file system and perfectionism made development stressful, and the JavaFX learning curve was steep. But delivering a polished, intuitive platform that impressed the panel proved I could push through and shine.",
      goal: [
        "Design an intuitive banking interface.",
        "Enable customer and admin functionalities.",
        "Master Java and JavaFX skills.",
        "Prioritize user-friendly navigation.",
      ],
    },
    features: [
      {
        icon: BarChart,
        title: "Admin Dashboard",
        description:
          "Manage all customers and their data from a centralized dashboard.",
      },
      {
        icon: Wallet,
        title: "Customer Portal",
        description: "View balances and transaction histories with ease.",
      },
      {
        icon: Shield,
        title: "Secure Transactions",
        description: "Safe and reliable deposit and withdrawal processes.",
      },
      {
        icon: Lock,
        title: "User Authentication",
        description: "Secure login for both admins and customers.",
      },
    ],
    gallery: [
      {
        light: "/images/mbs/1.webp",
      },
      {
        light: "/images/mbs/2.webp",
      },
      {
        light: "/images/mbs/3.webp",
      },
      {
        light: "/images/mbs/4.webp",
      },
      {
        light: "/images/mbs/5.webp",
      },
    ],
  },
];

export { projectHighlights, projectsCards, projects };
