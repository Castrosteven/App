import "../styles/globals.css";
import type { AppProps } from "next/app";
import { EventContext } from "../context/UseEvents";
import { UserContext } from "../context/UseAuth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContext>
      <EventContext>
        <Component {...pageProps} />
      </EventContext>
    </UserContext>
  );
}

export default MyApp;
