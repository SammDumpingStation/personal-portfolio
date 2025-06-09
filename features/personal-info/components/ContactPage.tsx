import { Button } from "@/components/ui/button";
import { Mail, Send, MessageSquare, User, Clock } from "lucide-react";
import { contactInfo, socialLinks } from "../data/personal-info-data";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column: Contact Form */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Let's <span className="text-primary">Connect</span>
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Have a project in mind or just want to chat? I'd love to hear
                from you. Whether it's about web development, mobile apps, or
                tech in general, let's start a conversation.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 size-4 text-muted-foreground" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      className="w-full rounded-lg border border-input bg-background px-10 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 size-4 text-muted-foreground" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="w-full rounded-lg border border-input bg-background px-10 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    className="w-full rounded-lg border border-input bg-background px-10 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 size-4 text-muted-foreground" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    className="w-full rounded-lg border border-input bg-background px-10 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 size-4 text-muted-foreground" />
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    className="w-full rounded-lg border border-input bg-background px-10 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size={"custom"}
                className="w-full px-6 py-3"
              >
                Send Message
                <Send className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Right Column: Contact Info and Visual */}
          <div className="relative flex flex-col space-y-8">
            {/* Contact Information Cards */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Get in Touch</h2>
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-start gap-4 rounded-lg border bg-card p-4 ">
                      <div className="flex size-10 items-center justify-center rounded-full btn-tilt-group btn-style">
                        <info.icon className="" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            {info.label}
                          </span>
                        </div>
                        <p className="text-sm font-medium">{info.value}</p>
                        <p className="text-xs text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="relative flex-1 overflow-hidden rounded-lg border bg-gradient-to-br from-primary/5 to-primary/10 min-h-[300px]">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
              <div className="relative flex h-full items-center justify-center p-8">
                <div className="text-center space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Let's Connect</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">
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
                          className="size-8 transition-transform group-hover:scale-110"
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
          </div>
        </div>

        {/* Bottom section with additional info */}
        <div className="mt-12 border-t pt-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-2 group">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full btn-tilt-group btn-style">
                <Clock className="size-6 " />
              </div>
              <h3 className="font-semibold">Quick Response</h3>
              <p className="text-sm text-muted-foreground">
                I typically respond to messages within a few hours during
                business days.
              </p>
            </div>
            <div className="text-center space-y-2 group">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full btn-tilt-group btn-style">
                <MessageSquare className="size-6" />
              </div>
              <h3 className="font-semibold">Free Consultation</h3>
              <p className="text-sm text-muted-foreground">
                Let's discuss your project requirements and how I can help you
                achieve your goals.
              </p>
            </div>
            <div className="text-center space-y-2 group">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full btn-tilt-group btn-style">
                <User className="size-6" />
              </div>
              <h3 className="font-semibold">Personal Touch</h3>
              <p className="text-sm text-muted-foreground">
                Every project gets my full attention and dedication to deliver
                exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
