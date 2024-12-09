"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between bg-gray-900 p-4">
      {/* Logo */}
      <div className="text-white text-xl font-bold">
        <Link href="/">MyLogo</Link>
      </div>

      {/* Links */}
      <div className="flex space-x-6">
        <Link
          href="/"
          className={`text-white hover:underline ${
            pathname === "/" ? "underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/prompting"
          className={`text-white hover:underline ${
            pathname === "/prompting" ? "underline" : ""
          }`}
        >
          Prompting
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
