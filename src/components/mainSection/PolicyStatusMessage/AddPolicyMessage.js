import { useState } from "react";
import { withPolicyStatus } from "../../../context/policyStatus";
import styles from "../style.module.scss";

const AddPolicyMessage = (props) => {
    const { actions: policyStatusActions } = props.policyStatusContext;
    const [policyStatus, setPolicyStatus] = useState(props.data["thanosPolicyStatus"] || "");
    const [message, setMessage] = useState(props.data["message"] || "");

    const updatePolicyStatus = () => {
       policyStatusActions.updatePolicyStatus({
         thanosPolicyStatus: policyStatus,
         message
       }); 
       props.closeModal();
    };

    return (
      <fieldset className={styles.formSection}>
        <legend>Add Policy Status</legend>
        <label htmlFor="policyStatus">Policy Status</label>
        <input
          type="text"
          id="policyStatus"
          value={policyStatus}
          onChange={(e) => setPolicyStatus(e.target.value)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <button className={styles.addButton} onClick={updatePolicyStatus}>
          Add the policy status
        </button>
      </fieldset>
    );
};

export default withPolicyStatus(AddPolicyMessage);