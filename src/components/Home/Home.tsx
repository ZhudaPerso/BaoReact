function Home() {
  return (
    <section
      id="home"
      className="relative pt-36 py-3 scroll-mt-4 md:scroll-mt-8"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop"
          alt="nails"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-ink">
            Bao Beauté – Salon de beauté à Paris : manucure, nail art,
            extensions de cils, soins
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Cabine privée à Paris, hygiène rigoureuse et matériaux de qualité.
            Prestations de manucure, nail art, extensions de cils et soins.
            {/* <!-- −10% pour les nouvelles clientes. --> */}
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <a
              href="#booking"
              className="bg-[#fac570] text-black px-5 py-3 rounded-xl shadow hover:bg-[#f0a94a]"
            >
              Réserver en ligne
            </a>
            {/* <!-- <a href="#services" className="px-5 py-3 rounded-xl border border-slate-300 hover:border-[#f6c987]">Voir les
            services</a> --> */}
          </div>
          {/* <!-- <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
          <div className="flex -space-x-2">
            <img className="w-8 h-8 rounded-full border-2 border-white"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="" />
            <img className="w-8 h-8 rounded-full border-2 border-white"
              src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" alt="" />
            <img className="w-8 h-8 rounded-full border-2 border-white"
              src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=200&auto=format&fit=crop"
              alt="" />
          </div>
          <span>300+ avis 5 étoiles de clientes locales</span>
        </div> --> */}
        </div>
        <div className="md:justify-self-end">
          <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop"
              alt="work"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
