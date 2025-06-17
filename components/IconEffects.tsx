import { LucideIcon } from "lucide-react";

export default function IconEffects({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative min-w-12 min-h-12 flex items-center justify-center border-primary/30 rounded-full overflow-hidden btn-tilt-group">
      <Icon className="size-5 sm:size-6 relative z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
    </div>
  );
}
