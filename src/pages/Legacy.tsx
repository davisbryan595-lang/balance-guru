import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegacySection from "@/components/LegacySection";

const Legacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
              The Journey
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl">
              BUILDING A <span className="gradient-text">LEGACY</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              From humble beginnings to world record holder — the milestones that shaped The Balance Guru
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <LegacySection />

      <Footer />
    </div>
  );
};

export default Legacy;
