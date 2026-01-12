import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Trophy, Youtube, Users, Star, Award, Zap } from "lucide-react";

const milestones = [
  {
    year: "2015",
    icon: Zap,
    title: "Journey Begins",
    description: "Started mastering the art of balance training",
  },
  {
    year: "2018",
    icon: Users,
    title: "Coaching Launch",
    description: "Began coaching and transforming athletes worldwide",
  },
  {
    year: "2020",
    icon: Youtube,
    title: "Content Creator",
    description: "Launched YouTube channel to share techniques globally",
  },
  {
    year: "2022",
    icon: Star,
    title: "Viral Success",
    description: "Content reached millions across platforms",
  },
  {
    year: "2023",
    icon: Trophy,
    title: "World Record",
    description: "Achieved Guinness World Record for balance feat",
  },
  {
    year: "2024",
    icon: Award,
    title: "Legacy Grows",
    description: "Expanding brand and impact worldwide",
  },
];

const LegacySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="legacy" className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
            The Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            BUILDING A <span className="gradient-text">LEGACY</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            From humble beginnings to world record holder — the milestones that shaped The Balance Guru
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    className="glass p-6 md:p-8 rounded-2xl group hover:glow-border transition-all duration-300 inline-block"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <span className="font-display text-4xl md:text-5xl text-primary glow-text">
                      {milestone.year}
                    </span>
                    <h3 className="font-display text-2xl text-foreground mt-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 max-w-sm">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <motion.div
                  className="relative z-10 flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full glass-strong flex items-center justify-center glow-border">
                    <milestone.icon className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-2xl md:text-3xl font-display text-foreground mb-6">
            THE JOURNEY CONTINUES...
          </p>
          <motion.div
            className="inline-flex items-center gap-3 text-primary"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm uppercase tracking-widest">Be Part of It</span>
            <span className="text-2xl">→</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacySection;
