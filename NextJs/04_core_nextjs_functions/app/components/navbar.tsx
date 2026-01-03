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
              className={`text-sm border-2 rounded-lg shadow-xs px-2 py-1 font-mono font-semibold ${
                isActive("/")
                  ? "text-white bg-blue-600 border-blue-600"
                  : "text-gray-800 border-gray-400"
              }`}
            >
              NextJs App
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/search"
              className={`text-sm border-2 rounded-lg shadow-xs px-2 py-1 font-mono font-semibold ${
                isActive("/search")
                  ? "text-white bg-blue-600 border-blue-600"
                  : "text-gray-800 border-gray-400"
              }`}
            >
              Search
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/about"
              className={`text-sm border-2 rounded-lg shadow-xs px-2 py-1 font-mono font-semibold ${
                isActive("/about")
                  ? "text-white bg-blue-600 border-blue-600"
                  : "text-gray-800 border-gray-400"
              }`}
            >
              About
            </Link>
            <Link
              href="/products"
              className={`text-sm border-2 rounded-lg shadow-xs px-2 py-1 font-mono font-semibold ${
                isActive("/products")
                  ? "text-white bg-blue-600 border-blue-600"
                  : "text-gray-800 border-gray-400"
              }`}
            >
              Products
            </Link>
            <Link
              href="/reviews"
              className={`text-sm border-2 rounded-lg shadow-xs px-2 py-1 font-mono font-semibold ${
                isActive("/reviews")
                  ? "text-white bg-blue-600 border-blue-600"
                  : "text-gray-800 border-gray-400"
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
