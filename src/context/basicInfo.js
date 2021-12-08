import labels from "../labels/basicInfo";
import { createContext } from "./index";

const basicInfo = {
  fields: {
    name: "sdfsdfsdf",
    code: "",
    partnerCode: "",
    categoryCode: "",
    subCategoryCode: "",
    productType: "",
  },
  labels: {
    ...labels,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "udpateValue":
      return {
        ...state,
        fields: {
          ...state.fields,
          ...action.payload,
        },
      };

    case "updateValueAndLabels":
      return {
        ...state,
        fields: {
          ...state.fields,
          ...action.payload.fields,
        },
        labels: {
          ...state.labels,
          ...action.payload.labels,
        },
      };

    default:
      return { ...state };
  }
};

const updateValue = (dispatch) => (basicInfoObject) => {
  const key = basicInfoObject["key"];
  const value = basicInfoObject["value"];
  dispatch({ type: "udpateValue", payload: { [key]: value } });
}
  

const updateValueAndLabels = (dispatch) => (basicInfoObject) => {
  const key = basicInfoObject["key"];
  const value = basicInfoObject["value"];
  const displayName = basicInfoObject["displayName"];
  const payload = {
    fields: {[key]: value},
    labels: {[key]: displayName}
  };
  dispatch({ type: "updateValueAndLabels", payload });
};

// basicInfoObject = {
//   key: '',
//   value: '',
//   displayName:''
// }; 

export const { Context, Provider } = createContext(
  reducer,
  { updateValue, updateValueAndLabels },
  basicInfo
);

export function withBasicInfo(Component) {
  return function contextComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} basicInfoContext={context} />}
      </Context.Consumer>
    );
  };
}
