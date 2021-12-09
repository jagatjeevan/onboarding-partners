import Image from "next/image";
import { useEffect, useState } from "react";
import { withPolicyStatus } from "../../../context/policyStatus";
import ModalLayout from "../../common/Modal/ModalLayout";
import Portal from "../../common/Modal/Portal";
import styles from "../style.module.scss";
import AddPolicyMessage from "./AddPolicyMessage";
import policyStyles from "./style.module.scss";

export function PolicyStatusMessage(props) {
  const { state: policyStatusState } = props.policyStatusContext;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [currentSelected, setCurrentSelected] = useState({});

  useEffect(() => {
    if(!isModalOpen) {
      setCurrentSelected({})
    }
  }, [isModalOpen]);
 
  const openModal = () => {
    setIsModalOpen(true);
  };

  const updateSelected = (msg) => {
    const key = msg["thanosPolicyStatus"];
    if (selected.includes(key)) {
      setSelected(selected.filter((item) => item !== key));
    } else {
      setSelected([...selected, key]);
    }
  };

  const editPolicy = (msg) => {
    setCurrentSelected(msg);
    openModal();
  }

  const showModal = () => {
    if (!isModalOpen) return null;
    return (
      <Portal>
        <ModalLayout
          closeModal={() => setIsModalOpen(false)}
          headerText="Add Policy Status"
        >
          <AddPolicyMessage
            data={currentSelected}
            closeModal={() => setIsModalOpen(false)}
          />
        </ModalLayout>
      </Portal>
    );
  };

  const showPolicyStatusMessage = () => {
    return policyStatusState.messages.map((msg) => {
      const klass = selected.includes(msg["thanosPolicyStatus"])
        ? `${policyStyles.policyStatusCapsule} ${policyStyles.selected}`
        : `${policyStyles.policyStatusCapsule}`;
      return (
        <div key={msg["thanosPolicyStatus"]} className={klass}>
          <span className="hand-pointer" onClick={() => updateSelected(msg)}>
            <i className={policyStyles.policyStatusIcon}></i>
            {msg["thanosPolicyStatus"]}
          </span>
          <span className={policyStyles.editIcon} onClick={() => editPolicy(msg)}>
            <Image src="/edit.svg" width="10" height="10" />
          </span>
        </div>
      );
    });
  };

  return (
    <fieldset>
      <legend>Policy Status Message</legend>
      {showPolicyStatusMessage()}
      <div className={policyStyles.addPolicyButton}>
        <button className={styles.addButton} onClick={openModal}>
          + Add a new policy status message
        </button>
      </div>
      {showModal()}
    </fieldset>
  );
}

export default withPolicyStatus(PolicyStatusMessage);
