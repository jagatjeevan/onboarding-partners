import BasicInfo from "./BasicInfo/index";
import styles from "./style.module.scss";
import PolicyStatusMessage from "./PolicyStatusMessage";
import QuoteMedicalQuestion from "./QuoteMedicalQuestion";

export default function MainSection() {
  return (
    <>
      <BasicInfo />
      <PolicyStatusMessage />
      <QuoteMedicalQuestion />
      <div className={styles.actionContainer}>
        <input type="button" value="Save as draft" />
        <input type="button" value="Submit" />
      </div>
    </>
  );
}
