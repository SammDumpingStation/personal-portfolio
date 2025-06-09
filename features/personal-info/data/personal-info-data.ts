import {
  BrushCleaning,
  Clock,
  Coffee,
  Handshake,
  Mail,
  MapPin,
  Music,
  Phone,
  ScreenShare,
  Swords,
} from "lucide-react";

const personalInfo = {
  name: "Samm Caagbay",
  title: "Full-Stack Web & Mobile Developer",
  location: "Philippines",
  experience: "2+ Years",
  education:
    "BS Information Technology, University of Science and Technology of Southern Philippines",
  bio: "I'm a passionate full-stack developer who transforms complex challenges into user-friendly web and mobile apps. With a knack for technologies like Next.js, Laravel, and React Native, I build solutions that streamline operations and delight users. My projects, from lending systems to cultural blogs, reflect my commitment to real-world impact.",
  extendedBio:
    "My coding journey began three years ago with a simple HTML blog for the Kaamulan festival. Since then, I've built apps for hospitals, catering platforms, and car buyers, earning accolades like 2nd place in a university competition for KOSHI. I thrive on turning client needs into intuitive, efficient solutions, blending technical skill with a passion for problem-solving.",
  interests: [
    "Gaming",
    "Coffee Brewing",
    "Music",
    "House Chores",
    "Volunteer Work",
    "Watching YouTube",
  ],
  achievements: [
    "Developed 8+ impactful web and mobile applications",
    "Won 2nd place for KOSHI in a university technopreneurship competition",
    "Digitized hospital operations for NBSC with a Laravel-based system",
    "Built real-time catering platform Food Sentinel, earning instructor praise",
  ],
};

const interestIcons = {
  Gaming: Swords,
  "Coffee Brewing": Coffee,
  Music: Music,
  "House Chores": BrushCleaning,
  "Volunteer Work": Handshake,
  "Watching YouTube": ScreenShare,
};

const socialLinks = [
  {
    icon: "/logos/facebook.svg",
    label: "Facebook",
    href: "https://facebook.com/yourprofile",
    color: "hover:text-blue-600",
  },
  {
    icon: "/logos/messenger.svg",
    label: "Messenger",
    href: "https://m.me/yourprofile",
    color: "hover:text-green-600",
  },
  {
    icon: "/logos/linkedin.svg",
    label: "LinkedIn",
    href: "https://linkedin.com/yourprofile",
    color: "hover:text-blue-600",
  },
  {
    icon: "/logos/github.svg",
    label: "GitHub",
    href: "https://github.com/yourprofile",
    color: "hover:text-gray-800 dark:hover:text-gray-200",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sammcaag@gmail.com",
    description: "Drop me a line anytime",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 961 459 6991",
    description: "Available Mon-Fri, 9AM-6PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cagayan de Oro City, Philippines",
    description: "Remote work available",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    description: "Usually much faster",
  },
];

export { personalInfo, interestIcons, socialLinks, contactInfo };
