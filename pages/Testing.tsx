// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar"
// import "../components/button/button.css"
// import "../components/input/Input.css"
// import "../components/input1/Input1.css"


export default function Testing({ Component, pageProps }: AppProps) {
  return (
    <div className='flex  justify-items-center'>
    <div className=' h-screen bg-red-100'>
  <Navbar />
  </div>
  <div 
  // className="mr-6 my-5 ml-48" 
  >
  <Component {...pageProps} />
  </div></div>

  // <div 
  // // className="mr-6 my-5 ml-48" 
  // >
  // <Component {...pageProps} />
  // </div>
)
}
