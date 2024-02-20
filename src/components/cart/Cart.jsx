import React from 'react'
import Biryani from "../../assets/biryani1.png"
import Burger1 from "../../assets/burger1.png"
import Burger2 from "../../assets/burger2.png"
import Burger3 from "../../assets/burger3.png"
import pizza from "../../assets/pizza.png"
import Chicken from "../../assets/Chicken.png"
import SpringRoll from "../../assets/Spring Rolls.png"
import VegThali from "../../assets/VegThali.png"
import Noodles from "../../assets/noodles.png"
import { Link } from 'react-router-dom'



const CartItem = ({value , title , img , increment , decrement}) => (
  <div className='cartItem'>
  <div>
    <h4>{title}</h4>
    <img src={img} alt="Item" />
  </div>

  <div>
    <button onClick={decrement}>-</button>
    <input type="number" readOnly value={value}/>
    <button onClick={increment}>+</button>
  </div>
    
  </div>
);

const Cart = () => {

  const increment = () => {};
  const decrement = () => {};


  return (
    <section className='cart'>
        <main>
          <CartItem title={"Hyderabadi Biryani"} img={Biryani} value={0} increment={()=> increment(1)} decrement={()=> decrement(1)} />
          <CartItem title={"Cheese Burger"} img={Burger1} value={0} increment={()=> increment(2)} decrement={()=> decrement(2)} />
          <CartItem title={"Hamburger"} img={Burger2} value={0} increment={()=> increment(3)} decrement={()=> decrement(3)} />
          <CartItem title={"Burger with Fries"} img={Burger3} value={0} increment={()=> increment(2)} decrement={()=> decrement(2)} />
          <CartItem title={"Pizza"} img={pizza} value={0} increment={()=> increment(2)} decrement={()=> decrement(2)} />
          <CartItem title={"Chicken Kebab"} img={Chicken} value={0} increment={()=> increment(3)} decrement={()=> decrement(3)} />
          <CartItem title={"Spring Rolls"} img={SpringRoll} value={0} increment={()=> increment(3)} decrement={()=> decrement(3)} />
          <CartItem title={"Veg Thali"} img={VegThali} value={0} increment={()=> increment(2)} decrement={()=> decrement(2)} />
          <CartItem title={"Noodles"} img={Noodles} value={0} increment={()=> increment(2)} decrement={()=> decrement(2)} />

          <article>
            <div>
              <h4>Sub Total</h4>
              <p>₹{2000}</p>
            </div>
            <div>
              <h4>Tax</h4>
              <p>₹{2000*0.18}</p>
            </div>
            <div>
              <h4>Shipping Charges</h4>
              <p>₹{40}</p>
            </div>{" "}
            <div>
              <h4>Total</h4>
              <p>₹{2000 + 2000*0.18 + 40}</p>
            </div>

            <Link to="/shipping">Checkout</Link>
          </article>


        </main>
    </section>
  )
}

export default Cart