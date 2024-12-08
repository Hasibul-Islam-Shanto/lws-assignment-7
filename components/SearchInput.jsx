import { getDictionary } from "@/app/[lang]/dictionaries";

const SearchInput = async ({ lang }) => {
  const dict = await getDictionary(lang);
  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder={dict.Search}
          className="bg-colorGray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-colorPurple"
        />
        <svg
          className="w-5 h-5 text-gray-400 absolute right-3 top-2.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default SearchInput;
