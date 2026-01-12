import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

const ProductImageCarousel = ({ images, productName }: ProductImageCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedIndex());
    };

    const onInit = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    const onReInit = () => {
      onInit();
      onSelect();
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("init", onInit);
    emblaApi.on("reInit", onReInit);

    onInit();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("init", onInit);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi]);

  const handlePrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }
  };

  const handleNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }
  };

  const handleDotClick = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative min-w-0 flex-[0_0_100%]"
              >
                <motion.div
                  className="relative w-full aspect-square overflow-hidden bg-card/50 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={image}
                    alt={`${productName} view ${index + 1}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl pointer-events-none" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <motion.button
          onClick={handlePrev}
          disabled={!canScrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-strong enabled:hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          whileHover={canScrollPrev ? { scale: 1.1 } : {}}
          whileTap={canScrollPrev ? { scale: 0.95 } : {}}
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </motion.button>

        <motion.button
          onClick={handleNext}
          disabled={!canScrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-strong enabled:hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          whileHover={canScrollNext ? { scale: 1.1 } : {}}
          whileTap={canScrollNext ? { scale: 0.95 } : {}}
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </motion.button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 z-20 px-4 py-2 glass rounded-full text-sm font-semibold">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <motion.div
          className="flex gap-3 mt-6 overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? "border-primary scale-110"
                  : "border-primary/30 hover:border-primary/60"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {selectedIndex === index && (
                <div className="absolute inset-0 border-2 border-primary rounded-lg" />
              )}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ProductImageCarousel;
