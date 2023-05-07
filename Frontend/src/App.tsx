import Header from './components/Header';
import Orders from './components/Orders';
import { GlobalStyles } from './css/GlobalStyles';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}