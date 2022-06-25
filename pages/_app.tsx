import "../styles/globals.css";
import type { AppProps } from "next/app";
import AdminLayout from "../components/AdminLayout";
import Login from "../components/Login";
import { useState } from "react";

import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
  const [admin, setAdmin] = useState([]);
  const [user, setUser] = useState([]);

  const route = useRouter();
  return <Component {...pageProps} />;
}

export default MyApp;
