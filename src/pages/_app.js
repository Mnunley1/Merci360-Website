import { useEffect } from "react";
import Router from "next/router";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import Layout from "components/layout";
import { initGA, logPageView } from "analytics";
// Load DM Sans typeface
import "typeface-dm-sans";

// Load other package css file
import "react-multi-carousel/lib/styles.css";
import "react-modal-video/css/modal-video.min.css";
import "rc-drawer/assets/index.css";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
