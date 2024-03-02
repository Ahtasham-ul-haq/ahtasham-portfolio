import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Navbar from "@/components/shared/Navbar";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex"
});
const IBMPlexCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-condensed"
});

export const metadata: Metadata = {
  title: "Ahtasham - Portfolio",
  description: "My Personal Portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={IBMPlex.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <ResizablePanelGroup
            direction="vertical"
            className="min-h-screen max-w-[1440px] mx-auto rounded-lg border"
          >
            <ResizablePanel defaultSize={15}>
              <div>
                <Navbar />
              </div>
            </ResizablePanel>
            <hr />
            <ResizablePanel defaultSize={85}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">
                  {children} 
                </span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ThemeProvider>
      </body>
    </html>
  );
}
