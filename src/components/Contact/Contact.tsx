import React from "react";
import { categories } from "@/constant/categories";

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const get = (name: string) => {
    const el = form.querySelector<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >(`[name="${name}"]`);
    return el ? el.value.trim() : "";
  };
  let civ = get("civility");
  let name = get("name");
  let service = get("service");
  let datetime = get("datetime");
  if (datetime && datetime.indexOf("T") !== -1) {
    datetime = datetime.replace("T", " ");
  }
  let notes = get("notes");
  const hour = new Date().getHours();
  const greet = hour >= 19 ? "Bonsoir" : "Bonjour";

  const lines: string[] = [];
  lines.push(`${greet}, je souhaiterais réserver chez Bao Beauté 🙂`);

  const fullName = ((civ ? civ + " " : "") + (name || "")).trim();
  if (fullName) lines.push(`👤 Nom : ${fullName}`);
  let svcGroupLabel = "";
  const svcSelect = form.querySelector<HTMLSelectElement>('[name="service"]');
  if (svcSelect) {
    const selected = svcSelect.options[svcSelect.selectedIndex];
    if (
      selected &&
      selected.parentElement &&
      (selected.parentElement as HTMLOptGroupElement).label
    ) {
      svcGroupLabel = (selected.parentElement as HTMLOptGroupElement).label;
    }
  }
  if (service) {
    if (svcGroupLabel) {
      lines.push(`✨ Prestation : ${svcGroupLabel}`);
      lines.push(`• ${service}`);
    } else {
      lines.push(`✨ Prestation : ${service}`);
    }
  }
  if (datetime) lines.push(`📅 Créneau préféré : ${datetime}`);
  if (notes) lines.push(`📝 Remarques : ${notes}`);
  lines.push("");
  lines.push(
    "Pouvez-vous me confirmer la disponibilité par retour de SMS ? Merci beaucoup ! 🙏"
  );
  const body = encodeURIComponent(lines.join("\n"));
  const smsNumber = "+33766350487";
  const uri = "sms:" + smsNumber + "?&body=" + body;
  window.location.href = uri;
}

function Contact() {
  return (
    // <!-- 联系方式 -->
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-[#fff4e3] to-[#fde8c8] scroll-mt-4 md:scroll-mt-8"
    >
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
        <form
          id="booking-form"
          className="bg-white rounded-2xl border p-6 shadow-sm"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold">
            Réservation par formulaire SMS
          </h3>

          <label className="block mt-4 text-sm">
            Nom
            <div className="flex items-center gap-3">
              <select
                name="civility"
                aria-label="Civilité"
                className="mt-1 border rounded-lg p-2 w-24 md:w-28"
                defaultValue="Mme"
              >
                <option value="Mme">Mme</option>
                <option value="M">M</option>
              </select>
              <input
                name="name"
                required
                className="mt-1 w-full border rounded-lg p-2"
                placeholder="Votre nom"
              />
            </div>
          </label>

          <label className="block mt-4 text-sm">
            Prestation
            <select
              name="service"
              className="mt-1 w-full border rounded-lg p-2"
              required
            >
              {categories.map((cat) =>
                cat.subcategories.map((sub) => (
                  <optgroup
                    key={`${cat.name}-${sub.name || "default"}`}
                    label={`${cat.name}${sub.name ? ` — ${sub.name}` : ""}`}
                  >
                    {sub.services.map((srv, idx) => (
                      <option
                        key={`${srv.name}-${srv.price}-${idx}`}
                        value={`${srv.name}${
                          srv.options && srv.options.length
                            ? " + " + srv.options.join(" + ")
                            : ""
                        } — ${srv.price}€`}
                      >
                        {srv.name}
                        {srv.options && srv.options.length
                          ? ` + ${srv.options.join(" + ")}`
                          : ""}
                        {` — ${srv.price}€`}
                      </option>
                    ))}
                  </optgroup>
                ))
              )}
            </select>
          </label>

          <label className="block mt-4 text-sm">
            Créneau préféré
            <input
              name="datetime"
              type="datetime-local"
              className="mt-1 w-full border rounded-lg p-2"
            />
          </label>

          <label className="block mt-4 text-sm">
            Remarques
            <textarea
              name="notes"
              className="mt-1 w-full border rounded-lg p-2"
              rows={3}
              placeholder="Teinte / allergies, etc."
            ></textarea>
          </label>

          <button className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl">
            Envoyer la demande
          </button>
        </form>
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
