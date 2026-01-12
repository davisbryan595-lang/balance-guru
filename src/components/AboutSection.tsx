import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Youtube, Users, Target } from "lucide-react";
import travisImage from "@/assets/travis-balance.png";

const stats = [
  { icon: Trophy, label: "World Records", value: 1, suffix: "+" },
  { icon: Youtube, label: "Content Creator", value: null, suffix: "Active" },
  { icon: Users, label: "People Trained", value: 1000, suffix: "+" },
  { icon: Target, label: "Years Experience", value: 10, suffix: "+" },
];

// Counter Component for animated numbers
const AnimatedCounter = ({ target, isInView, delay, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round((duration * 1000) / frameDuration);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.floor(progress * target);
      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(timer);
        setCount(target);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span className="font-display text-3xl text-foreground">
      {count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
          {/* Image Side */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* 3D frame effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <div className="absolute -inset-2 bg-card rounded-xl" />
              
              <div className="relative glass-strong rounded-xl overflow-hidden p-2">
                <motion.img
                  src="https://cdn.builder.io/api/v1/image/assets%2F86d69472a8b84fc88a12f6a99124927a%2F91aa7f06c0a4425ead2244235fab3425?format=webp&width=800"
                  alt="Travis Horn - The Balance Guru"
                  className="w-full h-auto rounded-lg transition-all duration-700"
                  whileHover={{ scale: 1.02 }}
                />
                
                {/* Yellow accent border */}
                <div className="absolute inset-0 border-2 border-primary/30 rounded-xl pointer-events-none" />
              </div>

              {/* Floating accent */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-primary rounded-xl"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <motion.span
                className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                About Travis
              </motion.span>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
                THE MAN BEHIND
                <br />
                <span className="gradient-text">THE BALANCE</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Travis Horn isn't just a coach—he's a <span className="text-foreground font-medium">phenomenon</span>. 
                With a Guinness World Record under his belt and years of dedicated training, 
                he's redefined what's possible in the realm of balance and performance.
              </p>
              <p>
                As a <span className="text-primary">YouTuber</span> and content creator, Travis shares his journey, 
                techniques, and the philosophy that drives elite performance. His coaching has 
                transformed athletes and everyday individuals alike.
              </p>
              <p>
                From impossible feats to coaching breakthroughs, Travis embodies 
                <span className="text-foreground font-medium"> dedication, precision, and the relentless pursuit of excellence</span>.
              </p>
            </div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass p-6 rounded-xl text-center group hover:glow-border transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div>
                    {stat.value !== null ? (
                      <AnimatedCounter
                        target={stat.value}
                        isInView={isInView}
                        delay={0.6 + index * 0.1}
                        suffix={stat.suffix}
                      />
                    ) : (
                      <div className="font-display text-3xl text-foreground">{stat.suffix}</div>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
