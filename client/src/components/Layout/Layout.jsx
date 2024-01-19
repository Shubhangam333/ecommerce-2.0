import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <section className="min-h-screen p-4">{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
