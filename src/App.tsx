import Router from "./Router";
import ButtonScrollTop from "./components/ButtonScrollTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function () {
  return (
    <div class="dark:(bg-gray-800 text-gray-50) leading-normal tracking-normal transition">
      <Navbar />
      <Router />
      <Footer />
      <ButtonScrollTop />
    </div>
  );
}
