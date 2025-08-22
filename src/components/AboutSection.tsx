import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Lightbulb } from "lucide-react";
import aboutImage from "@/assets/about.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Heart,
      title: "Heartfelt Worship",
      description: "Experience authentic worship that touches the soul and connects hearts to the divine."
    },
    {
      icon: Users,
      title: "Strong Community",
      description: "Build lasting relationships with fellow believers in a welcoming and supportive environment."
    },
    {
      icon: Lightbulb,
      title: "Spiritual Growth",
      description: "Discover practical ways to deepen your faith and live out your purpose with intention."
    }
  ];

  return (
    <section className="py-24 gradient-subtle" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={aboutImage}
                alt="Community gathering outside church"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-soft border"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">100K+</div>
                <div className="text-sm text-muted-foreground">
                  Lives Transformed
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl font-heading font-bold capitalize"
              >
                ABOUT
                <span className="block text-gradient capitalize">
                  One Canada One Worship
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                One Canada One Worship is a nationwide movement uniting
                believers across provinces, cultures, and denominations in a
                powerful expression of worship and prayer. Our mission is simple
                yet profound: to gather Canadians as one body, lifting up the
                name of Jesus in unity and love.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Through worship events, national days of prayer, and
                colaborative initiatives, we seek to ignite a spiritual
                awakening across Canada — from coast to coast. We believe that
                as we come together in humility and faith, God wi l heal our
                land and reveal His purpose for our nation.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Whether you're a church leader, a worshipper, or someone seeking
                hope, you are welcome here. Join us as we declare one faith, one
                voice, and one heart for Canada.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                One Canada. One Worship. One God.*
              </motion.p>
            </div>

            {/* Features */}
            {/* <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;