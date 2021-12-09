import { Provider as BasicInfoProvider } from "../context/basicInfo";
import { Provider as PolicyStatusProvider } from "../context/policyStatus";
import { Provider as QuoteMedQuesProvider } from "../context/quoteMedicalQuestion";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <QuoteMedQuesProvider>
      <PolicyStatusProvider>
        <BasicInfoProvider>
          <Component {...pageProps} />
        </BasicInfoProvider>
      </PolicyStatusProvider>
    </QuoteMedQuesProvider>
  );
}

export default MyApp;
