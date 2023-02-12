import { For } from "solid-js";

export default () => {
  const feature = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="lg:w-16 lg:h-16 h-10 w-10 text-white group-hover:text-primary"
        >
          <path
            fill-rule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      content: "Cari toko dari referensi produk yang kamu inginkan",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="lg:w-16 lg:h-16 h-10 w-10 text-white group-hover:text-primary"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      ),
      content: "Mempermudah belanja kamu dengan produk yang sesuai",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="lg:w-16 lg:h-16 h-10 w-10 text-white group-hover:text-primary"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
      ),
      content: "Berbagi informasi produk kesukaanmu dengan rekanmu",
    },
  ];

  return (
    <div class="min-h-screen bg-gray-400 bg-opacity-5 py-20 text-center lg:px-120px px-4">
      <div class="lg:text-4xl text-2xl font-bold">Layanan</div>
      <p class="mt-3">
        Kemudahan yang disediakan untuk membantu pengguna. Semua fasilitas dalam
        genggaman anda.
      </p>
      <div class="mt-10 lg:px-50px">
        <div class="flex items-center justify-center lg:flex-row flex-col">
          <For each={feature}>
            {(item) => (
              <div class="flex-1 p-3">
                <div class="bg-white group hover:(shadow-lg transform scale-105) transition dark:bg-gray-800 lg:h-340px flex lg:flex-col flex-row justify-between p-8 hover:bg-primary transition">
                  <div class="flex justify-center">
                    <div class="bg-primary group-hover:(bg-white text-primary) dark:group-hover:bg-gray-800 rounded-full lg:h-35 lg:w-35 h-18 w-18 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div class="group-hover:text-white lg:text-center text-left lg:pl-0 pl-5">
                    {item.content}
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
