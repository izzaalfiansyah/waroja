import { Show, createSignal, onMount } from "solid-js";
import DataToko from "../components/DataToko";
import toko from "../libs/toko";

export default () => {
  const [isLoading, setIsLoading] = createSignal<boolean>(true);
  const [data, setData] = createSignal<Array<any>>([]);

  function getToko() {
    setIsLoading(true);
    setTimeout(() => {
      setData((data) => {
        return [...data, ...toko, ...toko];
      });
      setIsLoading(false);
    }, 1500);
  }

  onMount(() => {
    getToko();
  });

  return (
    <div class="pt-30 pb-20 p-4 lg:px-120px">
      <input
        type="text"
        class="rounded-full p-3 px-6 w-full mb-10 border border-gray-200 dark:border-gray-700 outline-none transition dark:bg-gray-800"
        placeholder="Cari Toko atau Produk"
      />
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
