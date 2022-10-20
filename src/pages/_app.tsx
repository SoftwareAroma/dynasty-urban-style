import '@assets/styles/main.css';
import React from 'react';
import type { AppProps } from 'next/app';
import {Provider} from "react-redux";
import {store} from "@provider";
import SeoHead from "@components/common/Head";

type Props = {
    children: React.ReactNode;
}

const Noop: React.FC<Props> = ({ children }) => (<React.Fragment>{children}</React.Fragment>)

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
    const Layout = (Component as any).Layout || Noop;

    // use effect to remove the loading class from the body
    React.useEffect(() => {
        document.body.classList?.remove('loading');
    });

  return (
      <React.Fragment>
        <SeoHead />
        <Provider store={store}>
          <Layout pageProps={pageProps}>
              <Component {...pageProps} />
          </Layout>
        </Provider>
      </React.Fragment>
  );
}

export default MyApp;
