import {createContext} from 'react';

const Context = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}, 
  db: null, 
  auth: null
});

export default Context;