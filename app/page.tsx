"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <header className="row-start-1 flex items-center justify-between w-full max-w-4xl">
        <nav className="flex gap-6">
          {isAuthenticated ? (
            <>
              <Link href="/team" className="text-sm font-medium hover:underline text-gray-800">
                Team
              </Link>
              <Link href="/transfers" className="text-sm font-medium hover:underline text-gray-800">
                Transfers
              </Link>
            </>
          ) : (
            <Link href="/auth" className="text-sm font-medium hover:underline text-gray-800">
              Login / Register
            </Link>
          )}
        </nav>
      </header>

      <main className="flex flex-col items-center text-center gap-6 row-start-2">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Football Manager
        </h1>
        <p className="text-lg text-gray-600">
          Build your dream team, manage transfers, and dominate the field.
        </p>
        {isAuthenticated ? (
          <div className="flex gap-4">
            <Link
              href="/team"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              View Your Team
            </Link>
            <Link
              href="/transfers"
              className="bg-gray-100 border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Go to Transfers
            </Link>
          </div>
        ) : (
          <p className="text-gray-500">Please login to access your team and transfers.</p>
        )}
      </main>
    </div>
  );
}
