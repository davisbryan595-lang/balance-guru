import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CreditCard, Truck, Check, ShoppingBag, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type Step = "shipping" | "payment" | "confirmation";

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<Step>("shipping");
  const [isProcessing, setIsProcessing] = useState(false);

  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    name: "",
  });

  const shipping = 9.99;
  const tax = getCartTotal() * 0.08;
  const total = getCartTotal() + shipping + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep("confirmation");
      clearCart();
      toast({
        title: "Order Confirmed!",
        description: "Thank you for your purchase. Check your email for confirmation.",
      });
    }, 2500);
  };

  if (items.length === 0 && currentStep !== "confirmation") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-24 h-24 rounded-full glass flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-muted-foreground" />
          </div>
          <h2 className="font-display text-3xl text-foreground mb-4">
            Your cart is empty
          </h2>
          <p className="text-muted-foreground mb-8">
            Add some products before checking out
          </p>
          <Button variant="hero" onClick={() => navigate("/shop")}>
            Browse Products
          </Button>
        </motion.div>
      </div>
    );
  }

  const steps = [
    { id: "shipping", label: "Shipping", icon: Truck },
    { id: "payment", label: "Payment", icon: CreditCard },
    { id: "confirmation", label: "Confirm", icon: Check },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() =>
                currentStep === "shipping"
                  ? navigate("/shop")
                  : setCurrentStep("shipping")
              }
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </motion.button>

            <a href="/" className="font-display text-2xl text-primary">
              THE BALANCE GURU
            </a>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center gap-2 ${
                      currentStep === step.id
                        ? "text-primary"
                        : steps.findIndex((s) => s.id === currentStep) > index
                        ? "text-primary/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                        currentStep === step.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : steps.findIndex((s) => s.id === currentStep) > index
                          ? "border-primary/50 bg-primary/20"
                          : "border-muted-foreground/30"
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="hidden sm:block font-medium">{step.label}</span>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`w-12 sm:w-20 h-0.5 mx-4 ${
                        steps.findIndex((s) => s.id === currentStep) > index
                          ? "bg-primary"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Forms */}
          <div>
            <AnimatePresence mode="wait">
              {currentStep === "shipping" && (
                <motion.form
                  key="shipping"
                  onSubmit={handleShippingSubmit}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  className="space-y-6"
                >
                  <h2 className="font-display text-3xl text-foreground mb-8">
                    Shipping Information
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input
                        required
                        value={shippingData.firstName}
                        onChange={(e) =>
                          setShippingData({ ...shippingData, firstName: e.target.value })
                        }
                        className="bg-background/50 border-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input
                        required
                        value={shippingData.lastName}
                        onChange={(e) =>
                          setShippingData({ ...shippingData, lastName: e.target.value })
                        }
                        className="bg-background/50 border-primary/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      required
                      value={shippingData.email}
                      onChange={(e) =>
                        setShippingData({ ...shippingData, email: e.target.value })
                      }
                      className="bg-background/50 border-primary/30"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      type="tel"
                      required
                      value={shippingData.phone}
                      onChange={(e) =>
                        setShippingData({ ...shippingData, phone: e.target.value })
                      }
                      className="bg-background/50 border-primary/30"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <Input
                      required
                      value={shippingData.address}
                      onChange={(e) =>
                        setShippingData({ ...shippingData, address: e.target.value })
                      }
                      className="bg-background/50 border-primary/30"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <Input
                        required
                        value={shippingData.city}
                        onChange={(e) =>
                          setShippingData({ ...shippingData, city: e.target.value })
                        }
                        className="bg-background/50 border-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">State</label>
                      <Input
                        required
                        value={shippingData.state}
                        onChange={(e) =>
                          setShippingData({ ...shippingData, state: e.target.value })
                        }
                        className="bg-background/50 border-primary/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">ZIP Code</label>
                      <Input
                        required
                        value={shippingData.zip}
                        onChange={(e) =>
                          setShippingData({ ...shippingData, zip: e.target.value })
                        }
                        className="bg-background/50 border-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Country</label>
                      <Input
                        required
                        value={shippingData.country}
                        onChange={(e) =>
                          setShippingData({ ...shippingData, country: e.target.value })
                        }
                        className="bg-background/50 border-primary/30"
                      />
                    </div>
                  </div>

                  <Button variant="hero" size="lg" type="submit" className="w-full">
                    Continue to Payment
                  </Button>
                </motion.form>
              )}

              {currentStep === "payment" && (
                <motion.form
                  key="payment"
                  onSubmit={handlePaymentSubmit}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  className="space-y-6"
                >
                  <h2 className="font-display text-3xl text-foreground mb-8">
                    Payment Details
                  </h2>

                  <div className="glass-strong rounded-xl p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Card Number
                      </label>
                      <Input
                        required
                        placeholder="1234 5678 9012 3456"
                        value={paymentData.cardNumber}
                        onChange={(e) =>
                          setPaymentData({ ...paymentData, cardNumber: e.target.value })
                        }
                        className="bg-background/50 border-primary/30"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Expiry</label>
                        <Input
                          required
                          placeholder="MM/YY"
                          value={paymentData.expiry}
                          onChange={(e) =>
                            setPaymentData({ ...paymentData, expiry: e.target.value })
                          }
                          className="bg-background/50 border-primary/30"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVC</label>
                        <Input
                          required
                          placeholder="123"
                          value={paymentData.cvc}
                          onChange={(e) =>
                            setPaymentData({ ...paymentData, cvc: e.target.value })
                          }
                          className="bg-background/50 border-primary/30"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name on Card
                      </label>
                      <Input
                        required
                        value={paymentData.name}
                        onChange={(e) =>
                          setPaymentData({ ...paymentData, name: e.target.value })
                        }
                        className="bg-background/50 border-primary/30"
                      />
                    </div>
                  </div>

                  <Button
                    variant="hero"
                    size="lg"
                    type="submit"
                    className="w-full"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="mr-2 w-5 h-5" />
                        Pay ${total.toFixed(2)}
                      </>
                    )}
                  </Button>
                </motion.form>
              )}

              {currentStep === "confirmation" && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Check className="w-12 h-12 text-primary" />
                  </motion.div>

                  <h2 className="font-display text-4xl text-foreground mb-4">
                    Order Confirmed!
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                    Thank you for your order. We've sent a confirmation email to{" "}
                    <span className="text-primary">{shippingData.email}</span>
                  </p>

                  <div className="glass-strong rounded-xl p-6 max-w-sm mx-auto mb-8">
                    <p className="text-muted-foreground mb-2">Order Number</p>
                    <p className="font-display text-2xl text-primary">
                      #TBG{Math.random().toString(36).substr(2, 8).toUpperCase()}
                    </p>
                  </div>

                  <Button variant="hero" onClick={() => navigate("/")}>
                    Continue Shopping
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          {currentStep !== "confirmation" && (
            <motion.div
              className="lg:sticky lg:top-8 h-fit"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="glass-strong rounded-2xl p-6">
                <h3 className="font-display text-2xl text-foreground mb-6">
                  Order Summary
                </h3>

                {/* Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                      className="flex gap-4"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity}
                          {item.selectedSize && ` • ${item.selectedSize}`}
                        </p>
                      </div>
                      <p className="text-foreground font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-display text-xl text-foreground">Total</span>
                    <span className="font-display text-2xl text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
