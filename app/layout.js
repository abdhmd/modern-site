// src/app/layout.js
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export const metadata = {
  title: "MODERN SITE",
  description: "Built with Next.js App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
