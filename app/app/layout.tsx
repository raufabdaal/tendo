import type { Metadata } from "next";
import "./globals.css";
import BrandBar from "@/components/BrandBar";
import AuthGate from "@/components/AuthGate";

export const metadata: Metadata = {
  title: "Tendo — PLE study",
  description:
    "A premium study platform for Ugandan upper-primary learners. Topic notes, practice questions, teacher-set work, parent visibility, and past papers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BrandBar />
        <AuthGate>{children}</AuthGate>
      </body>
    </html>
  );
}
