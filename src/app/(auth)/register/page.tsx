
"use client";   

import { useState } from "react";
import { signUp, signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { DiBackbone } from "react-icons/di";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);   

        try{
            await signUp.email(
                {
                    email,
                    password,
                    name,
                    image: image || "https://avatar.iran.liara.run/public",
                },
                {
                    onSuccess: () => {
                        toast.success("Registered successfully! Please log in.");
                        router.push("/login");
                    },
                    onError: (ctx) => {
                        toast.error(ctx.error.message || "Registration failed!");
                        setLoading(false);
                    },
                }
            );
        } catch {
            toast.error("Something went wrong!");
            setLoading(false);
        }
    };
    
    const handleGoogleRegister = async () => {
        await signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-12">
           <div className="max-w-md w-full bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-white mb-2">Create Account</h2>
                <p className="text-center text-slate-400 mb-6 text-sm">Join MangoLib today</p>
                
            <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                            placeholder="John Doe"
                        />
                    </div>
                    <div> 
                
                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input 
                        type="email"    
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                        placeholder="naba@example.com"
                    />
                    </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                        placeholder="••••••••"
                    />  
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Confirm Password</label>
                    <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                        placeholder="••••••••"
                    />  
                </div>

                <button
                  type="submit"
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 rounded-lg transition disabled:opacity-50"
                >
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>

                <div className="mt-6">
                    <button
                        onClick={handleGoogleRegister}
                        className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2.5 rounded-lg transition border border-slate-600 flex items-center justify-center gap-2"
                    >
                        Sign in with Google
                    </button>
                </div>
            
            
            <p className="mt-6 text-center text-sm text-slate-400">
                Already have an account?{" "}
                <Link href="/login" className="text-amber-400 font-medium hover:underline">
                    Login
                </Link>
            </p>
          

        </div>
    </div>
  );
}
