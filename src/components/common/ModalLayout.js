import styles from "./style.module.scss";

const ModalLayout = (props) => {
  return (
    <>
      <div className={styles.backdrop}></div>
      <article className={styles.modalContainer}>
        <header>
          {props.headerText}
          <span className={styles.closeIcon} onClick={props.closeModal}>
            X
          </span>
        </header>
        <section className={styles.modalContent}>{props.children}</section>
      </article>
    </>
  );
};

export default ModalLayout;
