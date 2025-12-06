import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "./fonts";

export const metadata: Metadata = {
  title: "정솔미 2025 포트폴리오",
  description: "정솔미 2025 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.className} antialiased flex items-center justify-center bg-transparent`}
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-y-scroll">
          {children}
        </div>
      </body>
    </html>
  );
}
