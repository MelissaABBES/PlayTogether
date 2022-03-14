import './style.scss';
import userLogo from 'src/assets/img/user.png';
import { useSelector } from 'react-redux';

// == Composant
const MenuAvatar = ({ profile_picture }) => (
  // const { profile_picture } = useSelector((state) => state.user.settings);
    <div className="menu__avatar">

      <img className="menu__avatar--img" src={profile_picture} alt="Avatar de profil" />
    </div>
);

// == Export
export default MenuAvatar;
