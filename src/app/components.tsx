"use client";
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
  const [activeTab, setActiveTab] = useState("Work");

  return (
    <div className="w-full max-w-6x1 mx-auto bg-white shadow-lg rounded-lg p-1">
      {/* Tab Headers */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-3 text-center ${
            activeTab === "Work"
              ? "bg-blue-500 text-white font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Work")}
        >
          Work
        </button>
        <button
          className={`flex-1 py-3 text-center ${
            activeTab === "Education"
              ? "bg-blue-500 text-white font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Education")}
        >
          Education
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-20">
        {activeTab === "Work" && <p className=" text-black">
          This is the content for Tab 1.
          </p>}
        {activeTab === "Education" && <p className=" text-black">
          This is the content for Tab 2.
          </p>}
      </div>
    </div>
  );
}