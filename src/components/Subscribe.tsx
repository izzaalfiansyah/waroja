export default () => {
  return (
    <div class="py-20 bg-gray-400 lg:px-120px p-4 bg-opacity-5">
      <div class="mb-10 text-center">
        <div class="lg:text-4xl text-2xl text-primary mb-3 font-semibold">
          Subscribe
        </div>
        <p>Ikuti perkembangan kami dengan melakukan subscribe</p>
      </div>
      <div class="relative">
        <input
          type="text"
          class="w-full rounded-full border border-gray-200 dark:border-gray-700 px-5 p-3 outline-none focus:(bg-gray-100) dark:focus:bg-gray-700 transition dark:bg-gray-800"
          placeholder="Email Kamu"
        />
        <div class="absolute top-0 right-0 bottom-0 px-8 rounded-r-full bg-primary flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
