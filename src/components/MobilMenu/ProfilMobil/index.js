import './style.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import profil from 'src/assets/img/profil.png';

// == Composant
const ProfilMobil = () => {

  const logged = useSelector((state) => state.logged);

  console.log(logged);
  return (
  <div className="profil-mobil">
    <Link to="/profil"><img className="profil-mobil--profil" src={profil} /></Link>
  </div>
  );
};

// == Export
export default ProfilMobil;
