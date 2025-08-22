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
        {/* Header */}
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

        {/* Social Media Grid */}
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

        {/* Newsletter Signup */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-subtle p-8 rounded-2xl border text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-muted-foreground mb-6">
              Get weekly inspiration, event announcements, and community highlights delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-colors hover:bg-primary/90 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div> */}

        {/* Social Proof */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12"
        >
          <div className="flex justify-center items-center gap-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2.5k+</div>
              <div className="text-sm">Followers</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm">Community Members</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-sm">Years of Service</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default SocialMediaSection;