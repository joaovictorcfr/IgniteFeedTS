import styles from "./SliderBar.module.css";
import Profile from "../../../Img/Profile.png";
import Retangle from "../../../Img/Rectangle.png";

export const SliderBar = () => {
  return (
    <div className={styles.container_sliderBar}>
      <img src={Retangle} alt="retangulo" />

      <div className={styles.content_slider}>
        <img src={Profile} alt="profile" />
      </div>

      <div className={styles.profile}>
        <h2>Leticia Moura</h2>
        <span>UI Designer</span>
        <hr />
        <div className={styles.btn}>
          <button>✍️Editar seu perfil</button>
        </div>
      </div>
    </div>
  );
};
