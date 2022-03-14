import './style.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// == Composant
const HomePage = () => {

  const logged = useSelector((state) => state.logged);

  const games = () => {
    const [state, setState] = useState([]);
    const fetchResource = () => {
      axios.get('https://playtogether-back.herokuapp.com/games/count')
        .then((res) => {
          setState(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    useEffect(fetchResource, []);

    return [state];
  };

  const users = () => {
    const [state, setState] = useState([]);
    const fetchResource = () => {
      axios.get('https://playtogether-back.herokuapp.com/users/count')
        .then((res) => {
          setState(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    useEffect(fetchResource, []);

    return [state];
  };

  return (

    <div>
      <div className="content">
        
        <div className="content__text">
            <h1>La nouvelle plateforme qui regroupe facilement les joueurs !</h1>
            <p>Vous avez du mal à trouver des joueurs avec qui jouer au dernier jeu sorti ?</p>
            <p>Vos amis ne jouent peut-être pas au mêmes jeux que vous, et honnêtement, jouer tout seul à un jeu multijoueur, c'est pas drôle !</p>
            <p className="content__text--line">PlayTogether est là pour répondre à ce besoin !</p>
            <div className="content__counter">
              <p><span className="content__counter__number">{users()}</span> joueurs inscrits</p>
              <p><span className="content__counter__number">{games()}</span> jeux disponibles</p>
            </div>
            <p>Pour des parties fun dans la joie et la bonne humeur, c'est juste en-dessous !</p>
          </div>
          <div className="content__btn">

            {!logged && <Link className="content__btn__register" to="/register">S'inscrire</Link>}

          </div>
          
          <div className="content__text">
            <p className="content__text__succes"><i className="fas fa-trophy" />Pour les autres, viendez ici pour débloquer votre premier succès<i className="fas fa-trophy" /></p>
          </div>
        
      
    </div>
  </div>
  );
};

// == Export
export default HomePage;
