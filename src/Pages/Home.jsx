import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const categories = [
  "Exercise",
  "Family",
  "Fitness",
  "Foods",
  "Gadgets",
  "Living",
];

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-800">Chapel House</h1>
        <nav className="space-x-4 text-gray-700">
          <a href="#">Programs</a>
          <a href="#">Videos</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-4 bg-white shadow rounded overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250"
            alt="hero"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-4 flex flex-col justify-center">
            <span className="text-sm text-gray-500">@username</span>
            <h2 className="text-xl font-semibold mb-2">
              Elit ornare sollicitudin eros nullam vestibulum tincidunt ultrices
            </h2>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Recent Blog Posts */}
        <section className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4">Recent Blog Posts</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded shadow overflow-hidden">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="post"
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold mb-1">
                    Elit ornare libero et placerat fringilla et velit accumsan
                  </h4>
                  <p className="text-sm text-gray-500">@username</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <h4 className="font-bold mb-2">Featured Posts</h4>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <img
                  src="https://via.placeholder.com/80"
                  alt="featured"
                  className="w-20 h-20 rounded object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">
                    Elit ornare libero et placerat fringilla
                  </p>
                  <span className="text-xs text-gray-500">@username</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-bold mb-2">Categories</h4>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat, i) => (
                <div key={i} className="text-center">
                  <img
                    src="https://via.placeholder.com/100"
                    alt={cat}
                    className="w-full rounded"
                  />
                  <p className="text-sm mt-1">{cat}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2">Select Date</h4>
            <input
              type="date"
              className="w-full border border-gray-300 rounded p-2"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white mt-12 py-8 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">Logo</h4>
            <p className="text-sm">Short description about Chapel House and what it offers.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Follow us</h4>
            <div className="flex gap-4 text-xl">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <input
              type="email"
              placeholder="Your email"
              className="w-full mb-2 p-2 rounded border border-gray-300"
            />
            <button className="bg-white text-blue-900 px-4 py-2 rounded font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
