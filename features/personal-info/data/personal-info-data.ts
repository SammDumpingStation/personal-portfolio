import { Camera, Code, Coffee, Map, MapPin, Music } from "lucide-react";

const personalInfo = {
  name: "Samm Caagbay", // Replace with your actual name
  title: "Full-Stack Web & Mobile Developer",
  location: "Philippines",
  experience: "2+ Years",
  education:
    "BS Information Technology, University of Science and Technology of Southern Philippines",
  bio: "I'm a passionate full-stack developer who transforms complex challenges into user-friendly web and mobile apps. With a knack for technologies like Next.js, Laravel, and React Native, I build solutions that streamline operations and delight users. My projects, from lending systems to cultural blogs, reflect my commitment to real-world impact.",
  extendedBio:
    "My coding journey began three years ago with a simple HTML blog for the Kaamulan festival. Since then, I've built apps for hospitals, catering platforms, and car buyers, earning accolades like 2nd place in a university competition for KOSHI. I thrive on turning client needs into intuitive, efficient solutions, blending technical skill with a passion for problem-solving.",
  interests: [
    "Photography",
    "Coffee Brewing",
    "Music",
    "Hiking",
    "Cultural Research",
    "Tech Exploration",
  ],
  achievements: [
    "Developed 8+ impactful web and mobile applications",
    "Won 2nd place for KOSHI in a university technopreneurship competition",
    "Digitized hospital operations for NBSC with a Laravel-based system",
    "Built real-time catering platform Food Sentinel, earning instructor praise",
  ],
};

const interestIcons = {
  Photography: Camera,
  "Coffee Brewing": Coffee,
  Music: Music,
  Hiking: Map,
  "Cultural Research": MapPin,
  "Tech Exploration": Code,
};

export { personalInfo, interestIcons };
