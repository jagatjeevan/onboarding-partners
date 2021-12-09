import { useEffect, useState } from "react";
import { withBasicInfo } from "../../../context/basicInfo";
import ModalLayout from "../../common/Modal/ModalLayout";
import Portal from "../../common/Modal/Portal";
import AddKeyValue from "./AddKeyValue";
import styles from "../style.module.scss";

export function BasicInfo(props) {
  const { state: basicInfoState, actions: basicInfoActions } = props.basicInfoContext;
  const [fields, setFields] = useState(basicInfoState.fields);
  const [labels, setLabels] = useState(basicInfoState.labels);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setFields(basicInfoState.fields);
    setLabels(basicInfoState.labels);
  }, [basicInfoState]);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const showModal = () => {
    if (!isModalOpen) return null;
    return (
      <Portal>
        <ModalLayout
          closeModal={() => setIsModalOpen(false)}
          headerText="Add Key Value pair"
        >
          <AddKeyValue closeModal={() => setIsModalOpen(false)} />
        </ModalLayout>
      </Portal>
    );
  }

  const updateStateValue = (obj) => {
    const {key, value} = obj;
    let newFields = {
      ...fields,
      [key] : value
    };
    setFields(newFields);
  }

  const getValues = () => {
    return Object.keys(fields).map(item => {
      return (
        <>
          <label htmlFor={item} key={`label-${item}`}>
            {labels[item] || item}
          </label>
          <input
            key={`input-${item}`}
            type="text"
            id={item}
            value={fields[item] || ""}
            onChange={(e) => updateStateValue({ key: item, value: e.target.value })}
            onBlur={(e) =>
              basicInfoActions.updateValue({ key: item, value: e.target.value })
            }
          />
        </>
      );
    });
  }

  return (
    <fieldset className={styles.formSection}>
      <legend>Basic Information</legend>
      {getValues()}
      <button className={styles.addButton} onClick={openModal}>
        + Add a field
      </button>
      {showModal()}
    </fieldset>
  );
}

export default withBasicInfo(BasicInfo);
