import React from 'react'
import MenuCard from './MenuCard'
import Biryani from "../../assets/biryani1.png"
import Burger1 from "../../assets/burger1.png"
import Burger2 from "../../assets/burger2.png"
import Burger3 from "../../assets/burger3.png"
import pizza from "../../assets/pizza.png"
import Chicken from "../../assets/Chicken.png"
import SpringRoll from "../../assets/Spring Rolls.png"
import VegThali from "../../assets/VegThali.png"
import Noodles from "../../assets/noodles.png"

const Menu = () => {
  const addToCartHandler = (itemNum) => {};
    
  return (
    <section id='menu'>
        <h1>MENU</h1>
        <div>
            <MenuCard itemNum={1} itemImg={Biryani} price={399} title={"Hyderabadi Biryani"} handler={addToCartHandler} delay={0.1}/>
            <MenuCard itemNum={2} itemImg={Burger1} price={199} title={"Cheese Burger"} handler={addToCartHandler} delay={10}/>
            <MenuCard itemNum={3} itemImg={Burger2} price={259} title={"HamBurger"} handler={addToCartHandler} delay={0.5}/>
            <MenuCard itemNum={4} itemImg={Burger3} price={259} title={"Burger with Fries"} handler={addToCartHandler} delay={0.7}/>
            <MenuCard itemNum={5} itemImg={pizza} price={199} title={"Pizza"} handler={addToCartHandler} delay={0.9}/>
            <MenuCard itemNum={6} itemImg={Chicken} price={199} title={"Chicken Kebab"} handler={addToCartHandler} delay={1.1}/>
            <MenuCard itemNum={7} itemImg={SpringRoll} price={159} title={"Spring Rolls"} handler={addToCartHandler} delay={1.3}/>
            <MenuCard itemNum={8} itemImg={VegThali} price={399} title={"Veg Thali"} handler={addToCartHandler} delay={1.5}/>
            <MenuCard itemNum={9} itemImg={Noodles} price={99} title={"Veg Noodles"} handler={addToCartHandler} delay={1.8}/>
        </div>
    </section>
  )
}

export default Menu