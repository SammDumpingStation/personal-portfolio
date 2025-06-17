import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send, User } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Let's <span className="text-primary">Connect</span>
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          Have a project in mind or just want to chat? I'd love to hear from
          you. Whether it's about web development, mobile apps, or tech in
          general, let's start a conversation.
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
          icon={Send}
          iconPlacement="right"
          effect={"expandIcon"}
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
