"use client";
import { useState } from "react";
import api from "@/utils/api";
import { useRouter } from "next/navigation"

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/auth", { email, password });
      const data = response.data;

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login/Register Successful!");
        router.push('/')
      }
    } catch (error: any) {
      console.error("Authentication Error:", error.response?.data || error.message);
      alert("Authentication failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login / Register</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email:</label>
        <input
          type="email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Password:</label>
        <input
          type="password"
          className="border p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
        disabled={loading}
      >
        {loading ? "Processing..." : "Login / Register"}
      </button>
    </form>
  );
}
