import styles from "../styles/button.module.css";
const Button = (props: any) => {
  return (
    <div className={styles.button_container}>
      <button className={styles.button_container_btn}>编辑</button>

      <button className={styles.button_container_btn}>紧用</button>
    </div>
  );
};

export default Button;
