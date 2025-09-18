const Reviews = () => {
  return (
    // <!-- 口碑 -->
    <section id="reviews" className="py-20 scroll-mt-4 md:scroll-mt-8">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold">Avis clients</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <figure className="rounded-2xl border p-6 bg-white shadow-sm">
            <blockquote className="text-slate-700">
              “Salon très propre, le French met vraiment les mains en valeur,
              tient encore très bien après trois semaines !”
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">
              — Y. Chen (avis Google)
            </figcaption>
          </figure>
          <figure className="rounded-2xl border p-6 bg-white shadow-sm">
            <blockquote className="text-slate-700">
              “Très attentive, conseils de couleur professionnels, je
              reviendrai !”
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">
              — M. Li (cliente locale)
            </figcaption>
          </figure>
          <figure className="rounded-2xl border p-6 bg-white shadow-sm">
            <blockquote className="text-slate-700">
              “L’effet œil de chat est superbe ! Les photos rendent très bien.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">
              — M. Wang (cliente fidèle)
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
