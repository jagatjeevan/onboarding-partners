import { useState } from "react";
import { withBasicInfo } from "../../../context/basicInfo";
import styles from "../style.module.scss";

export function AddKeyValue(props) {
  const { actions: basicInfoActions } = props.basicInfoContext;

  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [displayName, setDisplayName] = useState("");

  const updateKeyValue = () => {
    basicInfoActions.updateValueAndLabels({ key, value, displayName });
    props.closeModal();
  };

  return (
    <fieldset className={styles.formSection}>
      <legend>Add Key Value pair</legend>
      <label htmlFor="key">Key Name</label>
      <input
        type="text"
        id="key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <label htmlFor="displayName">Display Name</label>
      <input
        type="text"
        id="displayName"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <label htmlFor="value">Value</label>
      <input
        type="text"
        id="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={styles.addButton} onClick={updateKeyValue}>
        Add the field
      </button>
    </fieldset>
  );
}

export default withBasicInfo(AddKeyValue);
