import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:adarshnarayangumla@gmail.com" target="_blank">
            adarshnarayangumla@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://linkedin.com/in/adarsh-narayan-711a24263"
            target="_blank"
          >
            linkedin.com/in/adarsh-narayan-711a24263
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/adarshnarayan04" target="_blank">
            https://github.com/adarshnarayan04
          </a>
        </li>
      </ul>
    </footer>
  );
};
