import "./globals.css";
import Navbar from "@/containers/Navbar/Navbar";
import { Providers } from "./providers";
import Image from "next/image";

export const metadata = {
  title: "Portfolio | Ahtasham",
  description: "My Portfolio website.",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark white",
    "twitter:image":
      "https://raw.githubusercontent.com/Ahtasham-ul-haq/ahtasham-portfolio/main/app/favicon.ico",
    "twitter:card": "summary_large_image",
    "og:url": "ahtasham-dev.vercel.app",
    "og:image":
      "https://raw.githubusercontent.com/Ahtasham-ul-haq/ahtasham-portfolio/main/app/favicon.ico",
    "og:type": "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="app dark:bg-dark-bg overflow-x-hidden">
        <Providers>
          {/* <div className="absolute w-full h-full mix-blend-multiply">
            <Image src={"/noisetexture.jpg"} fill />
          </div> */}
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
