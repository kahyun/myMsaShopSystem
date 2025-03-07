import "@/styles/globals.css";
import type { AppProps } from "next/app";

import MainLayout from "@/components/MainLayout";
import "bootstrap/dist/css/bootstrap.css"; // Bootstrap 스타일
// import "bootstrap/dist/js/bootstrap.bundle.js"; // Bootstrap JS 기능
//
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
       <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
