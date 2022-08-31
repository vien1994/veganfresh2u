import {createContext} from 'react';

const Context = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}, 
  db: null, 
  auth: null,
  dropdown: null,
  closeHamburger: () => {},
  cartIsShown: null,
  showCartHandler: () => {}
});

export default Context;