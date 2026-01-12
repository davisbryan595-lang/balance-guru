import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 400);
          }, 200);
          return 100;
        }
        return prev + 5;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Balance Symbol Animation */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              className="relative z-10"
            >
              {/* Outer ring */}
              <motion.circle
                cx="60"
                cy="60"
                r="55"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                fill="none"
                strokeDasharray="346"
                initial={{ strokeDashoffset: 346 }}
                animate={{ strokeDashoffset: 346 - (346 * progress) / 100 }}
                style={{ filter: "drop-shadow(0 0 10px hsl(var(--primary) / 0.5))" }}
              />
              {/* Balance beam */}
              <motion.line
                x1="20"
                y1="60"
                x2="100"
                y2="60"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: progress / 100, opacity: 1 }}
                style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.6))" }}
              />
              {/* Center point */}
              <motion.circle
                cx="60"
                cy="60"
                r="6"
                fill="hsl(var(--primary))"
                initial={{ scale: 0 }}
                animate={{ scale: progress > 50 ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ filter: "drop-shadow(0 0 12px hsl(var(--primary)))" }}
              />
            </svg>
            
            {/* Glow effect */}
            <div className="absolute inset-0 blur-2xl opacity-30 bg-primary rounded-full" />
          </motion.div>

          {/* Logo Text */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="font-display text-4xl md:text-5xl tracking-wider glow-text text-primary">
              THE BALANCE GURU
            </h1>
            <p className="mt-2 text-muted-foreground text-sm tracking-[0.3em] uppercase">
              Loading Experience
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="mt-8 w-48 h-0.5 bg-secondary rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Progress percentage */}
          <motion.span
            className="mt-4 font-display text-2xl text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
