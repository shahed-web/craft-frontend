import type { Metadata } from "next";
import "./globals.css";
import {rosario, openSans, arsenal, amatic} from "./fonts";
import MasterLayout from "@/components/layouts/MasterLayout";

export const metadata: Metadata = {
  title: "Benubon",
  description: "Towards green and sustainable future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${amatic.variable}
          ${rosario.variable}
          ${arsenal.variable}
          ${openSans.variable}
        `}
      >
        <MasterLayout>
        {children}
        </MasterLayout>
      </body>
    </html>
  );
}
