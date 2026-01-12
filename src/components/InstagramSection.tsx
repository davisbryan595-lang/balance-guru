import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl glass-strong mb-8 pulse-glow"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Instagram className="w-10 h-10 text-primary" />
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
              FOLLOW THE
              <br />
              <span className="gradient-text">@THEBALANCEGURU</span>
            </h2>

            <p className="mt-6 text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0">
              Join the community. Get daily inspiration, training tips, behind-the-scenes 
              content, and witness the impossible become possible.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                asChild
                className="group"
              >
                <a
                  href="https://www.instagram.com/thebalanceguru/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Follow on Instagram
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              className="mt-12 flex justify-center lg:justify-start gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="font-display text-4xl text-primary">100K+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl text-primary">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Posts</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl text-primary">50M+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Views</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Instagram Preview Cards */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Floating cards effect */}
              <motion.div
                className="absolute -top-8 -left-8 w-48 h-48 glass rounded-2xl overflow-hidden border-2 border-primary/30 hidden lg:block"
                animate={{ y: [0, -15, 0], rotate: [-5, -3, -5] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                  <Instagram className="w-12 h-12 text-primary/50" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 w-40 h-40 glass rounded-2xl overflow-hidden border-2 border-primary/30 hidden lg:block"
                animate={{ y: [0, 15, 0], rotate: [5, 3, 5] }}
                transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-primary/50" />
                </div>
              </motion.div>

              {/* Main Instagram embed placeholder */}
              <motion.div
                className="relative glass-strong rounded-2xl p-8 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-square max-w-md mx-auto flex flex-col items-center justify-center gap-6 border-2 border-dashed border-primary/30 rounded-xl">
                  <Instagram className="w-16 h-16 text-primary" />
                  <div>
                    <p className="font-display text-2xl text-foreground">@thebalanceguru</p>
                    <p className="text-muted-foreground mt-2">Live feed coming soon</p>
                  </div>
                  <Button variant="heroOutline" size="sm" asChild>
                    <a
                      href="https://www.instagram.com/thebalanceguru/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Profile
                    </a>
                  </Button>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 -z-10 bg-primary/5 blur-3xl rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
