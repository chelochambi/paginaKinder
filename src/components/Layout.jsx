// src/components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container my-4">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
