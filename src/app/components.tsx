import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white py-4 px-8 flex justify-between items-center">

      {/* Navigation Links */}
      <ul className="flex gap-6 text-lg">
        <li>
          <Link href="/" className="hover:text-gray-400 transition">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400 transition">About</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-400 transition">Projects</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}