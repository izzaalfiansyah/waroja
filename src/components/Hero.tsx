import Hero from "../assets/with_friend.svg";

export default () => {
  return (
    <>
      <div class="min-h-screen flex items-center bg-gray-400 bg-opacity-5 lg:px-120px p-4">
        <div class="rounded-2xl flex-grow bg-primary h-80vh mt-5vh overflow-hidden relative p-10 flex items-center">
          <img
            src="https://flazztax.com/wp-content/uploads/2021/09/Pajak-Bagi-Pelaku-Usaha-UMKM-dan-Kriterianya.jpg"
            class="absolute bottom-0 right-0 lg:w-100vh lg:h-80vh w-300px h-300px object-cover rounded-full transform lg:translate-x-60 translate-x-20 lg:translate-y-0 translate-y-36 shadow"
          />
          <div class="relative lg:w-3/5 text-white">
            <div class="lg:text-5xl text-2xl font-bold">
              Platform Informasi UMKM Daerah Jember
            </div>
            <div class="mt-3">
              Segera cari produk dari UMKM lokal yang sesuai dengan referensi
              anda dengan mudah dan efisien.
            </div>
            <div class="mt-8">
              <input
                type="text"
                class="rounded-full p-3 px-5 bg-white text-gray-800 outline-none w-full shadow"
                placeholder="Cari Sekarang..."
              />
            </div>
          </div>
        </div>
      </div>
      <div class="min-h-screen p-4 lg:px-120px flex items-center justify-between flex-grow lg:flex-row flex-col">
        <div class="lg:text-left flex-1">
          <img
            src={Hero}
            alt=""
            class="inline lg:max-w-450px max-w-80vw lg:mt-0 mt-24"
          />
        </div>
        <div class="flex-1 lg:text-left text-center">
          <div class="lg:text-5xl text-2xl font-extrabold mb-8">
            <span class="text-primary">Standar Baru</span> Mencari <br />{" "}
            Referensi Produk Lokal
          </div>
          <div>
            Memungkinkan anda untuk memantau produk-produk lokal UMKM dari
            manapun dan kapanpun di daerah Jember.
          </div>
          <div class="mt-8">
            <button class="bg-primary px-8 rounded-full shadow-sm text-white p-3">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
