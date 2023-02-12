import { For } from "solid-js";
import toko from "../libs/toko";
import { Link } from "@solidjs/router";

export default () => {
  return (
    <div class="min-h-screen py-20 lg:px-120px p-6">
      <div class="mb-10 text-center">
        <div class="lg:text-4xl text-2xl font-bold">
          <span class="text-primary">Daftar Toko</span>
        </div>
        <p class="mt-3">
          Menampilkan beberapa toko yang siap menyajikan pelayanan bagi konsumen
        </p>
      </div>
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-5">
        <For each={toko}>
          {(item) => (
            <div class="rounded transition group">
              <div class="h-220px overflow-hidden">
                <img
                  class="bg-gray-100 dark:bg-gray-700 object-cover h-full w-full group-hover:(transform scale-110) transition"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div class="py-3">
                <div class="font-semibold truncate">{item.name}</div>
                <div class="truncate">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Alias excepturi nesciunt accusantium reiciendis adipisci
                  voluptates ullam, ipsam repellendus ex sequi atque consequatur
                  vitae? Quia itaque quisquam distinctio! Beatae, officiis
                  nesciunt.
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
      <div class="mt-10 text-center">
        <Link href="/toko" class="px-8 p-3 rounded-full text-white bg-primary">
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};
