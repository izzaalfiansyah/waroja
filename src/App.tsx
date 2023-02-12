import ButtonScrollTop from "./components/ButtonScrollTop";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";
import Toko from "./components/Toko";

export default function () {
  return (
    <div class="dark:(bg-gray-800 text-gray-50) leading-normal tracking-normal transition">
      <Navbar />
      <Hero />
      <Feature />
      <Toko />
      <Subscribe />
      <Footer />
      <ButtonScrollTop />
    </div>
  );
}
