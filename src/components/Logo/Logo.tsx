import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <span role="img" aria-label="metal hand emoji">
      &#129304;
      </span>
      <span role="img" aria-label="musical keyboard emoji">
      &#127929;
      </span>
      <span role="img" aria-label="musical notes emoji">
      &#127926;
      </span>
    </h1>
  );
};
