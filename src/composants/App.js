import React from 'react';
import './App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Game from './Game';

function App() {
  return (
  <React.Fragment>
    <Banner />
    <Cart />
    <ShoppingList />
    <Game />
  </React.Fragment>
  );
}

export default App;
