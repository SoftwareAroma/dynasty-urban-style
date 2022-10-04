import '@assets/styles/main.css';
import React from 'react';
import type { AppProps } from 'next/app';
import {Provider} from "react-redux";
import {store} from "@provider";
import {MainLayout} from "@components/common/layout";

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
      <React.Fragment>
        <Provider store={store}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </Provider>
      </React.Fragment>
  );
}

export default MyApp;
