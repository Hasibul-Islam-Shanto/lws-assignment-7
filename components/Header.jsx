import Image from "next/image";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { getDictionary } from "@/app/[lang]/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = async ({ lang }) => {
  const dict = await getDictionary(lang);
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-8">
        <Link href={`/${lang}/`}>
          <Image
            src={"/logo.svg"}
            height={150}
            width={150}
            alt="LWS Xstream Logo"
            className="h-6"
          />
        </Link>
        <nav className=" hidden md:flex space-x-6">
          <Link href={`/${lang}/`} className="text-color-purple font-semibold">
            {dict.Top_Streaming}
          </Link>
          <Link href={`/${lang}/`} className="text-gray-400 hover:text-white">
            {dict.Games}
          </Link>
          <Link href={`/${lang}/`} className="text-gray-400 hover:text-white">
            {dict.Teams}
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <SearchInput lang={lang} />
        <Image
          src="/avatar.png"
          height={32}
          width={32}
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
