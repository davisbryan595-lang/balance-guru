import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { allProducts } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();

  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Product not found</h1>
          <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  // Set default selections
  if (product.sizes && !selectedSize) {
    setSelectedSize(product.sizes[0]);
  }
  if (product.colors && !selectedColor) {
    setSelectedColor(product.colors[0]);
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    toast({
      title: "Added to Cart",
      description: `${quantity}x ${product.title} has been added to your cart.`,
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <button
            onClick={() => navigate("/shop")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Shop
          </button>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Side */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
                <div className="absolute -inset-2 bg-card rounded-xl" />

                <div className="relative glass-strong rounded-xl overflow-hidden p-2">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-xl pointer-events-none" />
                </div>

                {product.featured && (
                  <div className="absolute top-6 right-6 flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    Featured
                  </div>
                )}
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Title */}
              <div>
                <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
                  Product Details
                </span>
                <h1 className="font-display text-5xl leading-tight mb-4">
                  {product.title}
                </h1>
                <p className="text-xl text-muted-foreground">{product.subtitle}</p>
              </div>

              {/* Price */}
              <div>
                <div className="text-5xl font-display text-primary">
                  ${product.price.toFixed(2)}
                </div>
              </div>

              {/* Size Selection */}
              {product.sizes && (
                <div>
                  <label className="block text-lg font-semibold mb-4">Size</label>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <motion.button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                          selectedSize === size
                            ? "bg-primary text-primary-foreground"
                            : "glass hover:bg-primary/20"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && (
                <div>
                  <label className="block text-lg font-semibold mb-4">Color</label>
                  <div className="flex flex-wrap gap-4">
                    {product.colors.map((color) => (
                      <motion.button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold border-2 transition-all ${
                          selectedColor === color
                            ? "border-primary bg-primary/10"
                            : "border-primary/30 hover:border-primary/60"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div
                          className="w-6 h-6 rounded-full border-2 border-current"
                          style={{
                            backgroundColor:
                              color.toLowerCase() === "black"
                                ? "#000"
                                : color.toLowerCase() === "white"
                                ? "#fff"
                                : color.toLowerCase() === "yellow"
                                ? "hsl(48, 100%, 50%)"
                                : color.toLowerCase() === "navy"
                                ? "#001f3f"
                                : color.toLowerCase() === "gray"
                                ? "#6b7280"
                                : color,
                          }}
                        />
                        {color}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="block text-lg font-semibold mb-4">Quantity</label>
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-lg glass flex items-center justify-center font-semibold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    −
                  </motion.button>
                  <div className="w-16 text-center">
                    <span className="font-display text-2xl">{quantity}</span>
                  </div>
                  <motion.button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-lg glass flex items-center justify-center font-semibold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    +
                  </motion.button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full group text-lg py-6"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </motion.div>

              {/* Description */}
              <div className="pt-8 border-t border-primary/20">
                <h3 className="font-display text-xl mb-4">About this product</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description || "This premium product is designed for elite performance and durability. Engineered with the latest technology and crafted with attention to detail, this is the choice of professionals and enthusiasts worldwide."}
                </p>
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">Free Shipping</p>
                  <p className="font-semibold text-foreground">Orders over $100</p>
                </div>
                <div className="glass p-4 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">Easy Returns</p>
                  <p className="font-semibold text-foreground">30-day guarantee</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 border-t border-primary/20">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl mb-12">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts
              .filter(
                (p) =>
                  p.category === product.category && p.id !== product.id
              )
              .slice(0, 4)
              .map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  className="glass-strong rounded-2xl overflow-hidden cursor-pointer group"
                  whileHover={{ y: -5 }}
                  onClick={() => {
                    navigate(`/product/${relatedProduct.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <motion.img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg text-foreground">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-primary font-display text-xl mt-2">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
