import { Provider as BasicInfoProvider } from "../context/basicInfo";
import { Provider as PolicyStatusProvider } from "../context/policyStatus";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PolicyStatusProvider>
      <BasicInfoProvider>
        <Component {...pageProps} />
      </BasicInfoProvider>
    </PolicyStatusProvider>
  );
}

export default MyApp;
