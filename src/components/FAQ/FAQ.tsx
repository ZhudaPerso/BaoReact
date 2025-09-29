const FAQ = () => {
  return (
    // <!-- 常见问题 -->
    <section
      id="faq"
      className="pt-8 bg-gradient-to-r from-[#fff4e3] to-[#fde8c8] scroll-mt-4 md:scroll-mt-8"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-6 space-y-4">
          <details className="group rounded-xl border p-4 bg-white/70 border-amber-200">
            <summary className="cursor-pointer font-medium">
              Gel & gainage: est-ce que ça abîme les ongles ?
            </summary>
            <p className="mt-2 text-slate-600">
              Beaucoup de clientes pensent que le gel peut fragiliser les
              ongles, mais en réalité, lorsqu'il est posé et retiré
              correctement, le gel protège et renforce vos ongles.
            </p>
            <p className="mt-2 text-slate-600">
              ✨ Gainage: une fine couche de gel sur l'ongle naturel
            </p>
            <p className="mt-2 text-slate-600">
              ➡️ Protège, évite les cassures et renforce l'ongle.
            </p>
            <p className="mt-2 text-slate-600">
              Capsule (extension) vs Gainage (sur ongle naturel) <br />
              - Capsule: idéal si on veut de la longueur <br />- Gainage: pour
              garder la longueur naturelle et renforcer
            </p>
            <p className="mt-2 text-slate-600">
              ➡️ Dans les deux cas, meilleure protection que le vernis
              classique.
            </p>
            <p className="mt-2 text-slate-600">----</p>
            <p className="mt-2 text-slate-600">
              ✨ Essayez, vos ongles vous remercieront ✨
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
