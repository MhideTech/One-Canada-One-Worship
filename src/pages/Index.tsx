import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Countdown from "@/components/Countdown";
import EventLocationSection from "@/components/EventLocationSection";
import PhotoGallery from "@/components/PhotoGallery";
import ContactForm from "@/components/ContactForm";
import SocialMediaSection from "@/components/SocialMediaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <Countdown />
      <EventLocationSection />
      <PhotoGallery />
      <ContactForm />
      <SocialMediaSection />
      <Footer />
    </div>
  );
};

export default Index;
