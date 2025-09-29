import { useMemo, useState } from "react";
import { categories } from "@/constant/categories";

// Build the exact same display/value format used by Contact's <select>
const makeServiceValue = (srv: {
  name: string;
  price: number;
  options?: string[];
}) => {
  return `${srv.name}${
    srv.options && srv.options.length ? " + " + srv.options.join(" + ") : ""
  } — ${srv.price}€`;
};

const Prices = () => {
  const [catIdx, setCatIdx] = useState<number>(0);
  const subcats = categories[catIdx]?.subcategories ?? [];
  const [subIdx, setSubIdx] = useState<number>(0);

  const handlePickCategory = (idx: number) => {
    setCatIdx(idx);
    setSubIdx(0);
  };

  const handlePickSub = (idx: number) => {
    setSubIdx(idx);
    // On small screens, scroll to the services list after selection
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia('(max-width: 767px)').matches) {
      // wait for list to render
      setTimeout(() => {
        const el = document.getElementById('services-list');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  };

  const currentSub = useMemo(() => subcats[subIdx], [subIdx, subcats]);

  // When user clicks "Choisir" on a service: go to #contact and set the select value
  const handleChoose = (srv: {
    name: string;
    price: number;
    options?: string[];
  }) => {
    const val = makeServiceValue(srv);

    // Build a payload with richer info
    const detail = {
      name: srv.name,
      price: srv.price,
      options: srv.options || [],
      time: (srv as any).time || "",
      desc: (srv as any).desc || "",
      category: categories[catIdx]?.name || "",
      subcategory: currentSub?.name || "",
      display: val,
    };

    try {
      sessionStorage.setItem("selectedService", JSON.stringify(detail));
    } catch {}

    // Notify other parts of the app (Booking) that a service is selected
    window.dispatchEvent(new CustomEvent("service:selected", { detail }));

    // Navigate / scroll to the booking section for confirmation
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      if (location.hash !== "#booking") {
        location.hash = "booking";
      }
    }
  };

  return (
    <section
      id="prices"
      className="pt-16 bg-gradient-to-r from-[#fff4e3] to-[#fde8c8] scroll-mt-4 md:scroll-mt-8"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold mb-4">
          Choisissez votre prestation
        </h2>

        {/* Top categories – horizontal */}
        <div className="-mx-4 px-4 overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {categories.map((c, i) => (
              <button
                key={`${c.name}-${i}`}
                onClick={() => handlePickCategory(i)}
                className={
                  "flex-shrink-0 rounded-xl border px-4 py-3 text-sm md:text-base shadow-sm transition " +
                  (i === catIdx
                    ? "bg-white border-amber-400 ring-2 ring-amber-300/60"
                    : "bg-amber-50/60 hover:bg-white/70 border-amber-200")
                }
                aria-pressed={i === catIdx}
              >
                <div className="font-medium">{c.name}</div>
                {c.desc ? (
                  <div className="text-[11px] opacity-70 leading-tight">
                    {c.desc}
                  </div>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        {/* Body: left subcategories + middle services */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] gap-6">
          {/* Left – subcategories vertical */}
          <aside className="bg-white/70 rounded-xl border border-amber-200 p-2 md:p-3">
            <ul className="divide-y divide-amber-100">
              {subcats.map((s, i) => (
                <li key={`${s.name}-${i}`}>
                  <button
                    onClick={() => handlePickSub(i)}
                    className={
                      "w-full text-left px-3 py-3 md:py-3.5 transition rounded-lg " +
                      (i === subIdx
                        ? "bg-amber-50 ring-1 ring-amber-300"
                        : "hover:bg-amber-50/60")
                    }
                    aria-pressed={i === subIdx}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-medium">
                        {s.name || "Sans titre"}
                      </span>
                      <span className="text-xs opacity-70">
                        {s.services?.length ?? 0}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Middle – services list */}
          <main id="services-list" className="bg-white/70 rounded-xl border border-amber-200 scroll-mt-20">
            <div className="px-4 md:px-6 py-4 border-b border-amber-100">
              <h3 className="text-lg md:text-xl font-semibold">
                {currentSub?.name || "Services"}
              </h3>
            </div>

            {currentSub?.services?.length ? (
              <ul className="divide-y divide-amber-100">
                {currentSub.services.map((srv, idx) => (
                  <li
                    key={`${srv.name}-${srv.price}-${idx}`}
                    className="px-4 md:px-6 py-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="font-medium leading-6 truncate">
                          {srv.name}
                        </div>
                        <div className="mt-1 space-y-1 text-sm text-slate-600">
                          {srv.options?.length ? (
                            <div className="space-y-0.5">
                              {srv.options.map((opt, oi) => (
                                <div
                                  key={oi}
                                  className="flex items-center gap-1"
                                >
                                  <span className="opacity-70">+</span>
                                  <span>{opt}</span>
                                </div>
                              ))}
                            </div>
                          ) : null}
                          {srv.desc ? (
                            <div className="opacity-70">{srv.desc}</div>
                          ) : null}
                          {srv.time ? <div>~ {srv.time}</div> : null}
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end gap-2">
                        <div className="font-semibold whitespace-nowrap">
                          {srv.price.toLocaleString("fr-FR", {
                            style: "currency",
                            currency: "EUR",
                          })}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleChoose(srv)}
                          aria-label={`Choisir ${makeServiceValue(srv)}`}
                          className="px-2 py-1 text-xs rounded border bg-white hover:bg-amber-50 active:translate-y-px border-amber-300"
                        >
                          Choisir
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-6 text-slate-600">
                Aucun service pour l’instant.
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default Prices;
