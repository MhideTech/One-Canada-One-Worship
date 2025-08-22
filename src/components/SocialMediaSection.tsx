import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Instagram, Twitter, Youtube, Mail, ExternalLink } from "lucide-react";

const SocialMediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      handle: "Miracle Arena for all Nations",
      description: "Daily inspiration and community updates",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-600/10",
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@onecanadaoneworship",
      description: "Behind-the-scenes moments and celebrations",
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-600/10",
    },
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@sacredsteps",
      description: "Quick updates and spiritual reflections",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-400/10",
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "@MiracleArenaCanada",
      description: "Sermons, events, and worship experiences",
      color: "hover:text-red-600",
      bgColor: "hover:bg-red-600/10",
    },
  ];

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Stay Connected with
            <span className="block text-gradient">Our Community</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Follow us on social media for daily inspiration, event updates, and glimpses into our church family life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`group bg-card p-6 rounded-2xl shadow-soft border cursor-pointer transition-all duration-300 hover:shadow-elegant ${social.bgColor}`}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center transition-colors duration-300 ${social.bgColor}`}>
                  <social.icon className={`w-8 h-8 text-primary transition-colors duration-300 ${social.color}`} />
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{social.name}</h3>
                <p className={`text-sm font-medium mb-2 transition-colors duration-300 ${social.color}`}>
                  {social.handle}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {social.description}
                </p>
                
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary group-hover:text-current transition-colors">
                  Follow Us
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;