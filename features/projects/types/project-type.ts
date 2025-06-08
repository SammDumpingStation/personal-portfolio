import { Logo } from "@/features/tech-stack/types/logos-type";
import { LucideIcon } from "lucide-react";

export type ProjectCategory =
  | "All"
  | "Full Stack"
  | "Frontend"
  | "Web App"
  | "Desktop App"
  | "Mobile"
  | "Backend";

export interface ProjectCardProps {
  id: string;
  organization: string;
  title: string;
  subtitle: string;
  techStack: {
    frontend: Logo[],
    backend?: Logo[],
    infrastructure?: Logo[],
  };
  images: {
    light: string;
    dark?: string;
  };
  isFeatured?: boolean;
  onGoing?: boolean;
  category: ProjectCategory;
}

export interface ProjectProps extends ProjectCardProps {
  timeline: string;
  role: string;
  teamSize: string;
  status: "Completed" | "Ongoing";
  overview: {
    description: string;
    background: string;
    challenge: string;
    goal: string[];
  };
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  gallery: {
    light: string;
    dark?: string;
  }[];
  liveDemoLink?: string;
}
