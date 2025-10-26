import { X, Plus, Minus, Trash2, Truck } from "lucide-react";

export default function CartDrawer({ isOpen, items, subtotal, format, onClose, onInc, onDec, onRemove, onCheckout }) {
  const shipping = subtotal > 50 ? 0 : 4.99;
  const total = subtotal + (items.length > 0 ? shipping : 0);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full sm:max-w-md bg-white border-l shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button className="p-2 rounded-md hover:bg-neutral-100" onClick={onClose} aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        <div className="h-[calc(100%-160px)] overflow-auto p-4 grid gap-4">
          {items.length === 0 ? (
            <div className="text-center text-neutral-500 py-12">Your cart is empty.</div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <div className="h-20 w-20 rounded-lg overflow-hidden border shrink-0">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium leading-tight truncate">{item.name}</p>
                    <p className="font-semibold shrink-0">{format(item.price * item.qty)}</p>
                  </div>
                  <p className="text-xs text-neutral-500">{format(item.price)} each</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="inline-flex items-center rounded-full border">
                      <button className="p-2 hover:bg-neutral-50" onClick={() => onDec(item.id)} aria-label="Decrease quantity">
                        <Minus size={16} />
                      </button>
                      <span className="px-3 text-sm">{item.qty}</span>
                      <button className="p-2 hover:bg-neutral-50" onClick={() => onInc(item.id)} aria-label="Increase quantity">
                        <Plus size={16} />
                      </button>
                    </div>
                    <button className="ml-auto inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-700" onClick={() => onRemove(item.id)}>
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="h-24 border-t p-4 grid gap-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">Subtotal</span>
            <span className="font-medium">{format(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="inline-flex items-center gap-1 text-neutral-600">
              <Truck size={16} /> Shipping {subtotal > 50 ? "(Free)" : ""}
            </span>
            <span className="font-medium">{items.length > 0 ? format(shipping) : format(0)}</span>
          </div>
          <div className="flex items-center justify-between text-base">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">{format(items.length > 0 ? total : 0)}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-4 py-3 text-sm font-medium hover:bg-emerald-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
