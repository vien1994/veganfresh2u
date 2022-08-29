import {useContext} from 'react';
import Context from '../../store/Context';

function Pricing() {
  const {closeHamburger} = useContext(Context)

  return (
    <div onClick={closeHamburger}>
      Choose Your Plan Type
    </div>
  )
}

export default Pricing;