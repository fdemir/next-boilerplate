import type { AppProps } from "next/app";

import "../assets/scss/main.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
