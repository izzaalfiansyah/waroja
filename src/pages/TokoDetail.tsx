import { useParams } from "@solidjs/router";
import { For, createSignal, onMount } from "solid-js";
import toko from "../libs/toko";

export default () => {
  const params = useParams();
  const [item, setItem] = createSignal<typeof toko[0]>();
  const [imgActive, setImgActive] = createSignal<string>();

  function get() {
    const tokoFilter = toko.filter((item) => {
      return item.name.replace(/ /gi, "-").toLowerCase() == params.slug;
    })[0];

    setItem(tokoFilter);
    setImgActive(item()?.img[0]);
  }

  onMount(() => {
    get();
  });

  return (
    <>
      <div class="lg:min-h-screen lg:px-120px p-4 py-20 pt-30">
        <div class="flex md:flex-row flex-col">
          <div class="md:w-1/2 md:pr-14 md:mb-0 mb-20">
            <img
              class="bg-gray-100 dark:bg-gray-700 rounded-lg lg:h-400px h-300px mb-4 object-cover"
              src={imgActive()}
            />
            <div class="flex flex-row flex-wrap">
              <For each={item()?.img}>
                {(img) => (
                  <img
                    class="rounded bg-gray-100 dark:bg-gray-700 lg:h-80px h-50px lg:w-80px w-50px mr-2 mb-2 object-cover cursor-pointer"
                    src={img}
                    onClick={(e) => {
                      setImgActive(img);
                    }}
                  />
                )}
              </For>
            </div>
          </div>
          <div class="md:w-1/2 md:text-left text-center">
            <div class="lg:text-5xl text-2xl font-bold text-primary">
              {item()?.name}
            </div>
            <div class="mt-2 text-sm text-primary">
              Jln. Garuda, Dusun Karanganyar, Desa Karangrejo, Kecamatan
              Gumukmas, Kabupaten Jember
            </div>
            <p class="mt-7">{item()?.description}</p>
            <div class="mt-10">
              <a
                href={`https://api.whatsapp.com/send?phone=6281939123456&text=${new URLSearchParams(
                  "Halo, saya mengetahui usaha UMKM anda dari situs https://waroja.vercel.app. Saya ingin bertanya"
                ).toString()}`}
                target="_blank"
                class="p-5 py-3 mb-3 rounded shadow flex space-x-4 items-center text-green-400 border border-green-400 transition hover:(bg-green-400 text-white)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
                <div>Whatsapp</div>
              </a>
              <a
                href="tel:+6281231921351"
                target="_blank"
                class="p-5 py-3 mb-3 rounded shadow flex space-x-4 items-center text-blue-400 border border-blue-400 transition hover:(bg-blue-400 text-white)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <div>Telepon</div>
              </a>
              <a
                href={
                  "https://maps.google.com?q=-8.32943994262342,113.4189169388508"
                }
                target="_blank"
                class="p-5 py-3 mb-3 rounded shadow flex space-x-4 items-center text-red-400 border border-red-400 transition hover:(bg-red-400 text-white)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <div>Lokasi</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
