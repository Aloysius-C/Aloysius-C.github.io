import Link from "next/link";
import { useState } from "react";

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


export  function Tabs() {
  const [activeTab, setActiveTab] = useState("Tab1");

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
      {/* Tab Headers */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === "Tab1"
              ? "border-b-2 border-blue-500 font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Tab1")}
        >
          Tab 1
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === "Tab2"
              ? "border-b-2 border-blue-500 font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Tab2")}
        >
          Tab 2
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "Tab1" && <p>This is the content for Tab 1.</p>}
        {activeTab === "Tab2" && <p>This is the content for Tab 2.</p>}
      </div>
    </div>
  );
}