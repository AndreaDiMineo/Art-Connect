import NavBar from "../home/Navbar";
import MuseiFirenze from "./MuseiGeneral";

const DescMusei = () => {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      <NavBar />
      <MuseiFirenze />
    </>
  );
};

export default DescMusei;
