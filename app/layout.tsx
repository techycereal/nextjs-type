import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Spa Treatment",
  description: "Enjoy a selection of spa treatments from professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

      </body>
      <footer className="bg-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
          <div>
            <h3 className="text-xl font-semibold">Luxury Spa</h3>
            <p>123 Tranquility Road, Spa Town, Country</p>
            <p>Email: info@luxuryspa.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <ul className="flex space-x-4 mt-4">
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </html>
  );
}
