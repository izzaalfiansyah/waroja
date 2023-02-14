import { For } from "solid-js";
import About from "../assets/solution_mindset.svg";
import WhyUs from "../assets/engineering_team.svg";

const whyus = [
  {
    title: "Quality First",
    detail:
      "Kualitas platform mulai dari proses pengembangan, teknologi, dan juga layanan after sales adalah prioritas kami.",
  },
  {
    title: "Amazing Team",
    detail:
      "Terdiri dari IT dan Business spesialis profesional, berpengalaman, dan berdedikasi untuk memberikan extra-miles experience.",
  },
  {
    title: "Agile Culture",
    detail:
      "Kami senantiasa mengedepankan komunikasi yang efektif, kolaborasi, dan responsif dengan anda untuk menyajikan software yang solutif.",
  },
];

export default () => {
  return (
    <>
      <div class="min-h-screen flex items-center lg:px-120px lg:flex-row flex-col p-4 py-30 pb-20">
        <div class="flex-1 lg:text-left text-center lg:mt-0 mt-10">
          <img src={About} alt="" />
        </div>
        <div class="lg:w-3/5 lg:text-left text-center lg:pl-120px">
          <div class="lg:text-5xl text-2xl font-bold">
            Kami adalah solusi untuk{" "}
            <span class="text-primary">Produk UMKM</span>
          </div>
          <div class="mt-5">
            Waroja adalah platform informasi UMKM lokal daerah Jember untuk
            mempermudah konsumen dalam menentukan referensi produk yang sesuai.
          </div>
        </div>
      </div>
      <div class="min-h-screen flex items-center lg:px-120px lg:flex-row flex-col p-4 py-20 bg-gray-400 bg-opacity-5">
        <div class="lg:w-3/5 lg:pr-100px">
          <div class="lg:text-5xl text-2xl font-bold lg:text-left text-center">
            Mengapa Kami?
          </div>
          <div class="mt-10">
            <For each={whyus}>
              {(item) => (
                <div class="flex space-x-5 mb-5">
                  <div class="rounded-full h-14 p-1 bg-primary flex items-center justify-center">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg> */}
                  </div>
                  <div>
                    <div class="text-primary font-semibold">{item.title}</div>
                    {item.detail}
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
        <div class="flex-1 lg:text-left text-center lg:mt-0 mt-20">
          <img src={WhyUs} alt="" />
        </div>
      </div>
    </>
  );
};
