import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function () {
  return (
    <div class="dark:(bg-gray-800 text-gray-50) leading-normal tracking-normal">
      <Navbar />
      <Hero />
      <Feature />
      <div class="min-h-screen"></div>
    </div>
  );
}
