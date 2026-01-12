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
  Send,
  Camera,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // Line 1: Linktree to Email
    {
      href: "https://linktr.ee/thebalanceguru?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
      icon: Link2,
      title: "Linktree",
      line: 1,
    },
    {
      href: "https://www.instagram.com/thebalanceguru/",
      icon: Instagram,
      title: "Instagram",
      line: 1,
    },
    {
      href: "https://www.youtube.com/@thebalanceguru",
      icon: Youtube,
      title: "YouTube",
      line: 1,
    },
    {
      href: "https://www.cameo.com/thebalanceguru",
      icon: Camera,
      title: "Cameo",
      line: 1,
    },
    {
      href: "https://www.threads.com/@thebalanceguru",
      icon: MessageCircle,
      title: "Threads",
      line: 1,
    },
    {
      href: "https://x.com/thebalanceguru",
      icon: Twitter,
      title: "X (Twitter)",
      line: 1,
    },
    {
      href: "https://www.facebook.com/travisearlhorn",
      icon: Facebook,
      title: "Facebook",
      line: 1,
    },
    {
      href: "mailto:balanceguru17@gmail.com",
      icon: Mail,
      title: "Email",
      line: 1,
    },
    // Line 2: WhatsApp to Twitch
    {
      href: "https://api.whatsapp.com/send?phone=17256001976",
      icon: MessageCircle,
      title: "WhatsApp",
      line: 2,
    },
    {
      href: "https://discord.gg/ZJhdFKb9",
      icon: MessageSquare,
      title: "Discord",
      line: 2,
    },
    {
      href: "https://www.linkedin.com/in/travis-horn-640107b9",
      icon: Linkedin,
      title: "LinkedIn",
      line: 2,
    },
    {
      href: "https://patreon.com/thebalanceGuru",
      icon: ShoppingCart,
      title: "Patreon",
      line: 2,
    },
    {
      href: "https://venmo.com/thebalanceguru",
      icon: ShoppingCart,
      title: "Venmo",
      line: 2,
    },
    {
      href: "https://pinterest.com/thebalanceguru",
      icon: Link2,
      title: "Pinterest",
      line: 2,
    },
    {
      href: "https://www.twitch.tv/thebalanceguru",
      icon: Twitch,
      title: "Twitch",
      line: 2,
    },
    // Line 3: Rest
    {
      href: "https://the-balance-guru.myshopify.com/",
      icon: ShoppingCart,
      title: "Shopify Store",
      line: 3,
    },
    {
      href: "https://open.spotify.com/user/31q7zliud4rz7wja7si5rp272efe",
      icon: Music,
      title: "Spotify",
      line: 3,
    },
    {
      href: "https://snapchat.com/add/thebalanceguru",
      icon: Camera,
      title: "Snapchat",
      line: 3,
    },
    {
      href: "https://t.me/thebalanceguru",
      icon: Send,
      title: "Telegram",
      line: 3,
    },
    {
      href: "tel:+17256001976",
      icon: Phone,
      title: "Phone",
      line: 3,
    },
  ];

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

          {/* Social Links - 3 Lines */}
          <motion.div
            className="mt-10 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[1, 2, 3].map((lineNum) => (
              <div key={lineNum} className="flex flex-wrap items-center justify-center gap-3">
                {socialLinks
                  .filter((link) => link.line === lineNum)
                  .map((link) => (
                    <motion.a
                      key={link.title}
                      href={link.href}
                      target={link.title === "Email" || link.title === "Phone" ? undefined : "_blank"}
                      rel={link.title === "Email" || link.title === "Phone" ? undefined : "noopener noreferrer"}
                      className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={link.title}
                    >
                      <link.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
              </div>
            ))}
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

          {/* Bio Details */}
          <motion.div
            className="mt-8 text-sm text-muted-foreground max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-primary font-semibold mb-2">World record holder | Veteran | Brand owner | Driven by passion & purpose</p>
            <p>© {currentYear} The Balance Guru. All rights reserved.</p>
            <p className="mt-2">
              <span className="text-primary">Travis Horn</span> • Coach • Trainer • Creator • World Record Holder
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
