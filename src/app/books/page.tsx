
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import booksData from "@/data/books.json";

export default function AllBooksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Story", "Tech", "Science"];

  const filteredBooks = booksData.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search books by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-amber-500 shadow-lg"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8">

          <aside className="w-full md:w-64 bg-slate-800 border border-slate-700 p-6 rounded-2xl h-fit">
          <h3 className="text-lg font-bold text-amber-400 mb-4">Categories</h3>
          <div className="flex md:flex-col gap-2 overflow-x-auto">  
          {categories.map((category) => ( 
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}  
          </div>
          </aside>


          <main className="flex-1">
          {filteredBooks.length === 0 ? (
            <p className="text-slate-400 text-center py-10">No books found matching your criteria.</p>
          ) : ( 
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <div key={book.id} className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden flex flex-col justify-between">
                  <Image
                    src={book.image_url}
                    alt={book.title}
                    width={640}
                    height={192}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-amber-400 font-semibold">{book.category}</span>  
                      <h3 className="text-xl font-bold mt-1 text-white">{book.title}</h3>
                      <p className="text-slate-400 text-sm mt-1">Author: {book.author}</p>
                    </div>
                    <Link
                      href={`/books/${book.id}`}            
                      className="mt-6 block text-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 rounded-lg text-sm transition"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          </main>
      </div>
    </div>
  );
}

