import BasicInfo from "./BasicInfo/index";
import styles from "./style.module.scss";

export default function MainSection() {
  return (
    <>
      <BasicInfo />
      <fieldset className={styles.formSection}>
        <legend>VARIANT</legend>
      </fieldset>
      <div className={styles.actionContainer}>
        <input type="button" value="Save as draft" />
        <input type="button" value="Submit" />
      </div>
    </>
  );
}
