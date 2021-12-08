import MainSection from "../components/mainSection";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <article className={styles.container}>
      <section className={styles.main}>
        <h1>Form starts here</h1>
        <MainSection />
      </section>
      <section className={styles.uiField}>
        <h1>UI Fields</h1>
      </section>
      <section className={styles.validations}>
        <h1>validations</h1>
      </section>
      <section className={styles.data}>
        <h1>Data</h1>
      </section>
      <section className={styles.uiOptions}>
        <h1>UI Options</h1>
      </section>
      <section className={styles.formatting}>
        <h1>Formatting</h1>
      </section>
    </article>
  );
}
