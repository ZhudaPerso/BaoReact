import React, { useEffect, useRef, useState } from "react";
import img1 from "@/assets/work/y1.jpg";
import img2 from "@/assets/work/y2.jpg";
import img3 from "@/assets/work/y3.jpg";
import img4 from "@/assets/work/w1.jpg";
import img5 from "@/assets/work/w2.jpg";
import img6 from "@/assets/work/w3.jpg";
import img7 from "@/assets/work/w4.jpg";
import img8 from "@/assets/work/y4.jpg";

const Work = () => {
  // Images for the carousel
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  // Carousel state & timer
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const AUTOPLAY_MS = 5000;
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  function stopAuto() {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function startAuto() {
    stopAuto();
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, AUTOPLAY_MS);
  }

  function goTo(i: number) {
    setIndex(((i % images.length) + images.length) % images.length);
  }

  function nextSlide() {
    setIndex((i) => (i + 1) % images.length);
  }

  function prevSlide() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    }
  }

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    stopAuto();
    touchStartX.current = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchEndX.current - touchStartX.current;
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    startAuto();
  }

  function handleTouchCancel() {
    touchStartX.current = null;
    touchEndX.current = null;
    startAuto();
  }

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  return (
    // <!-- 团队 -->
    <section className="py-16 bg-gradient-to-r from-[#fff4e3] to-[#fde8c8] scroll-mt-4 md:scroll-mt-8">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold">
            Notre équipe professionnelle, à l'écoute de votre beauté
          </h2>
          <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
            <li>
              Ici, chaque cliente mérite toute notre attention. Nos stylistes
              ongulaires allient savoir-faire, patience et minutie dans chaque
              détail. De la préparation au design, chaque geste est réalisé avec
              soin et passion. Nous croyons que la vraie beauté naît de la
              précision et du cœur, et que votre satisfaction est notre plus
              belle réussite.
            </li>
            {/* <!-- <li>Questionnaire allergies & information sur les pigments</li> --> */}
            {/* <!-- <li>
            Retouche gratuite sous 7 jours en cas de problème de qualité
          </li> --> */}
          </ul>
        </div>
        <div
          id="studio-carousel"
          className="relative w-full h-[360px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5"
          role="region"
          aria-roledescription="carousel"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          {/* Slides */}
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Studio ${idx + 1}`}
              className={
                "carousel-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-500 " +
                (idx === index ? "opacity-100" : "opacity-0")
              }
            />
          ))}

          {/* Controls */}
          <button
            type="button"
            aria-label="Précédent"
            className="carousel-prev absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full w-9 h-9 grid place-items-center shadow"
            onClick={prevSlide}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Suivant"
            className="carousel-next absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full w-9 h-9 grid place-items-center shadow"
            onClick={nextSlide}
          >
            ›
          </button>

          {/* Dots */}
          <div className="carousel-dots absolute bottom-2 inset-x-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Aller à la diapositive ${idx + 1}`}
                aria-current={idx === index}
                className={
                  "w-2.5 h-2.5 rounded-full ring-1 ring-black/10 " +
                  (idx === index ? "bg-white/80" : "bg-white/40")
                }
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
