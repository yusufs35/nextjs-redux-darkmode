import StoreProvider from "@/providers/store-provider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
