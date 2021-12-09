import { useState } from "react";
import { withQuoteMedQues } from "../../../context/quoteMedicalQuestion";
import styles from "../style.module.scss";

const AddQuoteMedQues = (props) => {
  const { state: medQuesState, actions: medQuesActions } =
    props.quoteMedQuesContext;
  const [questionId, setQuestionId] = useState("");
  const [sortId, setSortId] = useState("");
  const [defaultValue, setDefaultValue] = useState("");
  const [optionsForField, setOptionsForField] = useState([]);
  const [isOptionViewVisible, setIsOptionViewVisible] = useState(false);
  const [optionId, setOptionId] = useState('');
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");

  const updateMedicalQuestions = () => {
    const payload = {
      questionId: questionId,
      defaultValue: defaultValue,
      options: optionsForField,
    };
    medQuesActions.updateQuestion(payload);
  };

  const addOptions = () => {
      medQuesActions.updateOptions({
        optionId,
        label,
        value,
      });
      setIsOptionViewVisible(false);
  }

  const showOptions = () => {
    return medQuesState.options.map((item) => {
      return (
        <>
          <input
            type="checkbox"
            name="optionsForFields"
            value={item.value}
            id={`checkbox-${item.id}`}
            checked={optionsForField.includes(item.id)}
            onChange={(e) => {
              if (e.target.checked) {
                setOptionsForField([...optionsForField, item.id]);
              } else {
                const updatedValue = optionsForField.filter(
                  (option) => option !== item.id
                );
                setOptionsForField(updatedValue);
              }
            }}
          />
          <label
            htmlFor={`checkbox-${item.id}`}
            style={{ marginRight: "15px" }}
          >
            {item.label}
          </label>
        </>
      );
    });
  };

  const getDefaultOptions = () => {
    return medQuesState.options
      .filter((item) => optionsForField.includes(item.id))
      .map((item) => {
        return (
          <>
            <input
              type="radio"
              name="defaultValue"
              value={item.value}
              id={`radio-${item.id}`}
              checked={item.id === defaultValue}
              onChange={(e) => {
                if (e.target.checked) setDefaultValue(item.id);
              }}
            />
            <label htmlFor={`radio-${item.id}`} style={{ marginRight: "15px" }}>
              {item.label}
            </label>
          </>
        );
      });
  };

  const questionView = () => {
    if (isOptionViewVisible) return null;
    return (
      <>
        <legend>Add Medical questions</legend>
        <label htmlFor="questionId">Question Id</label>
        <input
          type="text"
          id="questionId"
          value={questionId}
          onChange={(e) => setQuestionId(e.target.value)}
        />
        <label htmlFor="quessortIdtionId">Sort Order No</label>
        <input
          type="text"
          id="sortId"
          value={sortId}
          onChange={(e) => setSortId(e.target.value)}
        />
        <label htmlFor="options">Options</label>
        <div>{showOptions()}</div>
        <label htmlFor="defaultValue">Default Value</label>
        <div>{getDefaultOptions()}</div>
        <button className={styles.addButton} onClick={updateMedicalQuestions}>
          Add Medical Questions
        </button>
        <button
          className={styles.addButton}
          onClick={() => setIsOptionViewVisible(true)}
        >
          Add Options
        </button>
      </>
    );
  };

  const optionView = () => {
      if (!isOptionViewVisible) return null;
      return (
        <>
          <legend>Add Medical options</legend>
          <label htmlFor="optionId">Opton Id</label>
          <input
            type="text"
            id="optionId"
            value={optionId}
            onChange={(e) => setOptionId(e.target.value)}
          />
          <label htmlFor="label">Label</label>
          <input
            type="text"
            id="label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
          <label htmlFor="value">Value</label>
          <input
            type="text"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className={styles.addButton} onClick={addOptions}>
            Add options
          </button>
          <button
            className={styles.addButton}
            onClick={() => setIsOptionViewVisible(false)}
          >
            Add Medical questions
          </button>
        </>
      );
  }

  return (
    <fieldset className={styles.formSection}>
      {questionView()}
      {optionView()}
    </fieldset>
  );
};

export default withQuoteMedQues(AddQuoteMedQues);

// payload = {
//       "questionId": "insuredPersonDetails.medicalHistory.smoker",
//       "defaultValue": "NO",
//       "options": [
//         {
//           "label": "Yes",
//           "value": "YES"
//         },
//         {
//           "label": "No",
//           "value": "NO"
//         }
//       ],
//       "sortId": 1
//     }
