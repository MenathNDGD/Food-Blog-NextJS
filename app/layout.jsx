import "./globals.css";

import MainHeader from "@/components/MainHeader/MainHeader";

export const metadata = {
  title: "DeliCasa",
  description: "Where Every Bite Feels Like Home!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
