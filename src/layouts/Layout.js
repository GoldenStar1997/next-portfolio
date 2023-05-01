import Head from "next/head";
import { useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import State from "../context/context";
import { customCursor, dataImage, imgToSVG, preloader } from "../utilits";
import { waves } from "../waves";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Mouse from "./Mouse";
import PreLoader from "./PreLoader";
import Settings from "./Settings";

const Layout = ({ children }) => {
  useEffect(() => {
    dataImage();
    // customCursor();
    preloader();
    waves();
    // imgToSVG();
  }, []);

  return (
    <State>
      <Head>
        <link rel="icon" type="image/png" href="/img/favicon.png" />
        <title>Hennadii 1993</title>
      </Head>
      <PreLoader />
      <ImageView />
      <div
        className="edrea_tm_all_wrap"
        data-magic-cursor="hide"
        data-enter="fadeInUp"
        data-exit=""
      >
        <div className="waves" />

        <Settings />
        <MobileHeader />
        <Header />
        <div className="edrea_tm_content">{children}</div>
        <Mouse />
      </div>
    </State>
  );
};
export default Layout;
