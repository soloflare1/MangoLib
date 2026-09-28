
"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function UpdateProfilePage() {
  const { data: session } = useSession();
  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); 

    try {
      await authClient.updateUser({
        name: name.trim(),
        image: image.trim(),
      });
      toast.success("Profile updated successfully!");
      router.push("/profile");
    } catch {
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    } 
  };

  return (

      <ProtectedRoute>
        <div className="min-h-screen bg-slate-900 text-white max-w-md mx-auto px-4 py-16">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Image URL</label>
                <input
                  type="text"
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 rounded-lg transition disabled:opacity-50"
              >
                {loading ? "Updating..." : "Update Information"}
              </button>
            </form>
          </div>
        </div>
      </ProtectedRoute>
   );
}
