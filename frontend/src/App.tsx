import { Routes, Route } from 'react-router-dom';

import LandingPage from '@/pages/LandingPage';

import Room from '@/pages/room/Room';
import { GlobalStyle } from '@/styles/GlobalStyle';

import { AccessibilityProvider, ToastProvider } from './contexts';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastProvider>
        <AccessibilityProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/rooms/:roomId" element={<Room />} />
          </Routes>
        </AccessibilityProvider>
      </ToastProvider>
    </>
  );
}

export default App;
