
"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-900 text-white max-w-2xl mx-auto px-4 py-16">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center shadow-2xl">
          <Image
            src={session?.user?.image || "https://avatar.iran.liara.run/public"}
            alt="User Profile"
            width={112}
            height={112}
            className="w-28 h-28 rounded-full mx-auto border-4 border-amber-500 object-cover shadow-lg"
            unoptimized
          />
          <h1 className="text-2xl font-bold mt-4">{session?.user?.name}</h1>
          <p className="text-slate-400 text-sm mt-1">{session?.user?.email}</p>

          <div className="mt-8">
            <Link 
              href="/profile/update"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded-xl transition"
            >
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 
