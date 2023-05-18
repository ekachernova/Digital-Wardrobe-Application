import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import "../app/globals.css";

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
      <Component {...pageProps} />
    </Layout>
  );
}
