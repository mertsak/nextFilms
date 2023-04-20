import "@/styles/reset.css";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreProvider from "@/redux/storeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black font-sans text-base text-white relative">
        <Header />
        <main className="content-wrapper container px-5">
          <StoreProvider>{children}</StoreProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
