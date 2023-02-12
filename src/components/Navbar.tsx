import { For } from "solid-js";
import ThemeToggler from "./ThemeToggler";
import { Link } from "@solidjs/router";

export const navlinks = [
  {
    title: "Beranda",
    path: "/",
  },
  {
    title: "Tentang Kami",
    path: "/tentang-kami",
  },
  {
    title: "Toko",
    path: "/toko",
  },
  {
    title: "Kontak",
    path: "/kontak",
  },
];

export default () => {
  return (
    <div class="h-20 flex items-center justify-between lg:px-120px px-4 fixed z-20 top-0 left-0 right-0 dropshadow-blur backdrop-filter backdrop-blur bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50">
      <div class="text-2xl font-bold">Waroja</div>
      <div class="lg:hidden block">
        <button class="p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-7 h-7"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <ul class="lg:flex hidden lg:space-x-10">
        <For each={navlinks}>
          {(item) => (
            <li>
              <Link
                href={item.path}
                class="hover:text-primary font-semibold transition"
              >
                {item.title}
              </Link>
            </li>
          )}
        </For>
        <li>
          <ThemeToggler />
        </li>
      </ul>
    </div>
  );
};
