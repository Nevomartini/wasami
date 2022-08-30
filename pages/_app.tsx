import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
      <div className="col-span-12 p-4 text-center bg-white dark:bg-blac; lg:col-span-3 rounded-2xl">
        <Sidebar />
      </div>

      <div className="flex flex-col col-span-12 bg-white lg:col-span-9 rounded-2xl">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MyApp;
