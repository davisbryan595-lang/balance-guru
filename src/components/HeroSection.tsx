import { motion } from "framer-motion";
import { Instagram, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import travisImage from "@/assets/travis-balance.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.builder.io/o/assets%2F5ea4b1680de74be58c62aa3fdc28c495%2F3b04cf555b544360ad5292bbe0c36b84?alt=media&token=967c7887-b4db-4bd1-9f91-3148c37abba2&apiKey=5ea4b1680de74be58c62aa3fdc28c495"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-card/70" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-card/60 to-transparent" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full glow-border">
                Guinness World Record Holder
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <span className="text-foreground">MASTER YOUR</span>
              <br />
              <span className="gradient-text">BALANCE.</span>
              <br />
              <span className="text-foreground">MASTER YOUR</span>
              <br />
              <span className="gradient-text">LIFE.</span>
            </motion.h1>

            <motion.p
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <span className="text-foreground font-semibold">Coach</span> •{" "}
              <span className="text-foreground font-semibold">Trainer</span> •{" "}
              <span className="text-foreground font-semibold">Creator</span> •{" "}
              <span className="text-primary font-semibold">World Record Holder</span>
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={() => navigate("/shop")}
              >
                <ShoppingBag className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Explore Products
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                asChild
              >
                <a
                  href="https://www.instagram.com/thebalanceguru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Follow on Instagram
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [1, 0.5, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
