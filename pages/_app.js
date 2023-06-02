import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "../app/globals.css";
import { SessionProvider } from "next-auth/react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
}
