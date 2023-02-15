import { Show, createSignal, onMount } from "solid-js";
import DataToko from "../components/DataToko";
import toko from "../libs/toko";
import { useSearchParams } from "@solidjs/router";

export default () => {
  const [isLoading, setIsLoading] = createSignal<boolean>(true);
  const [data, setData] = createSignal<Array<any>>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  function getToko() {
    setIsLoading(true);
    setTimeout(() => {
      setData((data) => {
        return [...data, ...toko, ...toko];
      });
      setIsLoading(false);
    }, 800);
  }

  onMount(() => {
    getToko();
  });

  function handleSearch(e: Event) {
    e.preventDefault();
  }

  return (
    <div class="pt-30 pb-20 p-4 lg:px-120px">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          class="rounded-full p-3 px-6 w-full mb-10 border border-gray-200 dark:border-gray-700 outline-none transition dark:bg-gray-800"
          placeholder="Cari Toko atau Produk"
          value={searchParams.q || ""}
          onChange={(e) => setSearchParams({ q: e.currentTarget.value })}
        />
      </form>
      <Show when={!!searchParams.q}>
        <div class="mb-10">
          <div class="lg:text-2xl font-semibold lg:text-left text-center">
            Hasil pencarian dari "{searchParams.q}"
          </div>
        </div>
      </Show>
      <DataToko loading={isLoading()} items={data()} />
      <Show when={data().length && !isLoading()}>
        <div class="mt-10 text-center">
          <button
            type="button"
            onClick={getToko}
            class="px-8 p-3 rounded-full bg-primary text-white"
          >
            Lainnya
          </button>
        </div>
      </Show>
    </div>
  );
};
