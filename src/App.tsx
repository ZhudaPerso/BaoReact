import "@/App.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
// import Services from "@/components/Services/Services";
import Prices from "@/components/Prices/Prices";
// import Gallery from "@/components/Gallery/Gallery";
// import Reviews from "@/components/Reviews/Reviews";
import Hygiene from "@/components/Hygiene/Hygiene";
import Contact from "@/components/Contact/Contact";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

function App() {
  useSmoothScroll();

  return (
    <div className="bg-gradient-to-b from-rose-50 to-white text-slate-800">
      <Header />
      <Home />
      {/* <Services /> */}
      <Prices />
      {/* <Gallery /> */}
      {/* <Reviews /> */}
      <Hygiene />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
