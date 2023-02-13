import { For, createSignal } from "solid-js";
import ThemeToggler from "./ThemeToggler";
import { Link, useLocation } from "@solidjs/router";

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
  const [showNav, setShowNav] = createSignal(false);

  const location = useLocation();

  function toggleShow() {
    setShowNav(!showNav());
  }

  return (
    <div class="h-20 flex items-center justify-between lg:px-120px px-4 fixed z-20 top-0 left-0 right-0 dropshadow-blur backdrop-filter backdrop-blur bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50">
      <Link
        href="/"
        class="text-2xl font-bold block transition hover:text-primary"
      >
        Waroja
      </Link>
      <div class="lg:hidden block flex items-center">
        <div class="lg:hidden mt-2 mr-1">
          <ThemeToggler />
        </div>
        <button class="p-3" onClick={toggleShow}>
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
      <ul
        class="flex lg:flex-row flex-col lg:relative fixed lg:mt-0 mt-20 top-0 lg:bg-transparent p-4 bg-white z-20 lg:w-auto w-full lg:space-x-10 left-0 dark:bg-gray-800 transform scale-0 transition origin-top lg:scale-100 lg:bg-transparent dark:lg:bg-transparent"
        classList={{ "scale-100": showNav() }}
      >
        <For each={navlinks}>
          {(item) => (
            <li class="lg:py-0 py-2">
              <Link
                href={item.path}
                class="hover:text-primary font-semibold transition block"
                classList={{ "text-primary": item.path == location.pathname }}
                onClick={toggleShow}
              >
                {item.title}
              </Link>
            </li>
          )}
        </For>
        <li class="lg:inline hidden">
          <ThemeToggler />
        </li>
      </ul>
    </div>
  );
};
