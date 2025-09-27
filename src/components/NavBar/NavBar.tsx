import logo from "@/assets/logo/logo_192.png";

function NavBar() {
  return (
    <nav className="bg-white/30 backdrop-blur-md mx-3 lg:mx-auto max-w-6xl mt-4 rounded-2xl shadow-sm px-4 py-3 flex items-center justify-between">
      <a href="#home" className="flex items-center gap-2 font-semibold text-xl">
        <img
          src={logo}
          alt="Bao Beauté logo"
          className="inline-block w-7 h-7 rounded-full object-cover"
        />
        Bao Beauté
      </a>
      <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
        {/* <!-- <li><a href="#services" className="hover:text-[#fac570]">Services</a></li> --> */}
        <li>
          <a href="#prices" className="hover:text-[#fac570]">
            Prestations
          </a>
        </li>
        {/* <li>
          <a href="#gallery" className="hover:text-[#fac570]">Réalisations</a>
        </li> */}
        {/* <!-- <li><a href="#reviews" className="hover:text-[#fac570]">Avis</a></li> --> */}
        {/* <!-- <li><a href="#faq" className="hover:text-[#fac570]">FAQ</a></li> --> */}
        <li>
          <a href="#contact" className="hover:text-[#fac570]">
            Contacter
          </a>
        </li>
      </ul>
      <a
        href="#prices"
        className="inline-block bg-[#fac570] text-black px-3 py-2 md:px-4 md:py-2 rounded-xl shadow hover:bg-[#f0a94a] text-sm md:text-base"
      >
        Réserver
      </a>
    </nav>
  );
}

export default NavBar;
