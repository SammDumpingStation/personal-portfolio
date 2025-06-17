import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function IconEffects({ icon: Icon, className, iconSize }: { icon: LucideIcon, className?: string, iconSize?: string }) {
  return (
    <div className={cn("relative min-w-12 min-h-12 flex items-center justify-center border-primary/30 rounded-full overflow-hidden btn-tilt-group", className)}>
      <Icon className={cn("size-5 sm:size-6 relative z-10", iconSize)} />
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
    </div>
  );
}
