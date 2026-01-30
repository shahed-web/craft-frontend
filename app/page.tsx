import ContactSection from "@/components/contact/ContactSection";
import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";
import Hero from "@/components/home/Hero";
import ProductSection from "@/components/home/ProductSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
