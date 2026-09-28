"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully");
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"> 

        <Link href="/" className="text-2xl font-black text-amber-500 tracking-wider flex items-center gap-2">
          MangoLib
        </Link>
   
        <div className="hidden md:flex gap-6 font-medium text-slate-300 text-sm">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <Link href="/books" className="hover:text-amber-400 transition-colors">All Books</Link>
          <Link href="/profile" className="hover:text-amber-400 transition-colors">My Profile</Link>
        </div>

        <div className="hidden md:block">
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-slate-300 text-sm">
                Hi, <strong className="text-amber-400">{session.user.name}</strong>
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition"
            >
              Login
            </Link>
          )}
        </div>


        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>  
      
     
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-amber-400 font-medium text-sm py-1"
          >
            Home
          </Link>
          <Link
            href="/books"
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-amber-400 font-medium text-sm py-1"
          >
            All Books
          </Link>
          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-amber-400 font-medium text-sm py-1"                
          >
            My Profile
          </Link>
          <div className="pt-3 border-t border-slate-800">
            {session ? (
              <div className="flex flex-col gap-3">
                <span className="text-slate-300 text-sm">
                  Hi, <strong className="text-amber-400">{session.user.name}</strong>
                </span>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 hover:bg-red-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition text-center"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-lg transition text-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;