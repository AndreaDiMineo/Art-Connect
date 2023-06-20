import Footer from './footer';
import './homepageStyle.css';

const Homepage = () => {
  const ExtendInputBar = () => {
    const search = document.querySelector(".input");
    const info = document.querySelector(".right-info");
    search.setAttribute("placeholder", "Inserisci la tua città");
    search.style.transition = "width 1s";
    search.style.width = "10rem";
    search.style.marginTop = "0.7%";
    info.style.marginLeft = "62%";
  }

  const OriginalInputBar = () => {
    const search = document.querySelector(".input");
    const info = document.querySelector(".right-info");
    search.removeAttribute("placeholder");
    search.style.width = "2.5rem";
    search.style.marginTop = "1.5%";
    info.style.marginLeft = "70%";
  }
  return (
    <div>
      <header>
        <img
          className="logo"
          src="https://i.ibb.co/sq7qsF4/logo-Art-Connect-White.png"
        />
        <a className="link" href="#">
          Visita
        </a>
        <div className='input-geo'>
          <input className="input" onMouseOut={OriginalInputBar}/>
          <img className='map-pin' src='https://i.ibb.co/4JWWxhz/map-pin.png' onMouseOver={ExtendInputBar}/>
        </div>
        <div className='right-info'>
          <button className="button"><a href='login'>Accedi</a></button>
          <img className="globe" src='https://i.ibb.co/M24xQDv/globe.png'/>
        </div>
      </header>
      <section className="section-homepage">
        <h1 className="title">Benvenuto ad ArtConnect</h1>
        <button className="buttonSearch">
          Cerca e pianifica la tua visita
        </button>
      </section>
      <h1>Categorie</h1>
      <div className='list'>
        <div className='images'>
          <picture>
            <img src='https://citynews-napolitoday.stgy.ovh/~media/original-hi/14172660293521/casamadre-2.jpg'/>
            <img src='https://www.exibart.com/repository/media/2020/08/Christo-The-London-Mastaba-AR.jpg'/>
            <img src='https://conteudo.imguol.com.br/blogs/288/files/2019/06/Mori-Building-Japan-1024x682.jpeg'/>
            <img src='https://www.altrospaziodarte.it/wp-content/uploads/2020/12/spiderman.2020-1-1600x900.jpg'/>
            <img src='https://www.storicang.it/medio/2021/07/22/van-gogh-dipinse-la-straordinaria-notte-stellata-nel-1889_57fea25a_800x620.jpg'/>
            <img src='https://www.turismo.it/typo3temp/pics/b34afe7e70.jpg'/>
          </picture>
        </div>
        <div className='categories'>
          <p>Gallerie D'arte</p>
          <p>Realtà Aumentata</p>
          <p>Tecnologia</p>
          <p>Arte Astratta</p>
          <p>Storia</p>
          <p>Orientale</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;
