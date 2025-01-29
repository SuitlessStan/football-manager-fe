"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/auth");
  };

  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-500">
              Football Manager
            </Link>
            <nav className="flex gap-4">
              {isAuthenticated ? (
                <>
                  <Link href="/team" className="text-sm font-medium hover:underline text-gray-800">
                    Team
                  </Link>
                  <Link href="/transfers" className="text-sm font-medium hover:underline text-gray-800">
                    Transfers
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-red-500 hover:underline"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/auth" className="text-sm font-medium hover:underline text-gray-800">
                  Login / Register
                </Link>
              )}
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
