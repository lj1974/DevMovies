/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./styles.module.css";
import filme from "../../assets/filme.png";
// eslint-disable-next-line react/prop-types
export function OthersCard({ thumbnail, movieName, types }) {
  console.log(types);
  return (
    <div className={styles.contentCard}>
      <div className={styles.imgBoxCardOther}>
        <img src={filme} alt="" />
      </div>
      <h1>{movieName}</h1>
      <div className={styles.buttonRating}>
        {types.map((type, index) => (
          <button key={index}>{type}</button>
        ))}
      </div>
    </div>
  );
}
