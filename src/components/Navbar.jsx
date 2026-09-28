
"use client";

import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function Navbar() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully");
  };

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-amber-500 tracking-wider flex items-center gap-2">
           MangoLib
        </Link>

        <div className="flex gap-6 font-medium text-slate-300 text-sm">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <Link href="/books" className="hover:text-amber-400 transition-colors">All Books</Link>
          <Link href="/profile" className="hover:text-amber-400 transition-colors">My Profile</Link>
        </div>
        <div>
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-slate-300 text-sm hidden sm:inline">
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
      </div>
    </nav>
  );
} 

