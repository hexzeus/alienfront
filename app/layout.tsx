import type { Metadata } from "next";
import ClientRootLayout from "./ClientRootLayout";

export const metadata: Metadata = {
  title: "Galactic Oasis",
  description: "Explore and review bathrooms across the galaxy!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
