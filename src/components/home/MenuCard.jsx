import React from 'react'
import { motion } from 'framer-motion'
import { FiShoppingCart } from "react-icons/fi";

const MenuCard = ({itemNum , itemImg , price , title , handler , delay=0}) => {
  return (
    <motion.div className='menuCard'
    initial={{ x: "-100%", opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={delay}
    >
        <div>Item {itemNum}</div>
        <main>
            <img src={itemImg} alt={itemNum} />
            <h5>₹{price}</h5>
            <p>{title}</p>
            <button>Add to Cart <FiShoppingCart /></button>
        </main>
    </motion.div>
  )
}

export default MenuCard