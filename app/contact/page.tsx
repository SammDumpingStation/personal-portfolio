import Hero from "@/components/layout/Hero";
import ContactInput from "./sections/ContactInput";

const Contact = () => {
  return (
    <section className="space-y-6 mb-16">
      <Hero
        title="Get In"
        highlightedTitle="Touch"
        subtitle="Whether you're looking to discuss a new project, seek advice, or
        collaborate, I'm always excited to connect and explore new
        possibilities."
        otherStyles=""
      />
      <div className="flex items-center justify-center space-x-4 px-4">
        <span className="flex-grow border-t border-ugray-200 max-w-[338px]"></span>
        <span className="text-lg font-semibold">Or</span>
        <span className="flex-grow border-t border-ugray-200 max-w-[338px]"></span>
      </div>
      <div className="w-full px-4">
        <ContactInput />
      </div>
    </section>
  );
};

export default Contact;
