import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Clock,
  Calendar,
  Car,
  Coffee,
  Accessibility,
} from "lucide-react";

const EventLocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const eventDetails = [
    {
      icon: Calendar,
      title: "Event Dates",
      detail: "Sunday, September 21, 2025 ",
      subtitle: "3:00 PM - 7:00 PM",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Toronto, Canada",
      subtitle:
        "Mel Lastman Square, 5100 Yonge St, North York, Toronto, Canada.",
    }
  ];

  const amenities = [
    { icon: Car, label: "Paid Parking" },
    { icon: Coffee, label: "Refreshments" },
    { icon: Accessibility, label: "Accessible" },
  ];

  return (
    <section className="py-24 bg-[#F4F5F6]" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Join Us at the
            <span className="block text-gradient">One Canada, One Worship</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A beautiful, accessible and transforming event in the heart of Toronto, perfect
            for fellowship and spiritual renewal.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Map and Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Interactive Map Placeholder */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant border bg-muted">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                  <div className="text-center w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.7225281780197!2d-79.41722326345496!3d43.767564274779886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d0006f8313f%3A0xd0a4390b103102e6!2sMel%20Lastman%20Square!5e1!3m2!1sen!2sng!4v1755688370369!5m2!1sen!2sng"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Address Card Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-soft border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Mel Lastman Square</div>
                    <div className="text-sm text-muted-foreground">
                      5100 Yonge St, North York, Toronto, Canada.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {amenities.map((amenity, index) => (
                <div
                  key={amenity.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50"
                >
                  <amenity.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium">{amenity.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {eventDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      {detail.title}
                    </h3>
                    <div className="text-xl font-bold text-primary mb-1">
                      {detail.detail}
                    </div>
                    <p className="text-muted-foreground">{detail.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Directions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-subtle p-6 rounded-2xl border"
            >
              <h3 className="font-semibold text-lg mb-3">Getting Here</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Located in the heart of Toronto with easy access</p>
                <p>• Limited paid parking available</p>
                <p>• Fully accessible entrance and facilities</p>
                <p>• Meals and refreshments available</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventLocationSection;
