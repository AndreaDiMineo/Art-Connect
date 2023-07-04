import NavBar from "../home/Navbar";
import MuseiFirenze from "./MuseiGeneral";
import Footer from "../home/Footer";
import MainFirenze from "./mainMusei";
const DescMusei = () => {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      <NavBar />
      <MuseiFirenze />
      <MainFirenze />
      <Footer />
    </>
  );
};

export default DescMusei;
