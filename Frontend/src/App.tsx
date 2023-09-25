import { GlobalStyles } from './css/GlobalStyles';
import Header from './components/Header';
import Orders from './components/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position='bottom-center' />
    </>
  );
}