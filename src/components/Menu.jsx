import '../App.css';
import React from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const Menu = () => {

{/* ITEMS IN MENU */}
  const [Items, SetItems] = useState([
    {id: 1, itemName: "water",quantity: 0, price:1.5 },
    {id: 2,itemName: "Groente",quantity: 1, price:2.5},
    {id: 3,itemName: "Fruit",quantity: 6, price:3.5},
  ])
{/* ITEMS IN CART */}
const [Cart, SetCart] = useState([
{itemName:"iets"}
])
 {/* PUSH ITEM TO CART ARRAY */}
const Add = (item) =>{

    const newCartItem = {
    itemName: item
  }

  const newCart = [...Cart, newCartItem]
  SetCart(newCart)
 }

  return (
    <div className="App">
    <div className='menu '>
     {/* MAP OVER MENU ITEMS*/}
    {Items.map(item => (
      <div className='menuItem'>
      <span>{item.id}.</span>
      <span >{item.itemName}</span> 
    {/* IF QUANTITY HIGHER THAN 0 CHANGE BUTTON */}
      {item.quantity === 0 ? (
        <button className='menuButton' onClick={() => Add(item.itemName)}>bestel</button>
      ) : 
      <div className='plusMin'>
      <button onClick={() => Add(item.itemName)} ><AddIcon /></button> {item.quantity} <button><RemoveIcon /> </button>
      </div>}
      </div>
    ))}    
    </div>
 {/* SHOPPING CART SECTION */}
    <div className='cart'>
    <div className='cartTop'>
    <h1>Shopping cart</h1>
 {/* MAP OVER CART ITEMS */}
    {Cart.map(item => (
      <div className='cartItem'><span>{item.itemName}</span></div>
    ))}
     </div>

     <hr></hr>

      <div className='cartBottom'>
        <div className='totaal'>21$</div>
      </div>
    </div>

  </div>
  )
}

export default Menu