import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import Main from './src/Main';

export default function App() {
  const [isFontLoaded] = useFonts({
    'Manrope-300': require('./src/assets/fonts/Manrope-Light.otf'),
    'Manrope-500': require('./src/assets/fonts/Manrope-Medium.otf'),
    'Manrope-700': require('./src/assets/fonts/Manrope-Bold.otf')
  });

  if (!isFontLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style='dark' />
      <Main />
    </>
  );
}