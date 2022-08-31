import { useContext } from 'react';
import Context from '../../store/Context.jsx';
import MenuTabs from './MenuTabs.jsx';

function Menu() {
  const {dropdownOpen} = useContext(Context);

  return (
    <div className={`col-start-1 col-end-7 row-start-1 row-end-7 ${dropdownOpen === true ? 'overflow-clip' : ''}`}>
      <MenuTabs />
    </div>
  )
}

export default Menu;