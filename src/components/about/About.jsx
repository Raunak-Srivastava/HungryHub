import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from "react-icons/ri"
import me from "../../assets/profile.jpeg"

const About = () => {
  return (
    <section className='about'>
    <main>
        <h1>About Us</h1>

        <article>
            <h3>Hungry Hub</h3>
            <h4>Dine in delight, with HungryHub in sight.</h4>
            <p>
                HungryHub is a food delivery service that allows you to order food from your favourite restaurants and have it delivered to your doorstep. We offer a wide range of cuisines, from fast food to healthy options, and everything in between. Our goal is to make it easy for you to enjoy delicious food without having to leave the comfort of your home.
            </p>

            <p>
                Explore our menu and discover new dishes from local restaurants. Whether you're craving pizza, spring rolls, or something sweet, we've got you covered. Our user-friendly app makes it easy to place an order and track your delivery in real-time. We also offer a variety of payment options, so you can choose the one that works best for you.
                Click below to see our menu and start your order today!
            </p>

            <Link to="/#menu">
                <RiFindReplaceLine />
            </Link>
        </article>

        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={me} alt="Founder" />
                    <h3>Raunak Srivastava</h3>
                </div>
                <p>
                Raunak Srivastava, the visionary behind HungryHub, embarked on a mission to revolutionize how people indulge in delectable cuisine from their cherished eateries. Fueled by a fervent passion for both food and technology, he continually seeks innovative avenues to elevate the customer journey. With an unwavering dedication, he pledges to deliver a premium service tailored to the demands of today's dynamic consumers, ensuring a seamless and delightful experience for all.
                </p>
            </article>
        </div>
    </main>
    </section>
  )
}

export default About