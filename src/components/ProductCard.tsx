import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  subtitle: string;
  image: string;
  featured?: boolean;
  delay?: number;
}

const ProductCard = ({ title, subtitle, image, featured = false, delay = 0 }: ProductCardProps) => {
  return (
    <motion.div
      className={`card-3d ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className={`card-3d-inner relative overflow-hidden rounded-2xl glass-strong group cursor-pointer
          ${featured ? "h-[500px] md:h-[600px]" : "h-[350px] md:h-[400px]"}`}
        whileHover={{ 
          rotateY: 5, 
          rotateX: 5, 
          scale: 1.02,
          transition: { duration: 0.4 }
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: "inset 0 0 60px hsl(var(--primary) / 0.3)",
          }}
        />

        {/* Yellow border glow */}
        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-500" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {featured && (
            <motion.span
              className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-primary text-primary-foreground rounded-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.2 }}
            >
              Featured
            </motion.span>
          )}
          
          <motion.h3
            className={`font-display ${featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"} text-foreground leading-tight`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.3 }}
          >
            {title}
          </motion.h3>
          
          <motion.p
            className="mt-2 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.4 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.5 }}
          >
            <Button variant="hero" size={featured ? "lg" : "default"} className="group/btn">
              <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
              Shop Now
            </Button>
          </motion.div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300 rounded-tr-xl" />
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
