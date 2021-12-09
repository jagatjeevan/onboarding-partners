import { useState } from "react";
import { withQuoteMedQues } from "../../../context/quoteMedicalQuestion";
import AddQuoteMedQues from "./AddQuoteMedQues";
import Portal from "../../common/Modal/Portal";
import ModalLayout from "../../common/Modal/ModalLayout";
import styles from "../style.module.scss";
import policyStyles from "../PolicyStatusMessage/style.module.scss";

const QuoteMedicalQuestion = (props) => {
  const { state: medQuesState } = props.quoteMedQuesContext;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    if (!isModalOpen) return null;
    return (
      <Portal>
        <ModalLayout
          closeModal={() => setIsModalOpen(false)}
          headerText="Add Quote Medical Questions"
        >
          <AddQuoteMedQues closeModal={() => setIsModalOpen(false)} />
        </ModalLayout>
      </Portal>
    );
  };

  const showQuestions = () => {
    return medQuesState.questions.map((item) => (
      <span className={policyStyles.policyStatusCapsule}>
        {item.questionId}
      </span>
    ));
  }

  return (
    <fieldset className={styles.formSection}>
      <legend>Quote Medical Questions</legend>
      <div className="full-width">{showQuestions()}</div>
      <button className={styles.addButton} onClick={() => setIsModalOpen(true)}>
        + Add a new medical question
      </button>
      {showModal()}
    </fieldset>
  );
};

export default withQuoteMedQues(QuoteMedicalQuestion);
