export default () => {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      class="fixed bottom-5 right-5 rounded-full shadow-lg bg-black bg-opacity-25 backdrop-filter backdrop-blur text-white w-12 h-12 flex items-center justify-center ring ring-1 ring-black ring-opacity-5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
        />
      </svg>
    </button>
  );
};
