function Contact() {
  return (
    // <!-- 联系方式 -->
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-[#fff4e3] to-[#fde8c8] scroll-mt-4 md:scroll-mt-8"
    >
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Nous contacter</h2>
          <p className="mt-4 text-slate-600">
            <a className="block" href="tel:+33766350487">
              Tel: +33 7 66 35 04 87
            </a>
          </p>
          <p className="mt-2 text-slate-600">Horaire: 7j/7, 10:00–20:00</p>
          <p className="mt-2 text-slate-600">
            Adresse: 39 Rue Cardinet 75017 Paris
          </p>
        </div>
        <div>
          <a
            className="inline-flex items-center gap-2 mt-3 bg-[#fac570] text-black px-4 py-2 rounded-xl"
            href="https://www.google.com/maps/place/BAO+BEAUT%C3%89/@48.8824818,2.3024393,591m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47e66f476b7e1955:0x25234e653bdd906a!8m2!3d48.8824783!4d2.3050196!16s%2Fg%2F11xvcmfr2q?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ouvrir dans Maps
          </a>
          <div className="flex gap-3 flex-wrap mt-4">
            <a
              href="https://wa.me/33766350487"
              className="bg-emerald-500 text-white px-5 py-3 rounded-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="tel:+33766350487"
              className="bg-slate-900 text-white px-5 py-3 rounded-xl"
            >
              Téléphone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
