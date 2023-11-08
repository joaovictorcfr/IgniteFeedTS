import styles from "./ContentHome.module.css";
import Avatar from "../../../Img/Profile.png";
import Comments from "../../Comments/Comments";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

function ContentHome() {
  const [addComent, setAddComent] = useState(["Gostei muito do seu trabalho, parabens!"]);

  const handleComentsatt = (event: FormEvent) => {
    event.preventDefault();
    setAddComent([...addComent, newCommentText]);
    setNewCommentText("");
  };

  const [newCommentText, setNewCommentText] = useState("");

  const handleNewComentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentToDelete: string) => {
    const commentListAtt = addComent.filter((addComent) => {
      return addComent != commentToDelete;
    });

    setAddComent(commentListAtt);
  };

  const handleNewCommetInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  };

  const disableButton = newCommentText.length === 0

  return (
    <div className={styles.contentHome}>
      <header>
        <img src={Avatar} alt="avatar-login" />

        <div className={styles.profile}>
          <strong>Jane Cooper</strong>
          <span>Dev Front-End</span>
        </div>

        <span>Publicado há 1h</span>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <a href="#">👉jane.design/doctorcare</a>
        <span>#novoprojeto #nlw #rocketseat</span>
      </div>

      <span>
        <hr />
      </span>

      <form onSubmit={handleComentsatt} className={styles.feedback}>
        <span>Deixe seu feedback</span>
        <textarea
          onChange={handleNewComentChange}
          name="comments"
          value={newCommentText}
          placeholder="Digite o seu feedback"
          onInvalid={handleNewCommetInvalid}
          required
        ></textarea>
        <footer>
          <button type="submit" disabled={disableButton}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {addComent.map((coments) => {
          return (
            <Comments
              key={coments}
              content={coments}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ContentHome;
