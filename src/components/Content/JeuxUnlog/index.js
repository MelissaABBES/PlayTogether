import './style.scss';
import gameController from 'src/assets/img/game-controller.png';
import house from 'src/assets/img/house.png';
import angleCercle from 'src/assets/img/angle-cercle.png';
import chercher from 'src/assets/img/chercher.png';

const JeuxUnlog = () => {
  
return(
  <div>
    <input className="Search" placeholder="Rechercher un jeu" type="text" />
    <img className="chercher" src={chercher}></img>
  <div className="unlog">
    
  <div className="Genre">Genre
  
    <select className="select__unlog">
      <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
    </select>
    </div>
  
    <div className="Plateforme">Plateforme
    <select className="select__unlog">
      <option value="">--Please choose an option--</option>
    <option value="dog">Psn</option>
    <option value="cat">Xbox</option>
    <option value="hamster">Nintendo</option>
    <option value="parrot">Epic Game</option>
    <option value="spider">Steam</option>
    <option value="goldfish">Origin</option>
      </select>
      </div>
    <div className="Notes">Notes
    <select className="select__unlog">
      <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
      </select>
    </div>
    <div className="Nombre">Nombre de joueurs
    <select className="select__unlog">
      <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
      </select>
    </div>
    <div className="button">
      <button className="filter">Filtrer</button>
      <button className="effacer">Effacer la sélection</button>
    </div>
    <div className="button__angle">
      <img className="angle" src={angleCercle}></img>
    </div>
    <div className="content__btn">
    <button className="content__btn__register">S'inscrire</button>
    <button className="content__btn__login">Login</button>
  </div>
  </div>
  </div>
  
    

  
)
};



export default JeuxUnlog;
