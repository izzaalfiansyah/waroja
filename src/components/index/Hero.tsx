import { Link, useNavigate } from "@solidjs/router";
import Hero from "../../assets/with_friend.svg";
import { createSignal } from "solid-js";

export default () => {
  const [search, setSearch] = createSignal<string>("");
  const navigate = useNavigate();

  function handleSubmit(e: Event) {
    e.preventDefault();
    navigate("/toko?q=" + search());
  }

  return (
    <>
      <div class="min-h-screen flex items-center bg-gray-400 bg-opacity-5 lg:px-120px p-4">
        <div class="rounded-2xl flex-grow bg-primary h-80vh mt-10vh overflow-hidden relative p-10 flex items-center">
          <img
            src="https://flazztax.com/wp-content/uploads/2021/09/Pajak-Bagi-Pelaku-Usaha-UMKM-dan-Kriterianya.jpg"
            class="absolute bottom-0 right-0 lg:w-90vh lg:h-80vh w-300px h-300px object-cover rounded-full transform lg:translate-x-60 translate-x-20 lg:translate-y-0 translate-y-36 shadow"
          />
          <div class="relative lg:w-3/5 text-white">
            <div class="lg:text-5xl text-2xl font-bold">
              Platform Informasi UMKM Daerah Jember
            </div>
            <div class="mt-3">
              Segera cari produk dari UMKM lokal yang sesuai dengan referensi
              anda dengan mudah dan efisien.
            </div>
            <form onSubmit={handleSubmit} class="mt-8">
              <input
                type="text"
                class="rounded-full p-3 px-5 bg-white text-gray-800 outline-none w-full shadow"
                placeholder="Cari Sekarang..."
                value={search()}
                onInput={(e) => setSearch(e.currentTarget.value)}
              />
            </form>
          </div>
        </div>
      </div>
      <div class="lg:min-h-screen p-4 lg:px-120px flex items-center justify-between flex-grow md:flex-row flex-col py-20">
        <div class="md:text-left md:w-1/2">
          <img
            src={Hero}
            alt=""
            class="inline md:mt-0 mt-24 max-w-full md:pr-10"
          />
        </div>
        <div class="md:w-1/2 md:text-left text-center">
          <div class="lg:text-5xl text-2xl font-extrabold mb-8">
            <span class="text-primary">Standar Baru</span> Mencari <br />{" "}
            Referensi Produk Lokal
          </div>
          <div>
            Memungkinkan anda untuk memantau produk-produk lokal UMKM dari
            manapun dan kapanpun di daerah Jember.
          </div>
          <div class="mt-8">
            <Link
              href="/kontak"
              class="bg-primary px-8 rounded-full shadow-sm text-white p-3"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
