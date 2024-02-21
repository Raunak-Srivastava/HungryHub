import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/profile.jpeg"
import {Link} from "react-router-dom"
import {MdDashboard , MdLogout , MdFastfood} from "react-icons/md"

const Profile = () => {
  const options={
    initial:{y: "-100%" , opacity: 0},
    animate: {y: 0 , opacity: 1},
  }  



  return (
    <section className='profile'>
        <main>
            <img src={me} alt="User" {...options} />
            <motion.h5 {...options} transition={{delay: 0.3}} >Raunak Srivastava</motion.h5>

            <motion.div {...options} transition={{delay: 0.5}} >
                <Link to="/admin/dashboard"
                style={{
                    borderRadius: 0,
                    backgroundColor: "rgb(40,40,40)",
                }}
                
                ><MdDashboard /> Dashboard</Link>
            </motion.div>

            <motion.div 
                initial={{x: "-100vw", opacity: 0 }}
                animate={{x: 0, opacity: 1}}>
                <Link to="/myorders"><MdFastfood /> Orders</Link>
            </motion.div>

            <motion.button
                initial={{x: "-100vw", opacity: 0 }}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 0.3}}
            >
                <MdLogout /> Logout
            </motion.button>
        </main>
    </section>
  )
}

export default Profile