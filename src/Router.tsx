import { Route, Routes } from "@solidjs/router";
import Index from "./pages/Index";
import TentangKami from "./pages/TentangKami";
import Toko from "./pages/Toko";
import Kontak from "./pages/Kontak";

export default () => {
  return (
    <Routes>
      <Route path="/" component={Index} />
      <Route path="/tentang-kami" component={TentangKami} />
      <Route path="/toko" component={Toko} />
      <Route path="/kontak" component={Kontak} />
    </Routes>
  );
};
