import React from "react";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Hungry Hub</h2>

        <p>Indulge in a Flavorful Journey with HungryHub – Where Every Bite Brings Bliss!</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right reserved @HungryHub</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/raunak-srivastava6762/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/Raunak-Srivastava">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;