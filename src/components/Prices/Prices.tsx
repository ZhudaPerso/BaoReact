const Prices = () => {
  return (
    <section
      id="prices"
      className="py-16 bg-gradient-to-r from-[#fff4e3] to-[#fde8c8] scroll-mt-4 md:scroll-mt-8"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold">Tarifs</h2>
        <div className="mt-6 space-y-6">
          {/* <!-- Onglerie --> */}
          <details className="group rounded-2xl border bg-white/50 p-3">
            <summary className="cursor-pointer select-none text-xl font-semibold flex items-center justify-between">
              Onglerie
              <span className="ml-2 text-sm text-slate-500 group-open:rotate-180 transition">
                ▾
              </span>
            </summary>
            <div className="mt-3 grid md:grid-cols-2 gap-4">
              {/* <!-- Résine --> */}
              <div className="rounded-2xl border bg-white p-4">
                <h4 className="text-lg font-medium">Résine</h4>
                <ul className="mt-3 divide-y">
                  <li className="flex items-start justify-between py-2">
                    <span className="w-full">
                      <span className="font-medium">Pose de la résine</span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + vernis semi-permanent
                        </span>
                        <span className="block text-xs text-slate-500">
                          60€
                        </span>
                      </span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + French
                        </span>
                        <span className="block text-xs text-slate-500">
                          70€
                        </span>
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start justify-between py-2">
                    <span className="w-full">
                      <span className="font-medium">Remplissage résine</span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + vernis semi-permanent
                        </span>
                        <span className="block text-xs text-slate-500">
                          55€
                        </span>
                      </span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + French
                        </span>
                        <span className="block text-xs text-slate-500">
                          65€
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              {/* <!-- Gel --> */}
              <div className="rounded-2xl border bg-white p-4">
                <h4 className="text-lg font-medium">Gel</h4>
                <ul className="mt-3 divide-y">
                  <li className="flex items-start justify-between py-2">
                    <span className="w-full">
                      <span className="font-medium">Pose du gel</span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + vernis semi-permanent
                        </span>
                        <span className="block text-xs text-slate-500">
                          70€
                        </span>
                      </span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + French
                        </span>
                        <span className="block text-xs text-slate-500">
                          80€
                        </span>
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start justify-between py-2">
                    <span className="w-full">
                      <span className="font-medium">Remplissage du gel</span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + vernis semi-permanent
                        </span>
                        <span className="block text-xs text-slate-500">
                          65€
                        </span>
                      </span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + French
                        </span>
                        <span className="block text-xs text-slate-500">
                          75€
                        </span>
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start justify-between py-2">
                    <span className="w-full">
                      <span className="font-medium">Gainage</span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + vernis semi-permanent
                        </span>
                        <span className="block text-xs text-slate-500">
                          43€
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              {/* <!-- Soins pour les mains --> */}
              <div className="rounded-2xl border bg-white p-4">
                <h4 className="text-lg font-medium">Soins pour les mains</h4>
                <ul className="mt-3 divide-y">
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">
                      Pose vernis semi-permanent
                    </span>
                    <span className="font-semibold">28€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">Beauté des mains</span>
                    <span className="font-semibold">20€</span>
                  </li>
                  <li className="flex items-start justify-between py-2">
                    <span className="w-full">
                      <span className="font-medium">Beauté des mains</span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + vernis semi-permanent
                        </span>
                        <span className="block text-xs text-slate-500">
                          43€
                        </span>
                      </span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + French
                        </span>
                        <span className="block text-xs text-slate-500">
                          53€
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              {/* <!-- Soins pour les pieds --> */}
              <div className="rounded-2xl border bg-white p-4">
                <h4 className="text-lg font-medium">Soins pour les pieds</h4>
                <ul className="mt-3 divide-y">
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">
                      Pose vernis semi-permanent
                    </span>
                    <span className="font-semibold">28€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">Beauté des pieds</span>
                    <span className="font-semibold">35€</span>
                  </li>
                  <li className="flex items-start justify-between py-2">
                    <span className="w-full">
                      <span className="font-medium">Beauté des pieds</span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + vernis semi-permanent
                        </span>
                        <span className="block text-xs text-slate-500">
                          58€
                        </span>
                      </span>
                      <span className="flex flex-row justify-between">
                        <span className="block text-xs text-slate-500">
                          + French
                        </span>
                        <span className="block text-xs text-slate-500">
                          68€
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              {/* <!-- Dépose --> */}
              <div className="rounded-2xl border bg-white p-4 md:col-span-2">
                <h4 className="text-lg font-medium">Dépose</h4>
                <ul className="mt-3 divide-y">
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">
                      Vernis semi-permanent mains / pieds
                    </span>
                    <span className="font-semibold">10€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">Résine / gel</span>
                    <span className="font-semibold">15€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">
                      Réparation ongle cassé (résine / gel)
                    </span>
                    <span className="font-semibold">5€</span>
                  </li>
                </ul>
              </div>
            </div>
          </details>

          {/* <!-- Épilation --> */}
          <details className="group rounded-2xl border bg-white/50 p-3">
            <summary className="cursor-pointer select-none text-xl font-semibold flex items-center justify-between">
              Épilation
              <span className="ml-2 text-sm text-slate-500 group-open:rotate-180 transition">
                ▾
              </span>
            </summary>
            <div className="mt-3 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-white p-4 md:col-span-2">
                <h4 className="text-lg font-medium">(Femme uniquement)</h4>
                <ul className="mt-3 divide-y">
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">
                      Sourcils / Lèvre / Menton
                    </span>
                    <span className="font-semibold">10€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">Aisselles</span>
                    <span className="font-semibold">12€</span>
                  </li>
                  <li className="flex items-start justify-between py-2">
                    <span className="w-full">
                      <span className="font-medium">Bras</span>
                      <span className="flex flex-row items-center justify-between">
                        <span className="block text-xs text-slate-500">
                          Demi
                        </span>
                        <span className="block text-xs text-slate-500">
                          12€
                        </span>
                      </span>
                      <span className="flex flex-row items-center justify-between">
                        <span className="block text-xs text-slate-500">
                          Complets
                        </span>
                        <span className="block text-xs text-slate-500">
                          18€
                        </span>
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start justify-between py-2">
                    <span className="w-full">
                      <span className="font-medium">Jambes</span>
                      <span className="flex flex-row items-center justify-between">
                        <span className="block text-xs text-slate-500">
                          Demi
                        </span>
                        <span className="block text-xs text-slate-500">
                          18€
                        </span>
                      </span>
                      <span className="flex flex-row items-center justify-between">
                        <span className="block text-xs text-slate-500">
                          Complètes
                        </span>
                        <span className="block text-xs text-slate-500">
                          28€
                        </span>
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">Visage</span>
                    <span className="font-semibold">25€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">Maillot simple</span>
                    <span className="font-semibold">16€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">Maillot échancré</span>
                    <span className="font-semibold">20€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">Maillot semi-intégral</span>
                    <span className="font-semibold">25€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">Maillot intégral</span>
                    <span className="font-semibold">35€</span>
                  </li>
                </ul>
              </div>
            </div>
          </details>

          {/* <!-- Cils --> */}
          <details className="group rounded-2xl border bg-white/50 p-3">
            <summary className="cursor-pointer select-none text-xl font-semibold flex items-center justify-between">
              Extension des cils
              <span className="ml-2 text-sm text-slate-500 group-open:rotate-180 transition">
                ▾
              </span>
            </summary>
            <div className="mt-3 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-white p-4 md:col-span-2">
                <h4 className="text-lg font-medium">Extension des cils</h4>
                <ul className="mt-3 divide-y">
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">
                      Extension des cils un par un
                    </span>
                    <span className="font-semibold">85€</span>
                  </li>
                  <li className="flex items-start justify-between py-2">
                    <span className="w-full">
                      <span className="font-medium">Remplissage des cils</span>
                      <span className="flex flex-row items-center justify-between">
                        <span className="block text-xs text-slate-500">
                          Léger
                        </span>
                        <span className="block text-xs text-slate-500">
                          50€
                        </span>
                      </span>
                      <span className="flex flex-row items-center justify-between">
                        <span className="block text-xs text-slate-500">
                          Perdu beaucoup
                        </span>
                        <span className="block text-xs text-slate-500">
                          60€
                        </span>
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">
                      Teinture des sourcils ou des cils
                    </span>
                    <span className="font-semibold">20€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="font-medium">Rehaussement des cils</span>
                    <span className="font-semibold">55€</span>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Prices;
