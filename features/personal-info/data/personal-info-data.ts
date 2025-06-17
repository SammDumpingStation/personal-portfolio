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
  imageUrl: "/images/profile.webp",
  location: "Alae, Manolo Fortich, Bukidnon, Philippines",
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
  links: {
    gmaps:
      "https://www.google.com/maps/place/Alae,+Manolo+Fortich,+Bukidnon,+Philippines",
    facebook: "https://www.facebook.com/sammcaagz.7",
    linkedin: "www.linkedin.com/in/samm-reyven-joey-caagbay-7b7445339",
    github: "https://github.com/sammcaag?tab=repositories",
    messenger: "https://m.me/sammcaagz.7",
    school: "https://www.ustp.edu.ph/",
  },
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
    href: "https://facebook.com/sammcaagz.7",
    color: "hover:text-blue-600",
  },
  {
    icon: "/logos/messenger.svg",
    label: "Messenger",
    href: "https://m.me/sammcaagz.7",
    color: "hover:text-green-600",
  },
  {
    icon: "/logos/linkedin.svg",
    label: "LinkedIn",
    href: "https://linkedin.com/in/samm-reyven-joey-caagbay-7b7445339",
    color: "hover:text-blue-600",
  },
  {
    icon: "/logos/github.svg",
    label: "GitHub",
    href: "https://github.com/sammcaag",
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
    value: "Alae, Manolo Fortich, Bukidnon",
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
