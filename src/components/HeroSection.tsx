import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import heroText from "@/assets/hero-text-2.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={logo} alt="" className="z-50 absolute top-2 w-20 left-2 md:top-5 md:w-28 md:left-5" />

      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful church interior with warm lighting"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" /> */}
        {/* <div className="absolute inset-0 gradient-hero opacity-20" /> */}
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/80 border border-primary text-white/90 font-medium mb-8"
          >
            <Calendar className="w-4 h-4" />
            <span>September 21, 2025</span>
          </motion.div>

          {/* <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
          >
            <span className="block">One Canada</span>
            <span className="block text-gradient">One Worship</span>
          </motion.h1> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-64 mb-5"
          >
            <img src={heroText} alt="" className="h-full mx-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Join us for a transformative day of worship, fellowship, and
            spiritual renewal. Experience the power of community and discover
            your next steps in faith.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-10"
          >
            <MapPin className="w-4 h-4" />
            <span>Toronto, Canada</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="lg" className="group">
              <a
                href="https://www.eventbrite.com/e/1481832694479?aff=oddtdtcreator"
                target="_blank"
              >
                Register Now
              </a>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-foreground hover:bg-white/80"
            >
              <a href="https://forms.gle/gZd1sVfnWTSkQha68">Become a Vendor</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-20 h-20 gradient-primary rounded-full opacity-20 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-10 w-32 h-32 bg-primary-glow rounded-full opacity-10 blur-2xl"
      />
    </section>
  );
};

export default HeroSection;
