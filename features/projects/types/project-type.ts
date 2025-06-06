import { Logo } from "@/features/tech-stack/types/logos-type";

export type ProjectCategory =
  | "All"
  | "Full Stack"
  | "Frontend"
  | "Web App"
  | "Mobile"
  | "Backend";

export interface ProjectCardProps {
  id: string;
  organization: string;
  title: string;
  subtitle: string;
  techStack: Logo[];
  images: {
    light: string;
    dark?: string;
  };
  isFeatured?: boolean;
  isNew?: boolean;
  onGoing?: boolean;
  category: ProjectCategory;
}

export interface ProjectProps extends ProjectCardProps {
  timeline: string;
  role: string;
  teamSize: string;
  status: string;
  description: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  gallery: {
    light: string;
    dark: string;
  }[];
}
