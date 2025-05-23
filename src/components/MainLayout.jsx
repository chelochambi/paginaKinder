// src/components/MainLayout.jsx
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="container my-4" style={{ paddingTop: "70px" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
