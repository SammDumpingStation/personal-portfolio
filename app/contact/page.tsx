import {
  MessageSquare,
  User,
  Clock,
  LucideIcon,
  ChevronRight,
} from "lucide-react";
import {
  contactInfo,
  socialLinks,
} from "@/features/personal-info/data/personal-info-data";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/features/personal-info/components/ContactForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import IconEffects from "@/components/IconEffects";
import { CardTitle } from "@/components/ui/card-hover-effect";

const ContactInfoCards = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Get in Touch</h2>
      <div className="grid grid-cols-2 gap-4">
        {contactInfo.map((info, index) => (
          <Card key={index} className="group">
            <CardContent className="flex items-start gap-2">
              <IconEffects
                icon={info.icon}
                iconSize="sm:size-5"
                className="min-w-10 min-h-10"
              />
              <div className="flex flex-col">
                <span className="font-semibold">{info.label}</span>
                <p className="text-sm font-medium">{info.value}</p>
                <p className="text-xs text-muted-foreground">
                  {info.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const SocialMediaLinks = () => {
  return (
    <div className="relative flex-1 overflow-hidden rounded-lg border bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <div className="relative flex h-full items-center justify-center p-8">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Let's Connect</h3>
            <p className="text-sm text-muted-foreground max-w-xs text-center">
              Follow me on social media or check out my work on GitHub
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex size-18 items-center justify-center rounded-full bg-background border border-primary/20 text-muted-foreground transition-all hover:scale-110 hover:border-primary/40 hover:shadow-lg ${social.color}`}
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={24}
                  height={24}
                  className="size-8 transition-transform group-hover:scale-110 dark:invert"
                />
              </Link>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            Feel free to reach out through any platform
          </p>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-4 right-4 size-2 rounded-full bg-primary/30 animate-pulse" />
      <div className="absolute bottom-8 left-6 size-1 rounded-full bg-primary/40 animate-pulse delay-1000" />
      <div className="absolute top-1/3 left-4 size-1.5 rounded-full bg-primary/20 animate-pulse delay-500" />
    </div>
  );
};

const AddInfoCards = ({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) => {
  return (
    <Card className="group flex flex-row items-center gap-4">
      <CardContent className="flex flex-col">
        <div className="flex flex-row items-center gap-4">
          <IconEffects icon={Icon} className="rounded-xl" />
          <CardTitle className="text-xl m-0 p-0"> {title}</CardTitle>
        </div>
        <p className="flex gap-2 mt-4">
          <ChevronRight />
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const AdditionalInfo = () => {
  return (
    <div className="mt-12 border-t pt-12">
      <div className="grid gap-8 md:grid-cols-3">
        <AddInfoCards
          icon={Clock}
          title="Quick Response"
          description="I typically respond to messages within a few hours during business days."
        />
        <AddInfoCards
          icon={MessageSquare}
          title="Free Consultation"
          description="Let's discuss your project requirements and how I can help you achieve your goals."
        />
        <AddInfoCards
          icon={User}
          title="Personal Touch"
          description="Every project gets my full attention and dedication to deliver exceptional results."
        />
      </div>
    </div>
  );
};

export default function Contact() {
  return (
    <main className="container  mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Left Column: Contact Form */}
        <ContactForm />
        {/* Right Column: Contact Info and Visual */}
        <div className="relative flex flex-col space-y-8">
          <ContactInfoCards />
          <SocialMediaLinks />
        </div>
      </div>

      {/* Bottom section with additional info */}
      <AdditionalInfo />
    </main>
  );
}
