import './style.scss';
import { useSelector } from 'react-redux';
import Settings from './Settings';

// == Composant
const AccountSettingsPage = () => {
  const { settings } = useSelector((state) => state.user);
  return (
    <Settings
      handleModal={() => {
        console.log('jai la modal');
      }}
      {...settings}
    />
  );
};

// == Export
export default AccountSettingsPage;
