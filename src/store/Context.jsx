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
  showCartHandler: () => {},
  isLoading: null,
  showLoading: () => {},
  showModal: null,
  showModalHandler: () => {},
  modalData: {},
});

export default Context;