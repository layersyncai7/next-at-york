import "./globals.css";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

export const metadata = {
  title: "Nest at York",
  description: "Hotel-inspired demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="fixed w-full z-30 bg-transparent">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-xl font-semibold">NestAtYork</Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="hover:underline">Home</a>
              <a href="#rooms" className="hover:underline">Rooms</a>
              <a href="#dining" className="hover:underline">Dining</a>
              <a href="#services" className="hover:underline">Guest Services</a>
              <Link href="/rooms" className="text-sm px-3 py-1 border rounded">Rooms</Link>
            </nav>

            {/* Mobile nav button */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </header>

        <main id="home" className="pt-20">
          {children}
        </main>

        <footer className="mt-20 py-12 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} NestAtYork
        </footer>
      </body>
    </html>
  );
}
