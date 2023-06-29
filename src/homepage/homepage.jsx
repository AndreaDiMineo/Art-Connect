import Footer from './footer';
import HomepageHeader from "./homepageHeader"
import './homepageStyle.css';

const Homepage = () => {
  return (
    <div>
      <HomepageHeader/>
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
