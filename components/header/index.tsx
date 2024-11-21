// components/header/index.tsx:
import Image from "next/image";
import logoImage from "/public/logo.png";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 shadow-sm">
      <nav className="flex justify-between items-center px-4 lg:px-20 py-2 max-w-7xl mx-auto">
        <Image
          src={logoImage}
          height="75"
          width="75"
          alt="logo"
          className="h-14 md:h-16"
        />
        <a href="#" target="_blank">
          <button className="border rounded-full border-green-800 text-green-800 py-2 px-5 transition-shadow hover:shadow-lg">
            About the author
          </button>
        </a>
      </nav>
    </header>
  );
}