function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-slate-500">
      <p>
        ©<span id="y"></span>
        Bao Beauté · SIREN 990 208 670
      </p>
      <p className="mt-1 flex justify-center items-center gap-2">
        <a
          href="https://www.instagram.com/bao_beaute/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#fac570]"
        >
          <i className="fa-brands fa-instagram text-lg" aria-hidden="true"></i>
          <span>Instagram</span>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
