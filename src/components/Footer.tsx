import { motion } from "framer-motion";
import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Church Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">
              Sacred Steps Church
            </h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              A community built on faith, love, and hope. Join us as we take
              sacred steps together in our journey of spiritual growth.
            </p>
            <div className="flex items-center gap-2 text-secondary-foreground/60">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Serving our community since 2004</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-secondary-foreground/60" />
                <div className="text-sm">
                  <div> Mel Lastman Square,</div>
                  <div className="text-secondary-foreground/60">
                    51100 Yonge St, North York, ON M2N 5V7
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary-foreground/60" />
                <div className="text-sm">(555) 123-4567</div>
              </div> */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary-foreground/60" />
                <div className="text-sm">info@onecanadaoneworship.com</div>
              </div>
            </div>
          </motion.div>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Sunday Service</h4>
            <div className="space-y-2 text-sm">
              <div className="text-secondary-foreground/60">
                Join us for our Sunday Service 
              </div>
              <div className="text-secondary-foreground/80">
                March 15-17, 2024
              </div>
              <div className="text-secondary-foreground/60">
                10800 Weston Road, Vaughan, ON L4L 8L3
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-3 bg-secondary-foreground text-primary rounded-xs font-medium text-sm transition-colors hover:bg-white/90"
            >
              Register Now
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-primary-foreground/20 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © 2025 Sacred Steps Church. All rights reserved.
            </p>
            {/* <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
