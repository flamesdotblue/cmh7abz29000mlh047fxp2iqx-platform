import { Star, Plus } from "lucide-react";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export default function ProductList({ products, onAddToCart }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <article key={p.id} className="group flex flex-col rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
            {p.tag && (
              <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium border">
                {p.tag}
              </span>
            )}
          </div>
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-medium leading-tight">{p.name}</h3>
              <p className="font-semibold">{currency.format(p.price)}</p>
            </div>
            <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{p.description}</p>
            <div className="mt-3 flex items-center gap-1 text-amber-500">
              <Star size={16} fill="#f59e0b" />
              <Star size={16} fill="#f59e0b" />
              <Star size={16} fill="#f59e0b" />
              <Star size={16} fill="#f59e0b" />
              <Star size={16} className="text-amber-500" />
              <span className="ml-2 text-xs text-neutral-500">4.0</span>
            </div>
          </div>
          <div className="p-4 pt-0">
            <button
              onClick={() => onAddToCart(p)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-medium hover:bg-neutral-800 transition"
            >
              <Plus size={16} /> Add to cart
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
