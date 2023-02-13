export default () => {
  return (
    <div class="min-h-screen pt-30 pb-20 flex lg:flex-row flex-col items-center lg:px-120px p-4 bg-gray-400 bg-opacity-5">
      <div class="flex-1 lg:pr-100px lg:text-left text-center">
        <div class="lg:text-5xl text-2xl font-bold">
          Temukan kami di <span class="text-primary">sosial media</span> anda
        </div>
        <div class="mt-5">
          Kami berupaya memberikan layanan yang fast respon untuk kenyamanan
          pengguna.
        </div>
        <div class="mt-5 flex space-x-2 justify-center lg:justify-start">
          <a href="https://instagram.com" target="_blank">
            <svg
              class="fill-primary w-8 h-8"
              viewBox="-5.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>instagram</title>{" "}
                <path d="M21.25 14.188v-6.469c0-1.156-0.969-2.125-2.125-2.125h-17c-1.156 0-2.125 0.969-2.125 2.125v6.469h5.156c0.813-2.219 2.969-3.813 5.469-3.813s4.656 1.594 5.469 3.813h5.156zM21.25 16.063h-4.781v0.156c0 3.219-2.625 5.844-5.844 5.844s-5.844-2.625-5.844-5.844v-0.156h-4.781v8.656c0 1.156 0.969 2.125 2.125 2.125h17c1.156 0 2.125-0.969 2.125-2.125v-8.656zM1.844 7.469h1.063v4.875h-1.063v-4.875zM3.969 7.469h1.063v4.875h-1.063v-4.875zM6.094 7.469h1.063v3.063c-0.344 0.25-0.719 0.531-1.063 0.813v-3.875zM10.625 20.219c2.219 0 3.969-1.781 3.969-4s-1.75-3.969-3.969-3.969-4 1.75-4 3.969 1.781 4 4 4zM14.344 7.469h5.031v4.875h-3.375c-0.438-0.656-1.031-1.188-1.656-1.625v-3.25z"></path>{" "}
              </g>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank">
            <svg
              class="fill-primary w-8 h-8 mr-1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path>{" "}
              </g>
            </svg>
          </a>
          <a href="https://mail.google.com" target="_blank">
            <svg
              class="fill-primary w-8 h-8"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>gmail</title>{" "}
                <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z"></path>{" "}
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex-1 lg:mt-0 mt-14">
        <div class="p-10 rounded-lg shadow-lg border-t-2 border-l-2 border-primary bg-white dark:bg-gray-800">
          <div class="lg:text-2xl text-lg font-semibold mb-8">
            Berikan kami sebuah pesan
          </div>
          <div class="mb-4">
            <input
              type="text"
              class="rounded w-full outline-none p-2 px-3 bg-gray-100 dark:bg-gray-700"
              placeholder="Nama Lengkap"
            />
          </div>
          <div class="mb-4">
            <input
              type="text"
              class="rounded w-full outline-none p-2 px-3 bg-gray-100 dark:bg-gray-700"
              placeholder="Email Kamu"
            />
          </div>
          <div class="mb-4">
            <input
              type="text"
              class="rounded w-full outline-none p-2 px-3 bg-gray-100 dark:bg-gray-700"
              placeholder="Subjek Pesan"
            />
          </div>
          <div class="mt-7 mb-3">
            <div class="font-semibold lg:text-base text-sm">
              Ceritakan pandangan kamu
            </div>
          </div>
          <div class="mb-4">
            <textarea
              rows={4}
              class="rounded w-full outline-none p-2 px-3 bg-gray-100 dark:bg-gray-700 resize-none"
              placeholder="Masukkan Pesan"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
