import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center">
      
      <form className="w-full w-1/2">
        <h1 className="text-6xl font-bold mb-4 justify-self-center">Hulondalo</h1>
          <div className="relative mb-4 grid gap-4">
              <input type="search" id="default-search" className="block w-full h-18 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
              <button type="submit" className="text-white absolute end-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        <div className="text-xs">*Kosakata yang ada masih belum diimput semuanya, dan masih dalam tahap pengembangan</div>
      </form>

    </div>
  );
}
