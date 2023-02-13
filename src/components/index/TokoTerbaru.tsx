import toko from "../../libs/toko";
import { Link } from "@solidjs/router";
import DataToko from "../DataToko";

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
      <DataToko items={[...toko].reverse()} />
      <div class="mt-10 text-center">
        <Link href="/toko" class="px-8 p-3 rounded-full text-white bg-primary">
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};
