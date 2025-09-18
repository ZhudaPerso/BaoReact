function Services() {
  return (
    // <!-- 服务 -->
    <section id="services" className="py-20 scroll-mt-4 md:scroll-mt-8">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Prestations populaires
        </h2>
        <p className="mt-2 text-slate-600">
          Tous les prix incluent les soins de base et la désinfection.
        </p>
        <p className="mt-1 text-slate-600">
          Bao Beauté à Paris propose des prestations de{" "}
          <strong>manucure</strong> et <strong>nail art</strong>, ainsi que des{" "}
          <strong>extensions de cils</strong> et des <strong>soins</strong> dans
          un <strong>salon de beauté</strong> accueillant.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Gel couleur unie</h3>
            <p className="mt-2 text-slate-600">
              Brillance élevée, tenue 3–4 semaines.
            </p>
            <div className="mt-4 text-2xl font-bold">€38</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Mise en forme + ramollissement + retrait des cuticules</li>
              <li>Base + couleur + finition</li>
            </ul>
            <a
              href="#booking"
              className="mt-6 inline-block bg-[#fac570] text-black px-4 py-2 rounded-lg"
            >
              Réserver
            </a>
          </div>
          <div className="rounded-2xl border p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">French (ligne du sourire)</h3>
            <p className="mt-2 text-slate-600">
              ClassNameique, illumine les mains, adapté à toutes les occasions.
            </p>
            <div className="mt-4 text-2xl font-bold">€45</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Ligne du sourire personnalisée</li>
              <li>Base laiteuse / transparente au choix</li>
            </ul>
            <a
              href="#booking"
              className="mt-6 inline-block bg-[#fac570] text-black px-4 py-2 rounded-lg"
            >
              Réserver
            </a>
          </div>
          <div className="rounded-2xl border p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">
              Œil de chat / patte de chat
            </h3>
            <p className="mt-2 text-slate-600">
              Effet magnétique tridimensionnel, discret et lumineux.
            </p>
            <div className="mt-4 text-2xl font-bold">€48</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Nombreuses couleurs</li>
              <li>Possibilité d’accent/ongle en contraste</li>
            </ul>
            <a
              href="#booking"
              className="mt-6 inline-block bg-[#fac570] text-black px-4 py-2 rounded-lg"
            >
              Réserver
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
