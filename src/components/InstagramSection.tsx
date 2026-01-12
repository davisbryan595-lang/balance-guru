import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { Instagram } from "lucide-react";

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Reinitialize Elfsight when script loads
    script.onload = () => {
      if (window._elfsight) {
        window._elfsight.forEach((app: any) => {
          app.init();
        });
      }
    };

    return () => {
      // Cleanup is not necessary for this script
    };
  }, []);

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl glass-strong mb-8">
            <Instagram className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            FOLLOW THE
            <br />
            <span className="gradient-text">@THEBALANCEGURU</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-lg mx-auto">
            Join the community. Get daily inspiration, training tips, behind-the-scenes
            content, and witness the impossible become possible.
          </p>
        </motion.div>

        {/* Instagram Feed Embed */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          ref={embedRef}
        >
          <div
            className="elfsight-app-94f43a23-6116-4a5a-ba63-a2914c6e46b6 w-full"
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  );
};

// Declare window type for TypeScript
declare global {
  interface Window {
    _elfsight?: any;
  }
}

export default InstagramSection;
