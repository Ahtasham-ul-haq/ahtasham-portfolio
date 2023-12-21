import "./globals.css";
import Navbar from "@/containers/Navbar/Navbar";
import { Providers } from "./providers";

export const metadata = {
  title: "Portfolio | Ahtasham",
  description: "My Portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="app dark:bg-dark-bg">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
