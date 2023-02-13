import { Link } from "@solidjs/router";
import { For, Show } from "solid-js";

export default (props: {
  items: Array<{
    name: string;
    img: string;
  }>;
  loading?: boolean;
}) => {
  return (
    <div class="grid lg:grid-cols-4 grid-cols-2 gap-5">
      <For each={props.items}>
        {(item) => (
          <Link
            href={"/toko/" + item.name.replace(/ /gi, "-").toLowerCase()}
            class="rounded transition group block"
          >
            <div class="h-220px overflow-hidden">
              <img
                class="bg-gray-100 dark:bg-gray-700 object-cover h-full w-full group-hover:(transform scale-110) transition rounded"
                src={item.img}
                alt={item.name}
              />
            </div>
            <div class="py-3">
              <div class="font-semibold truncate group-hover:text-primary">
                {item.name}
              </div>
              <div class="truncate">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                excepturi nesciunt accusantium reiciendis adipisci voluptates
                ullam, ipsam repellendus ex sequi atque consequatur vitae? Quia
                itaque quisquam distinctio! Beatae, officiis nesciunt.
              </div>
            </div>
          </Link>
        )}
      </For>
      <Show when={props.loading}>
        <For each={Array(8)}>
          {(item) => (
            <div class="rounded transition group">
              <div class="h-220px overflow-hidden">
                <div class="bg-gray-100 dark:bg-gray-700 animate animate-pulse rounded h-full w-full" />
              </div>
              <div class="py-3">
                <div class="font-semibold truncate group-hover:text-primary">
                  <div class="bg-gray-100 dark:bg-gray-700 animate animate-pulse rounded-full h-4"></div>
                </div>
                <div class="bg-gray-100 dark:bg-gray-700 animate animate-pulse rounded-full h-4 mt-3"></div>
              </div>
            </div>
          )}
        </For>
      </Show>
    </div>
  );
};
