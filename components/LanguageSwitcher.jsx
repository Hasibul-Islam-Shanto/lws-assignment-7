"use client";

import Image from "next/image";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    {
      code: "en",
      language: "English",
      imgSrc: "/us.png",
    },
    {
      code: "bn",
      language: "Bangla",
      imgSrc: "/bd.png",
    },
  ];
  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === "en" ? "English" : "Bangla",
    });
    setShowMenu(false);
    router.push(`/${lang}`);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-1 border-[1px] border-colorGray rounded-md px-2 py-1"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Image
            className="max-w-5"
            src={selectedLanguage.imgSrc}
            alt={selectedLanguage.language}
            height={100}
            width={165}
          />
          {selectedLanguage.language}
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </button>
        {showMenu && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-colorGray p-2 z-10 shadow-lg">
            {languages.map((entry) => (
              <li
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-colorPurple hover:text-white"
              >
                <Image
                  className="max-w-5"
                  src={entry.imgSrc}
                  alt="bangla"
                  height={100}
                  width={165}
                />
                {entry.language}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
