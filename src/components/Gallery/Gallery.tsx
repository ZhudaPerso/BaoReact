const Gallery = () => {
  return (
    // <!-- 作品集 -->
    <section id="gallery" className="py-20 scroll-mt-4 md:scroll-mt-8">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Réalisations récentes
        </h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            className="rounded-2xl object-cover w-full h-56"
            src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop"
            alt="Nail art Bao Beauté Paris"
          />
          <img
            className="rounded-2xl object-cover w-full h-56"
            src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800&auto=format&fit=crop"
            alt="Manucure à Paris – Bao Beauté"
          />
          <img
            className="rounded-2xl object-cover w-full h-56"
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop"
            alt="Extensions de cils – Bao Beauté Paris"
          />
          <img
            className="rounded-2xl object-cover w-full h-56"
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
            alt="Salon de beauté à Paris – Réalisations Bao Beauté"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
