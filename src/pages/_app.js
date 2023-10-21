import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '@/components/Cabecalho'
import Rodape from '@/components/Rodape'
export default function App({ Component, pageProps }) {

  return (
    <>
      <ToastContainer/>
      <Cabecalho/>
      <Component {...pageProps} />
      <Rodape/>

    
    </>

  )

  
}
