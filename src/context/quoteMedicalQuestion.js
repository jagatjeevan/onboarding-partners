import { createContext } from "./index";

const medQuestions = {
  questions: [],
  options: [
    { id: "no", label: "No", value: "no" },
    { id: "yes", label: "Yes", value: "yes" },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateOptions":
      return {
        ...state,
        options: [...state.options, { ...action.payload }],
      };

    case "updateQuestion":
      return {
        ...state,
        questions: [...state.questions, { ...action.payload }],
      };

    default:
      return { ...state };
  }
};

const updateQuestion = (dispatch) => (payload) => {
  dispatch({ type: "updateQuestion", payload });
};

const updateOptions = (dispatch) => (payload) => {
  dispatch({ type: "updateOptions", payload });
};

export const { Context, Provider } = createContext(
  reducer,
  { updateQuestion, updateOptions },
  medQuestions
);

export function withQuoteMedQues(Component) {
  return function contextComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} quoteMedQuesContext={context} />}
      </Context.Consumer>
    );
  };
}


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