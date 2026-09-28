
import Link from "next/link";
import Image from "next/image";
import books from "@/data/books.json";
import FeaturedBooksSlider from "@/components/FeaturedBooksSlider";

export default function HomePage() {
  const featuredBooks = books.slice(0, 4);
  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
   
      <section className="bg-linear-to-r from-amber-600 to-amber-800 text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold mb-4">Find Your Next Read</h1>
        <p className="text-lg text-amber-100 max-w-2xl mx-auto mb-8">
          Explore thousands of books, borrow digitally, and manage your library seamlessly.
        </p>
        <Link
          href="/books"
          className="bg-slate-950 text-amber-400 hover:bg-slate-900 font-bold px-8 py-3 rounded-xl transition shadow-lg">
          Browse Now
        </Link>
      </section>

  
      <div className="bg-slate-800 border-y border-slate-700 py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-amber-400 font-medium text-sm">
           New Arrivals: Clean Code | Sapiens | Brief Answers to the Big Questions |  Special Discount on Premium Memberships!
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
  
        <section>
          <h2 className="text-3xl font-bold mb-8 text-amber-400">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <div key={book.id} className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden flex flex-col">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={640}
                  height={384}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-amber-400 font-semibold">{book.category}</span>                 
                    <h3 className="text-xl font-bold mt-1 text-white">{book.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{book.author}</p>                    
                  </div>
                  <Link
                    href={`/books/${book.id}`}
                    className="mt-4 block text-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 rounded-lg text-sm transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-6 text-amber-400">Trending Now (Swiper Slider)</h2>
          <FeaturedBooksSlider />
        </section>
        

        <section className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-4xl font-extrabold text-amber-400">12,000+</h3>
            <p className="text-slate-300 mt-2">Books Available</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-amber-400">4,500+</h3>
            <p className="text-slate-300 mt-2">Active Borrowers</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-amber-400">99.9%</h3>
            <p className="text-slate-300 mt-2">Uptime & Satisfaction</p>
          </div>
        </section>

      </div>
    </div>
  );
}