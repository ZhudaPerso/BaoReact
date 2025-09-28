import React from "react";

interface SelectedServicePayload {
  name: string;
  price: number;
  options?: string[];
  time?: string;
  desc?: string;
  category?: string;
  subcategory?: string;
  display?: string; // prebuilt display string like "Name + opts — 60€"
}

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
  let service_name = get("service_name");
  let service_category = get("service_category");
  let service_subcategory = get("service_subcategory");
  let service_price = get("service_price");
  // Service information now comes from hidden inputs (set by selection)
  let service_time = get("service_time");
  let service_desc = get("service_desc");
  let service_options = get("service_options");
  let datetime = get("datetime");
  if (datetime && datetime.indexOf("T") !== -1) {
    datetime = datetime.replace("T", " ");
  }
  let notes = get("notes");
  const hour = new Date().getHours();
  const greet = hour >= 19 ? "Bonsoir" : "Bonjour";

  const lines: string[] = [];
  lines.push(`${greet}, je souhaiterais réserver chez Bao Beauté 🙂\n`);

  const fullName = ((civ ? civ + " " : "") + (name || "")).trim();
  if (fullName) lines.push(`👤 Nom : ${fullName}\n`);
  // ✨ Prestation section, mirroring the UI order
  lines.push(`✨ Prestation:`);
  if (service_category || service_subcategory) {
    lines.push(
      `• ${service_category}${
        service_subcategory ? ` — ${service_subcategory}` : ""
      }`
    );
  }
  if (service_name) lines.push(`• ${service_name}`);
  if (service_options) lines.push(`• Options: ${service_options}`);
  if (service_desc) lines.push(`• Détails: ${service_desc}`);
  if (service_time) lines.push(`• Durée: ~ ${service_time}`);
  if (service_price) {
    try {
      const priceNum = Number(service_price);
      const priceFmt = isNaN(priceNum)
        ? service_price
        : new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(priceNum);
      lines.push(`• Prix: ${priceFmt}\n`);
    } catch {
      lines.push(`• Prix: ${service_price}\n`);
    }
  }
  if (datetime) lines.push(`📅 Créneau préféré: ${datetime}\n`);
  if (notes) lines.push(`📝 Remarques: ${notes}`);
  lines.push("");
  lines.push(
    "Pouvez-vous me confirmer la disponibilité par retour de SMS ? Merci beaucoup ! 🙏"
  );
  const body = encodeURIComponent(lines.join("\n"));
  const smsNumber = "+33766350487";
  const uri = "sms:" + smsNumber + "?&body=" + body;
  window.location.href = uri;
}

const Booking = () => {
  const [selected, setSelected] = React.useState<SelectedServicePayload | null>(
    null
  );

  React.useEffect(() => {
    // Load from sessionStorage on mount
    try {
      const raw = sessionStorage.getItem("selectedService");
      if (raw) setSelected(JSON.parse(raw));
    } catch {}

    const onSelected = (e: Event) => {
      const ce = e as CustomEvent<SelectedServicePayload>;
      setSelected(ce.detail);
    };
    window.addEventListener("service:selected", onSelected as EventListener);
    return () =>
      window.removeEventListener(
        "service:selected",
        onSelected as EventListener
      );
  }, []);

  const goToPrices = () => {
    const el = document.getElementById("prices");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      if (location.hash !== "#prices") {
        location.hash = "prices";
      }
    }
  };

  const serviceDisplay = selected
    ? selected.display ||
      `${selected.name}${
        selected.options && selected.options.length
          ? " + " + selected.options.join(" + ")
          : ""
      } — ${selected.price}€`
    : "";

  return (
    // <!-- 预定 -->
    <section
      id="booking"
      className="py-16 bg-gradient-to-r from-[#fff4e3] to-[#fde8c8] scroll-mt-4 md:scroll-mt-8"
    >
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Finalisez votre réservation
          </h2>
        </div>

        <form
          id="booking-form"
          className="bg-white/70 rounded-2xl border p-6 shadow-sm border-amber-200"
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
              // 阻止回车在输入框里触发“跳到下一个输入框”
              e.preventDefault();
            }
          }}
        >
          <h3 className="text-xl font-semibold">
            Réservation par formulaire SMS
          </h3>

          <label className="block mt-4 text-base">
            Nom
            <div className="flex items-center gap-3">
              <select
                name="civility"
                aria-label="Civilité"
                className="mt-1 border rounded-lg p-2 w-24 md:w-28 border-amber-300 text-base"
                defaultValue="Mme"
              >
                <option value="Mme">Mme</option>
                <option value="M">M</option>
              </select>
              <input
                name="name"
                required
                className="mt-1 w-full border rounded-lg p-2 border-amber-300 text-base"
                placeholder="Votre nom"
              />
            </div>
          </label>

          <div className="block mt-4 text-base">
            <div className="flex items-center gap-3">
              <div>Prestation</div>
              <div className="flex-1 flex justify-end items-center">
                <button
                  type="button"
                  onClick={goToPrices}
                  className="inline-flex items-center justify-center w-full text-base px-3 py-1.5 rounded-lg border border-amber-300 bg-white hover:bg-amber-50 active:translate-y-px"
                >
                  Voir nos prestations
                </button>
              </div>
            </div>
            {selected ? (
              <div className="mt-1 w-full border rounded-lg p-3 border-amber-300 bg-white/70">
                {selected.category || selected.subcategory ? (
                  <div className="mt-0.5 text-base text-slate-600">
                    {selected.category}
                    {selected.subcategory ? ` — ${selected.subcategory}` : ""}
                  </div>
                ) : null}
                <div className="font-medium">{selected.name}</div>
                {selected.options && selected.options.length ? (
                  <ul className="mt-1 text-base text-slate-700 list-disc list-inside">
                    {selected.options.map((o, i) => (
                      <li key={i}>+ {o}</li>
                    ))}
                  </ul>
                ) : null}
                {selected.desc ? (
                  <div className="mt-1 text-base opacity-70">
                    {selected.desc}
                  </div>
                ) : null}
                {selected.time ? (
                  <div className="mt-1 text-base">~ {selected.time}</div>
                ) : null}
                <div className="mt-1 font-semibold">
                  {selected.price.toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </div>
              </div>
            ) : (
              <div className="mt-1 w-full border rounded-lg p-3 border-amber-300 bg-white/40 text-base">
                Aucune prestation sélectionnée. Choisissez-en une dans la
                section Prestations.
                <input
                  onClick={goToPrices}
                  type="checkbox"
                  checked={false}
                  className="text-base"
                  required
                />
              </div>
            )}
            {/* Hidden inputs used by handleSubmit to compose the SMS */}
            <input type="hidden" name="service" value={serviceDisplay} />
            <input
              type="hidden"
              name="service_name"
              value={selected?.name || ""}
            />
            <input
              type="hidden"
              name="service_category"
              value={selected?.category || ""}
            />
            <input
              type="hidden"
              name="service_subcategory"
              value={selected?.subcategory || ""}
            />
            <input
              type="hidden"
              name="service_price"
              value={selected ? String(selected.price) : ""}
            />
            <input
              type="hidden"
              name="service_time"
              value={selected?.time || ""}
            />
            <input
              type="hidden"
              name="service_desc"
              value={selected?.desc || ""}
            />
            <input
              type="hidden"
              name="service_options"
              value={(selected?.options || []).join(" + ")}
            />
          </div>

          <label className="block mt-4 text-base">
            Créneau préféré
            <input
              name="datetime"
              type="datetime-local"
              className="mt-1 w-full border rounded-lg p-2 border-amber-300 text-base"
              required
            />
          </label>

          <label className="block mt-4 text-base">
            Remarques
            <textarea
              name="notes"
              className="mt-1 w-full border rounded-lg p-2 border-amber-300 text-base"
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
};

export default Booking;
