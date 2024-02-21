import React from 'react'
import { motion } from "framer-motion";
import me from "../../assets/profile.jpeg"

const Founder = () => {
    const options={
        initial: { x: "-100%", opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
    }
  return (
    <section className='founder'>
    <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200}/>
        <h3>Raunak Srivastava</h3>
        <p>
            Hey, I am Raunak Srivastava, the founder of HungryHub. I started this company with the vision of providing the best food delivery service in the world. I hope you enjoy our service.
        </p>
    </motion.div>
    </section>
  )
}

export default Founder