import type { Metadata } from "next";
import "./globals.css";
import BrandBar from "@/components/BrandBar";
import AuthGate from "@/components/AuthGate";

export const metadata: Metadata = {
  title: "Tendo — PLE study",
  description:
    "A focused, school-sold platform for Ugandan upper-primary PLE study. Topic notes, auto-graded quizzes, and past papers.",
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
