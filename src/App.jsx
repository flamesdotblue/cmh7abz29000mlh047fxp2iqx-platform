import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const PRODUCTS = [
  {
    id: "whole-milk-1L",
    name: "Whole Milk 1L",
    price: 3.49,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    description: "Rich, creamy, and farm-fresh whole milk.",
    tag: "Best Seller",
  },
  {
    id: "skim-milk-1L",
    name: "Skim Milk 1L",
    price: 3.19,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1200&auto=format&fit=crop",
    description: "Light and nutritious with 0% fat.",
    tag: "Low Fat",
  },
  {
    id: "oat-milk-1L",
    name: "Oat Milk 1L",
    price: 4.49,
    image:
      "https://images.unsplash.com/photo-1585218357091-4d9a36f1b86f?q=80&w=1200&auto=format&fit=crop",
    description: "Smooth, barista-friendly plant milk.",
    tag: "Plant-Based",
  },
  {
    id: "almond-milk-1L",
    name: "Almond Milk 1L",
    price: 4.79,
    image:
      "https://images.unsplash.com/photo-1505575972945-28021aa8c1a0?q=80&w=1200&auto=format&fit=crop",
    description: "Delicate nutty taste, no added sugar.",
    tag: "Unsweetened",
  },
  {
    id: "goat-milk-1L",
    name: "Goat Milk 1L",
    price: 5.29,
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop",
    description: "Naturally creamy and easier to digest.",
    tag: "Artisan",
  },
  {
    id: "lactose-free-1L",
    name: "Lactose-Free Milk 1L",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop",
    description: "All the taste, none of the lactose.",
    tag: "Gentle",
  },
];

export default function App() {
  const [cart, setCart] = useState([]); // [{id, qty}]
  const [cartOpen, setCartOpen] = useState(false);

  const cartDetailed = useMemo(() => {
    return cart.map((ci) => {
      const p = PRODUCTS.find((x) => x.id === ci.id);
      return { ...p, qty: ci.qty };
    });
  }, [cart]);

  const cartCount = useMemo(() => cart.reduce((a, b) => a + b.qty, 0), [cart]);
  const subtotal = useMemo(
    () => cartDetailed.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cartDetailed]
  );

  const addToCart = (id) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === id);
      if (exists) return prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p));
      return [...prev, { id, qty: 1 }];
    });
  };

  const incQty = (id) => setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  const decQty = (id) =>
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p))
        .filter((p) => p.qty > 0)
    );
  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  const handleCheckout = () => {
    // Simple mock checkout
    alert("Thank you for your purchase! This is a demo checkout.");
    setCart([]);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar onCartClick={() => setCartOpen(true)} cartCount={cartCount} />
      <Hero onShopClick={() => {
        const el = document.getElementById("products");
        el?.scrollIntoView({ behavior: "smooth" });
      }} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="products">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Fresh Milk Collection</h2>
              <p className="text-neutral-500">Sustainably sourced, delivered chilled to your door.</p>
            </div>
          </div>
          <ProductList products={PRODUCTS} onAddToCart={(p) => { addToCart(p.id); }} />
        </section>
      </main>

      <CartDrawer
        isOpen={cartOpen}
        items={cartDetailed}
        subtotal={subtotal}
        format={(v) => currency.format(v)}
        onClose={() => setCartOpen(false)}
        onInc={(id) => incQty(id)}
        onDec={(id) => decQty(id)}
        onRemove={(id) => removeItem(id)}
        onCheckout={handleCheckout}
      />

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-4 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} MilkyWay Market. All rights reserved.</p>
          <div className="text-sm text-neutral-500">Chilled delivery • 7-day freshness guarantee • Secure checkout</div>
        </div>
      </footer>
    </div>
  );
}
