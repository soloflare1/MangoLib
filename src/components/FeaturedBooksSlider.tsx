
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import books from "@/data/books.json";
import Link from "next/link";

export default function FeaturedBooksSlider() { 

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="pb-12"
    >
      {books.map((book) => (
        <SwiperSlide key={book.id}>
          <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden p-4 h-full flex flex-col justify-between shadow-md">
            <div>
              <Image
                src={book.image_url}
                alt={book.title}
                width={800}
                height={352}
                className="h-44 w-full object-cover rounded-xl mb-4"
              />
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">{book.category}</span>
              <h3 className="text-lg font-bold text-white truncate mt-1">{book.title}</h3>
              <p className="text-slate-400 text-xs mb-4">By {book.author}</p>
            </div>
            <Link
              href={`/books/${book.id}`} className="block text-center bg-slate-700 hover:bg-amber-500 hover:text-slate-950 text-white font-bold py-2 rounded-lg text-sm transition">
              View Book
            </Link>
          </div>
          </SwiperSlide>
      ))}
    </Swiper>
  );
}
