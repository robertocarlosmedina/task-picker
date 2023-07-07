import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import { Suspense } from "react";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";

import i18n from "../utils/i18n";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1100, delay: 5, once: true });
    AOS.refresh();
  }, []);

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={5}
          theme="colored"
          className="md:mt-24 mt-64"
        />
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nextProvider>
      </QueryClientProvider>
    </Suspense>
  );
}
