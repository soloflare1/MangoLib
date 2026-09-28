
"use client";

import { use } from "react";
import booksData from "@/data/books.json";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function BookDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data: session } = useSession();
  const router = useRouter();

  const book = booksData.find((b) => b.id === id);
  if (!book) {
    return <div className="text-center py-20 text-white">Book not found!</div>;
  }
  
  const handleBorrow = () => {
    if (!session) {
      toast.error("Please login to borrow this book!");
      router.push("/login");
      return;
    }
    toast.success(`Successfully borrowed "${book.title}"!`);
  };
  

  return (
    <div className="min-h-screen bg-slate-900 text-white max-w-5xl mx-auto px-4 py-12">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 p-8 gap-8 shadow-2xl">
            <img src={book.image_url} alt={book.title} className="w-full h-96 object-cover rounded-xl" />
            <div className="flex flex-col justify-between">
                <div>
                    <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs px-3 py-1 rounded-full font-bold">
                        {book.category}
                    </span>


               <h1 className="text-3xl font-bold mt-4">{book.title}</h1>
                <p className="text-slate-400 text-sm mt-1">By {book.author}</p>
                <p className="text-slate-300 mt-4 leading-relaxed">{book.description}</p>
                <p className="text-amber-400 font-semibold mt-6">
                    Available Quantity: {book.available_quantity} copies left
                </p>
            </div>


            <button 
             onClick={handleBorrow}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl transition mt-8 shadow-lg"
            >
                Borrow This Book
            </button>
        </div>
    </div>
    </div>
  );
}
