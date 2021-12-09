import { createContext } from "./index";

const policyStatus = {
  messages: [
    {
      thanosPolicyStatus: "PENDING_APPROVAL",
      message:
        "Application is being reviewed and pending for approval. Please contact Max Life on <a href='mailto:service.helpdesk@maxlifeinsurance.com' target='_blank'>service.helpdesk@maxlifeinsurance.com</a> or <a href='tel:+9118601205577'>18601205577</a> for more information.",
    },
    {
      thanosPolicyStatus: "MEDICALS_PENDING",
      message:
        "Medical information pending. Please contact Max Life on <a href='mailto:service.helpdesk@maxlifeinsurance.com' target='_blank'>service.helpdesk@maxlifeinsurance.com</a> or <a href='tel:+9118601205577'>18601205577</a> for more information.",
    },
    {
      thanosPolicyStatus: "ADDITIONAL_DOCS_REQUIRED",
      message:
        "Application approval requires additional information to be submitted. Please contact Max Life on <a href='mailto:service.helpdesk@maxlifeinsurance.com' target='_blank'>service.helpdesk@maxlifeinsurance.com</a> or <a href='tel:+9118601205577'>18601205577</a> for more information.",
    },
    {
      thanosPolicyStatus: "REJECTED",
      message:
        "Application approval got declined. Please contact Max Life on <a href='mailto:service.helpdesk@maxlifeinsurance.com' target='_blank'>service.helpdesk@maxlifeinsurance.com</a> or <a href='tel:+9118601205577'>18601205577</a> for more information.",
    },
    {
      thanosPolicyStatus: "POSTPONED",
      message:
        "Application postponed.Please contact Max Life on <a href='mailto:service.helpdesk@maxlifeinsurance.com' target='_blank'>service.helpdesk@maxlifeinsurance.com</a> or <a href='tel:+9118601205577'>18601205577</a> for more information.",
    },
    {
      thanosPolicyStatus: "COUNTER_OFFER",
      message:
        "A revised offer has been made for your application. Please contact Max Life on <a href='mailto:service.helpdesk@maxlifeinsurance.com' target='_blank'>service.helpdesk@maxlifeinsurance.com</a> or <a href='tel:+9118601205577'>18601205577</a> for more information.",
    },
    {
      thanosPolicyStatus: "CANCELLED",
      message:
        "Application is cancelled. Please contact Max Life on <a href='mailto:service.helpdesk@maxlifeinsurance.com' target='_blank'>service.helpdesk@maxlifeinsurance.com</a> or <a href='tel:+9118601205577'>18601205577</a> for more information.",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updatePolicyStatus":
      let isPresent = false;
      const newMessages = state.messages.map(item => {
        const actionStatus = action.payload["thanosPolicyStatus"];
        const itemStatus = item["thanosPolicyStatus"];
        if(actionStatus === itemStatus) {isPresent = true;}
        return {
          ...item,
          message: actionStatus === itemStatus ? action.payload.message : item.message
        };
      });
      if (isPresent) {
        return {
          ...state,
          messages: newMessages,
        };
      } else {
        return { ...state, messages: [...state.messages, action.payload] };
      }

    default:
      return { ...state };
  }
};

const updatePolicyStatus = (dispatch) => (payload) =>
  dispatch({ type: "updatePolicyStatus", payload });

export const { Context, Provider } = createContext(
  reducer,
  { updatePolicyStatus },
  policyStatus
);

export function withPolicyStatus(Component) {
  return function contextComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} policyStatusContext={context} />}
      </Context.Consumer>
    );
  };
}
