function Booking() {
  return (
    // <!-- 预约CTA -->
    <section
      id="booking"
      className="py-16 bg-gradient-to-r from-[#fff4e3] to-[#fde8c8] scroll-mt-4 md:scroll-mt-8"
    >
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Réserver</h2>
          <h3 className="mt-8 text-2xl md:text-3xl font-semibold">
            Des disponibilités cette semaine ?
          </h3>
          <p className="mt-2 text-slate-700">
            Réservez facilement par WhatsApp ou par téléphone en cliquant sur un
            bouton, ou via le formulaire de réservation SMS ci-dessous.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a
            href="https://wa.me/33766350487"
            className="bg-emerald-500 text-white px-5 py-3 rounded-xl"
            target="_blank"
          >
            WhatsApp
          </a>
          <a
            href="tel:+33766350487"
            className="bg-slate-900 text-white px-5 py-3 rounded-xl"
          >
            Téléphone
          </a>
          <a href="#contact" className="bg-white border px-5 py-3 rounded-xl">
            Formulaire de réservation
          </a>
        </div>
      </div>
    </section>
  );
}

export default Booking;
