import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Achedaway Mini Scraper",
    subtitle: "On-the-Go Heated Muscle Scraping Tool",
    image: "/products/scraper.jpg",
    featured: true,
  },
  {
    title: "Gifts for Her",
    subtitle: "Premium girls wear collection",
    image: "/products/gifts-her.jpg",
    featured: false,
  },
  {
    title: "Gifts for Him",
    subtitle: "Men's performance wear collection",
    image: "/products/gifts-him.jpg",
    featured: false,
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
            Shop the Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            PREMIUM <span className="gradient-text">PRODUCTS</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Curated selection of performance gear and lifestyle products endorsed by The Balance Guru
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              {...product}
              delay={0.1 * index}
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/shop"
              className="group relative inline-block px-8 py-4 font-display text-xl tracking-wider text-primary border-2 border-primary/50 rounded-xl overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
                VIEW ALL PRODUCTS
              </span>
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
