import { For } from "solid-js";
import { navlinks } from "./Navbar";
import { Link } from "@solidjs/router";

export default () => {
  return (
    <>
      <div class="bg-primary flex lg:py-30 py-20 justify-between lg:px-120px p-4 text-white">
        <div class="text-5xl text-left">
          <div class="font-bold">Waroja</div>
          <div class="text-base mt-5">
            Platform informasi UMKM lokal di daerah Jember
          </div>
        </div>
        <div>
          <div class="font-semibold mb-5">Link Terkait</div>
          <ul class="flex flex-col">
            <For each={navlinks}>
              {(item) => (
                <li class="mb-1">
                  <Link href={item.path} class="transition hover:text-gray-500">
                    {item.title}
                  </Link>
                </li>
              )}
            </For>
          </ul>
        </div>
        <div>
          <div class="font-semibold mb-5">Media Sosial</div>
          <ul class="flex flex-col">
            <li class="mb-1">
              <a
                href="http://instagram.com"
                target="_blank"
                class="transition hover:text-gray-500"
              >
                Instagram
              </a>
            </li>
            <li class="mb-1">
              <a
                href="http://facebook.com"
                target="_blank"
                class="transition hover:text-gray-500"
              >
                Facebook
              </a>
            </li>
            <li class="mb-1">
              <a
                href="http://mail.google.com"
                target="_blank"
                class="transition hover:text-gray-500"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer class="p-5 text-center">
        Copyright &copy; 2023{" "}
        <a
          href="https://izzaalfiansyah.vercel.app"
          target="_blank"
          class="text-primary"
        >
          Muhammad Izza Alfiansyah
        </a>
      </footer>
    </>
  );
};
