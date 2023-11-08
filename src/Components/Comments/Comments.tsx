import styles from "./Comments.module.css";
import Avatar from "../../Img/Rectangle4234.png";
import { BiTrash } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { useState } from "react";


interface commentsProps {
  content: string;
  onDeleteComment: (comment: string) => void ;
}

function Comments({ content, onDeleteComment }:commentsProps) {
  const HandleRemoveCommentsText = () => {
    onDeleteComment(content);
  };

  const [like, setLike] = useState(0);

  const handleSetLike = () => {
    setLike((state) => {
      return state + 1;
    });
  };

  return (
    <div className={styles.moduleCenter}>
      <div className={styles.comments}>
        <div className={styles.cardComments}>
          <img src={Avatar} alt="profile-login" />
        </div>

        <div className={styles.moduleCard}>
          <div className={styles.card}>
            <div className={styles.nameComments}>
              <strong>
                Devon Lane<span className={styles.you}>(você)</span>
              </strong>
              <span className={styles.time}>Cerca de 3h</span>
            </div>

            <div className={styles.icone}>
              <li onClick={HandleRemoveCommentsText}>
                <BiTrash />
              </li>
            </div>
          </div>
          <p>{content}</p>
        </div>
      </div>
      <div className={styles.iconeFeed}>
        <footer onClick={handleSetLike}>
          <BiLike />
          <p>
            Aplaudir <span></span> {like}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Comments;
