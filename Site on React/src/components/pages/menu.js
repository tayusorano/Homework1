import Header from '../header/header';
import MainBlock from '../main-block/main-block';
import { useState } from 'react';

function Menu() {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);
  
    const addItem = (itemPrice) => {
      setCount(count + 1);
      setPrice(price + itemPrice);
    }
  
    return (
      <div className="menu">
        <Header count={count} price={price} title={'НАША ПРОДУКЦИЯ'}/>
        <MainBlock addItem = {addItem}/>
      </div>
    );
  }

export default Menu;