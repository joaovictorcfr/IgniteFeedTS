import ContentHome from "./Components/Layout/ContentHome/ContentHome";
import { NavBar } from "./Components/Layout/NavBar/Navbar";
import { SliderBar } from "./Components/Layout/SliderBar/SliderBar";
import styles from "./Home.module.css";

// const posts = [
//   {
//     id: 1,
//     author: {
//       avatarUrl: "",
//       name: "Diego Fernandes",
//       role: "CTO @Rocketseat",
//     },
//     content: [
//       { type: "paragraph", content: "Fala galera" },
//       {
//         type: "paragraph",
//         content:
//           "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat O nome do projeto é DoctorCare 🚀",
//       },
//       { type: "link", content: "👉jane.design/doctorcare" },
//     ],
//     date: new Date("2023.11.03 20:00:00"),
//   },
// ];

function Home() {
  return (
    <div className={styles.navHome}>
      <NavBar />
      <div className={styles.container_home}>
        <div className={styles.center}>
          <div className={styles.home}>
            <SliderBar />
            <ContentHome />
          </div>
          <div className={styles.twoContent}>
            <ContentHome />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
