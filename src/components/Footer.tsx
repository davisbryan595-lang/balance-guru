import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Mail,
  MessageCircle,
  Linkedin,
  Music,
  ShoppingCart,
  Twitch,
  MessageSquare,
  Link2,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary glow-text">
              THE BALANCE GURU
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Master Your Balance. Master Your Life.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="https://linktr.ee/thebalanceguru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Linktree"
            >
              <Link2 className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/thebalanceguru/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@thebalanceguru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.threads.com/@thebalanceguru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Threads"
            >
              <MessageCircle className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://x.com/thebalanceguru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="X (Twitter)"
            >
              <Twitter className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/travisearlhorn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="mailto:balanceguru17@gmail.com"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://api.whatsapp.com/send?phone=17256001976"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://discord.gg/ZJhdFKb9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Discord"
            >
              <MessageSquare className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/travis-horn-640107b9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://patreon.com/thebalanceGuru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Patreon"
            >
              <ShoppingCart className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://venmo.com/thebalanceguru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Venmo"
            >
              <ShoppingCart className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://pinterest.com/thebalanceguru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Pinterest"
            >
              <Link2 className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.twitch.tv/thebalanceguru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Twitch"
            >
              <Twitch className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://the-balance-guru.myshopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Shopify Store"
            >
              <ShoppingCart className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://open.spotify.com/user/31q7zliud4rz7wja7si5rp272efe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Spotify"
            >
              <Music className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://snapchat.com/add/thebalanceguru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Snapchat"
            >
              <MessageCircle className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="tel:+17256001976"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {["Home", "About", "Products", "Legacy", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="mt-12 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          />

          {/* Copyright */}
          <motion.div
            className="mt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p>© {currentYear} The Balance Guru. All rights reserved.</p>
            <p className="mt-2">
              <span className="text-primary">Travis Horn</span> • Coach • Trainer • Creator
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  );
};

export default Footer;
