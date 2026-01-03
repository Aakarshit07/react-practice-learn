"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-2xl font-bold ${
                isActive("/") ? "text-blue-500" : "text-gray-800"
              }`}
            >
              NextJs App
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/about"
              className={`text-2xl font-bold ${
                isActive("/about") ? "text-blue-500" : "text-gray-800"
              }`}
            >
              About
            </Link>
            <Link
              href="/products"
              className={`text-2xl font-bold ${
                isActive("/products") ? "text-blue-500" : "text-gray-800"
              }`}
            >
              Products
            </Link>
            <Link
              href="/reviews"
              className={`text-2xl font-bold ${
                isActive("/reviews") ? "text-blue-500" : "text-gray-800"
              }`}
            >
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
