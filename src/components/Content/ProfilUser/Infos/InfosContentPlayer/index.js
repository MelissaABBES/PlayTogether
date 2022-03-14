import './style.scss';
import PSN from 'src/assets/img/playstation.png';
import Xbox from 'src/assets/img/xbox.png';
import Nintendo from 'src/assets/img/nintendo-switch.png';
import EG from 'src/assets/img/epic-games.png';
import Steam from 'src/assets/img/steam.png';
import Origin from 'src/assets/img/origin.png';

const InfosContent = ({
  isInfosVisible,
  player,
}) => {
  const classVisible = isInfosVisible ? 'contenu active-contenu' : 'contenu hide-contenu';
  return (
    <div id="INFOS" className={classVisible}>
      <div className="profil__flex">
        <div className="profil__content--desc">
          <p>{player.presentation}</p>
        </div>
        <div className="profil__content--gameTags">
          <div className="gamerTag">
            <div className="gamerTag__img">
              <img src={PSN} alt="Logo PSN" />
            </div>
            <p>{player.gamertag_psn}</p>
          </div>
          <div className="gamerTag">
            <div className="gamerTag__img">
              <img src={Xbox} alt="Logo Xbox" />
            </div>
            <p>{player.gamertag_xbox}</p>
          </div>
          <div className="gamerTag">
            <div className="gamerTag__img">
              <img src={Nintendo} alt="Logo Nintendo" />
            </div>
            <p>{player.gamertag_nintendo}</p>
          </div>
          <div className="gamerTag">
            <div className="gamerTag__img">
              <img src={EG} alt="Logo Epic games" />
            </div>
            <p>{player.gamertag_eg}</p>
          </div>
          <div className="gamerTag">
            <div className="gamerTag__img">
              <img src={Steam} alt="Logo Steam" />
            </div>
            <p>{player.gamertag_steam}</p>
          </div>
          <div className="gamerTag">
            <div className="gamerTag__img">
              <img src={Origin} alt="Logo Origin" />
            </div>
            <p>{player.gamertag_origin}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfosContent;
