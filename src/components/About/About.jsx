import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    async function fetchUserRating() {
      try {
        const response = await fetch(
          `https://codeforces.com/api/user.rating?handle=the_magician_`
        );
        const data = await response.json();
        const len = data.result.length;

        setUserName(data.result[len - 1].handle);
        setRating(data.result[len - 1].newRating);
      } catch (error) {
        console.error("Error fetching user rating:", error);
      }
    }

    fetchUserRating();
  }, []);
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/cartoon.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>CodeForces Profile</h3>
              <p>
                UserName : {userName}
                <br/>
                UserRating : {rating}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
