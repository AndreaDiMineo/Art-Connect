import "../styles/headerStyle.css";

const Nav = () => {
  return (
    <header className="header">
      <div className="headerLeft">
        <img
          className="logo"
          src="https://i.ibb.co/sq7qsF4/logo-Art-Connect-White.png"
          alt="logo"
        />
        <nav className="navLinks">
          <button className="linkBtn">Musei</button>
          <button className="linkBtn">Eventi</button>
          <button className="linkBtn">Assistenza</button>
        </nav>
      </div>
      <div className="headerRight">
        <div className="headerRightIcons">
          <img className="globe" src="https://i.ibb.co/M24xQDv/globe.png" />
          <img className="globe" src="https://i.ibb.co/CWYtHLZ/bell.png" />
          <a href="profile"><img className="globe" src="https://i.ibb.co/YLNmppN/icons8-person-24.png"/></a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
