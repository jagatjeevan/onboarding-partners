import BasicInfo from "./BasicInfo/index";
import styles from "./style.module.scss";
import PolicyStatusMessage from "./PolicyStatusMessage";

export default function MainSection() {
  return (
    <>
      <BasicInfo />
      <PolicyStatusMessage />
      <div className={styles.actionContainer}>
        <input type="button" value="Save as draft" />
        <input type="button" value="Submit" />
      </div>
    </>
  );
}
