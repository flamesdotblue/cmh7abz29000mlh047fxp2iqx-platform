export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-20 sm:pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-medium">Fresh daily • Local farms • 7-day guarantee</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
            Pure, fresh milk delivered to your door
          </h1>
          <p className="mt-4 text-neutral-600">
            Discover dairy and plant-based milk crafted for taste, nutrition, and your morning rituals. Sustainable, chilled, and always delicious.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onShopClick} className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-emerald-700 transition">
              Shop collection
            </button>
            <a href="#benefits" className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium hover:bg-neutral-50 transition">
              Why our milk
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop"
              alt="Fresh milk in glass bottles"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div id="benefits" className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
            <div className="rounded-xl bg-white p-4 border">
              <p className="font-medium">Chilled delivery</p>
              <p className="text-neutral-600">Insulated packaging keeps it fresh.</p>
            </div>
            <div className="rounded-xl bg-white p-4 border">
              <p className="font-medium">Farm to fridge</p>
              <p className="text-neutral-600">Sourced from audited local farms.</p>
            </div>
            <div className="rounded-xl bg-white p-4 border">
              <p className="font-medium">Flexible choices</p>
              <p className="text-neutral-600">Dairy and plant-based varieties.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-2xl bg-neutral-900 text-white p-6 sm:p-8 grid sm:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60">Sustainability</p>
            <p className="mt-2 font-medium">We partner with farms using ethical animal care, water stewardship, and recyclable packaging. Good for you, better for the planet.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-2xl font-semibold">48h</p>
              <p className="text-xs text-white/70">from farm to you</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-2xl font-semibold">100%</p>
              <p className="text-xs text-white/70">recyclable bottles</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-2xl font-semibold">7-day</p>
              <p className="text-xs text-white/70">freshness guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
