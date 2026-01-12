import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Youtube, ExternalLink, Eye, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: "1",
    title: "Thoughts of Life",
    thumbnail: "https://cdn.builder.io/api/v1/image/assets%2F8b84be17aad14310b285d25f23a3235d%2F3ac3a1b0fc5847aab365b95738f9631b?format=webp&width=800",
    views: "2.5M",
    duration: "12:34",
    description: "Watch me break the Guinness World Record for the most incredible balance feat ever attempted.",
    featured: true,
    youtubeId: "MJyKIsdFFWE",
  },
  {
    id: "2",
    title: "5 Balance Exercises for Beginners",
    thumbnail: "https://img.youtube.com/vi/L3hjBovlaxk/maxresdefault.jpg",
    views: "850K",
    duration: "8:21",
    description: "Perfect your foundation with these essential balance techniques.",
    featured: false,
    youtubeId: "L3hjBovlaxk",
  },
  {
    id: "3",
    title: "Behind the Scenes: Training Day",
    thumbnail: "https://img.youtube.com/vi/2wHXYg3230I/maxresdefault.jpg",
    views: "1.2M",
    duration: "15:47",
    description: "A day in the life of The Balance Guru - see my training routine.",
    featured: false,
    youtubeId: "2wHXYg3230I",
  },
  {
    id: "4",
    title: "Impossible Balance Tricks Explained",
    thumbnail: "https://img.youtube.com/vi/k0rlx4lpMlc/maxresdefault.jpg",
    views: "980K",
    duration: "10:15",
    description: "Breaking down the physics behind seemingly impossible feats.",
    featured: false,
    youtubeId: "k0rlx4lpMlc",
  },
];

const VideoCard = ({ video, index }: { video: typeof videos[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative group cursor-pointer ${video.featured ? "md:col-span-2 md:row-span-2" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative overflow-hidden rounded-2xl glass-strong ${
          video.featured ? "h-[400px] md:h-[500px]" : "h-[250px] md:h-[280px]"
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Thumbnail */}
        <div className="absolute inset-0">
          <motion.img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        {/* Play Button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          <motion.div
            className={`${video.featured ? "w-24 h-24" : "w-16 h-16"} rounded-full glass-strong flex items-center justify-center border-2 border-primary/50 group-hover:border-primary transition-colors`}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <Play className={`${video.featured ? "w-10 h-10" : "w-6 h-6"} text-primary fill-primary ml-1`} />
          </motion.div>
        </motion.div>

        {/* Featured Badge */}
        {video.featured && (
          <motion.div
            className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Award className="w-4 h-4" />
            Featured
          </motion.div>
        )}

        {/* Duration */}
        <div className="absolute top-4 right-4 px-2 py-1 bg-background/80 rounded text-sm font-medium flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {video.duration}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
            <Eye className="w-4 h-4" />
            {video.views} views
          </div>
          <h3 className={`font-display ${video.featured ? "text-2xl md:text-3xl" : "text-xl"} text-foreground leading-tight`}>
            {video.title}
          </h3>
          {video.featured && (
            <p className="mt-2 text-muted-foreground hidden md:block">
              {video.description}
            </p>
          )}
        </div>

        {/* Glow border */}
        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-500" />
      </motion.div>
    </motion.div>
  );
};

const YouTubeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.1) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl glass-strong mb-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Youtube className="w-10 h-10 text-primary" />
          </motion.div>

          <span className="block px-4 py-2 mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-primary">
            YouTube Content
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            WATCH THE <span className="gradient-text">IMPOSSIBLE</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            From world record attempts to training tutorials — dive into exclusive content from The Balance Guru
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button variant="hero" size="lg" asChild className="group">
            <a
              href="https://youtube.com/@thebalanceguru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Subscribe on YouTube
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;
