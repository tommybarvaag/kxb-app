import "@/styles/global.css";
import { ThemeProvider } from "next-themes";
import * as React from "react";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layoutProps?.Layout || React.Fragment;

  const layoutProps = Component.layoutProps?.Layout
    ? { pageProps, layoutProps: Component.layoutProps }
    : {};

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
