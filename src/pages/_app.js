import { Provider as BasicInfoProvider } from "../context/basicInfo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <BasicInfoProvider>
      <Component {...pageProps} />
    </BasicInfoProvider>
  );
}

export default MyApp;
