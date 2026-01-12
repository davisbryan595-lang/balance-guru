import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const About = () => {
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
              About Travis
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl">
              MEET <span className="gradient-text">THE BALANCE GURU</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the journey, philosophy, and achievements of Travis Horn
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section Content */}
      <AboutSection />

      {/* Additional Info Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="glass p-8 rounded-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-3xl text-primary mb-4">Coaching</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transform your performance through personalized coaching and proven training methods.
              </p>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-display text-3xl text-primary mb-4">Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                Follow along as we share training tips, techniques, and lifestyle insights on our platform.
              </p>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-3xl text-primary mb-4">Legacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building a community of individuals dedicated to excellence and personal growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
