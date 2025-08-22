import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import worshipImage from "@/assets/worship-service.jpg";
import worshipImage2 from "@/assets/worship-service-2.jpg";
import worshipImage3 from "@/assets/worship-service-3.jpg";
import worshipImage4 from "@/assets/worship-service-4.jpg";
import worshipImage5 from "@/assets/worship-service-5.jpg";
import recognition from "@/assets/recognition.jpg";
import recognition2 from "@/assets/recognition2.jpg";
import recognition3 from "@/assets/recognition3.jpg";
import exhortation from "@/assets/exhortation.jpg";
import connect from "@/assets/connect.jpg";
import brief from "@/assets/brief.jpg";
import announcement from "@/assets/announcement.jpg";
import { Button } from "./ui/button";

const PhotoGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const photos = [
    {
      src: worshipImage3,
      alt: "Worshippers in an open crusade",
      title: "Divine Connection",
      description: "Immerse yourself in a vibrant atmosphere of faith and devotion",
    },
    {
      src: worshipImage2,
      alt: "Worshippers in an open crusade",
      title: "Gathered in Spirit",
      description: "Feel the power of collective praise and spiritual renewal",
    },
    {
      src: worshipImage4,
      alt: "Worshippers in an open crusade",
      title: "Worship & Praise",
      description: "Experience transformative worship that lifts the spirit",
    },
    {
      src: worshipImage5,
      alt: "Spiritual Celebration",
      title: "Worship & Praise",
      description: "Worship alongside spirit filled choristers with divine ministrations",
    },
    {
      src: worshipImage,
      alt: "Worship service with raised hands",
      title: "Heartfelt Adoration",
      description: "Experience a profound encounter that nourishes your spirit",
    },
    {
      src: brief,
      alt: "Woman holding a mic",
      title: "Spiritual Uplift & Adoration",
      description: "Discover profound moments that elevate your soul",
    },
    {
      src: announcement,
      alt: "Worship service with raised hands",
      title: "Collective Adoration",
      description: "Join us for an inspiring worship experience that elevates every spirit",
    },
    {
      src: exhortation,
      alt: "A man teaching",
      title: "Spiritual Awakening",
      description: "Embrace wisdom that transforms your perspective",
    },
    {
      src: recognition3,
      alt: "A man and a woman smiling and laughing",
      title: "Moment of Reflection",
      description: "Immerse yourself in an atmosphere of peace and spiritual growth",
    },
    {
      src: recognition2,
      alt: "An award presentation",
      title: "Achievement & Recognition",
      description: "Acknowledging hard work and celebrating new beginnings",
    },
    {
      src: recognition,
      alt: "An award presentation",
      title: "Celebrating Success",
      description: "Commemorating a significant accomplishment and dedication",
    },

    {
      src: connect,
      alt: "A man and a woman talking",
      title: "Authentic Connection",
      description: "Experience genuine fellowship and a vibrant spiritual journey",
    },
  ];

  const openLightbox = (photo: any) => {
    setSelectedImage(photo);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-24 bg-background" ref={ref}>
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              Moments of
              <span className="block text-gradient">Faith & Fellowship</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Take a glimpse into our vibrant community life and the beautiful
              moments we share together.
            </motion.p>
          </div>

          {/* Photo Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden shadow-soft cursor-pointer"
                onClick={() => openLightbox(photo)}
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-semibold text-lg mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-white/80">{photo.description}</p>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-subtle p-8 rounded-2xl border max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Be Part of Our Story
              </h3>
              <p className="text-muted-foreground mb-6">
                These moments happen every week in our community. Come and
                create lasting memories while growing in faith together.
              </p>
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
                  <a href="https://forms.gle/gZd1sVfnWTSkQha68">
                    Become a Vendor
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full h-full max-h-screen p-0 bg-black/95 border-none">
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-full max-h-full"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/80">{selectedImage.description}</p>
                </div>
              </motion.div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallery;