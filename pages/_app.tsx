import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Providers from "./Providers"
import Navbar from "../components/Navbar"



export default function App({ Component, pageProps }: AppProps) {
  return (
  <Providers>
      <Component {...pageProps} />
    </Providers>
  
 
)
}


