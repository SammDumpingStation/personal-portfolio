import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import { Badge } from "@/components/ui/badge";
import FormInput from "./components/FormInput";

const Contact = () => {
  return (
    <section className="space-y-6 mb-16">
      <Hero
        title="Get In"
        highlightedTitle="Touch"
        subtitle="Whether you're looking to discuss a new project, seek advice, or
        collaborate, I'm always excited to connect and explore new
        possibilities."
        otherStyles="!min-h-[52vh] !justify-end"
      />
      <div className="flex items-center justify-center space-x-4">
        <span className="flex-grow border-t border-ugray-200 max-w-[338px]"></span>
        <span className="text-lg font-semibold">Or</span>
        <span className="flex-grow border-t border-ugray-200 max-w-[338px]"></span>
      </div>
      <FormInput />
    </section>
  );
};

export default Contact;
