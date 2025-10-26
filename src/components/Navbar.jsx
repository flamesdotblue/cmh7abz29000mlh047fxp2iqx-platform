import { ShoppingCart, Droplets, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onCartClick, cartCount }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <Droplets size={18} />
          </div>
          <span className="font-semibold tracking-tight">MilkyWay Market</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#products" className="hover:text-neutral-900">Shop</a>
          <a href="#benefits" className="hover:text-neutral-900">Benefits</a>
          <a href="#about" className="hover:text-neutral-900">About</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onCartClick}
            className="relative inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 transition"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 min-w-[20px] rounded-full bg-emerald-500 text-white text-xs grid place-items-center px-1">
                {cartCount}
              </span>
            )}
          </button>

          <button className="md:hidden p-2 rounded-md hover:bg-neutral-100" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 grid gap-2 text-sm">
            <a href="#products" className="py-2" onClick={() => setOpen(false)}>Shop</a>
            <a href="#benefits" className="py-2" onClick={() => setOpen(false)}>Benefits</a>
            <a href="#about" className="py-2" onClick={() => setOpen(false)}>About</a>
          </div>
        </div>
      )}
    </header>
  );
}
