import React from "react";

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
  const lines: string[] = [
    "Bonjour, je souhaite réserver une prestation chez Bao Beauté.",
  ];
  const fullName = ((civ ? civ + " " : "") + (name || "")).trim();
  if (fullName) lines.push("Nom: " + fullName);
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
      lines.push("Prestation: " + svcGroupLabel);
      lines.push(service);
    } else {
      lines.push("Prestation: " + service);
    }
  }
  if (datetime) lines.push("Créneau préféré: " + datetime);
  if (notes) lines.push("Remarques: " + notes);
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
        </div>
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
              >
                <option value="Mme" selected>
                  Mme
                </option>
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
              <optgroup label="Onglerie — Résine">
                <option value="Pose de la résine + SP — 60€">
                  Pose de la résine + SP — 60€
                </option>
                <option value="Pose de la résine + French — 70€">
                  Pose de la résine + French — 70€
                </option>
                <option value="Remplissage résine + SP — 55€">
                  Remplissage résine + SP — 55€
                </option>
                <option value="Remplissage résine + French — 65€">
                  Remplissage résine + French — 65€
                </option>
              </optgroup>
              <optgroup label="Onglerie — Gel">
                <option value="Pose du gel + SP — 70€">
                  Pose du gel + SP — 70€
                </option>
                <option value="Pose du gel + French — 80€">
                  Pose du gel + French — 80€
                </option>
                <option value="Remplissage du gel + SP — 65€">
                  Remplissage du gel + SP — 65€
                </option>
                <option value="Remplissage du gel + French — 75€">
                  Remplissage du gel + French — 75€
                </option>
                <option value="Gainage + SP — 43€">Gainage + SP — 43€</option>
              </optgroup>
              <optgroup label="Soins mains">
                <option value="Pose vernis semi-permanent — 28€">
                  Pose vernis semi-permanent — 28€
                </option>
                <option value="Beauté des mains — 20€">
                  Beauté des mains — 20€
                </option>
                <option value="Beauté des mains + SP — 43€">
                  Beauté des mains + SP — 43€
                </option>
                <option value="Beauté des mains + French — 53€">
                  Beauté des mains + French — 53€
                </option>
              </optgroup>
              <optgroup label="Soins pieds">
                <option value="Pose vernis semi-permanent — 28€">
                  Pose vernis semi-permanent — 28€
                </option>
                <option value="Beauté des pieds — 35€">
                  Beauté des pieds — 35€
                </option>
                <option value="Beauté des pieds + SP — 58€">
                  Beauté des pieds + SP — 58€
                </option>
                <option value="Beauté des pieds + French — 68€">
                  Beauté des pieds + French — 68€
                </option>
              </optgroup>
              <optgroup label="Dépose / Réparation">
                <option value="Dépose vernis semi-permanent — 10€">
                  Dépose vernis semi-permanent — 10€
                </option>
                <option value="Dépose résine / gel — 15€">
                  Dépose résine / gel — 15€
                </option>
                <option value="Réparation ongle cassé (résine / gel) — 5€">
                  Réparation ongle cassé (résine / gel) — 5€
                </option>
              </optgroup>
              <optgroup label="Épilation (femmes)">
                <option value="Sourcils / Lèvre / Menton — 10€">
                  Sourcils / Lèvre / Menton — 10€
                </option>
                <option value="Aisselles — 12€">Aisselles — 12€</option>
                <option value="Bras demi — 12€">Bras demi — 12€</option>
                <option value="Bras complets — 18€">Bras complets — 18€</option>
                <option value="Jambes demi — 18€">Jambes demi — 18€</option>
                <option value="Jambes complètes — 28€">
                  Jambes complètes — 28€
                </option>
                <option value="Visage — 25€">Visage — 25€</option>
                <option value="Maillot simple — 16€">
                  Maillot simple — 16€
                </option>
                <option value="Maillot échancré — 20€">
                  Maillot échancré — 20€
                </option>
                <option value="Maillot semi-intégral — 25€">
                  Maillot semi-intégral — 25€
                </option>
                <option value="Maillot intégral — 35€">
                  Maillot intégral — 35€
                </option>
              </optgroup>
              <optgroup label="Cils / Sourcils">
                <option value="Extensions de cils un par un — 85€">
                  Extensions de cils un par un — 85€
                </option>
                <option value="Remplissage des cils léger — 50€">
                  Remplissage des cils léger — 50€
                </option>
                <option value="Remplissage des cils perdu beaucoup — 60€">
                  Remplissage des cils perdu beaucoup — 60€
                </option>
                <option value="Teinture sourcils ou cils — 20€">
                  Teinture sourcils ou cils — 20€
                </option>
                <option value="Rehaussement des cils — 55€">
                  Rehaussement des cils — 55€
                </option>
              </optgroup>
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
      </div>
    </section>
  );
}

export default Contact;
