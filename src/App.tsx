import { Main } from './pages/main/Main';
import { AboutUs } from 'src/views/aboutUs/AboutUs';
import { Info } from './views/tariffs/Info';
import { Faq } from './views/faq/Faq.tsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SendForm from './views/sendForm/SendForm';
import { Header } from './views/header/Header';
import { useRef } from 'react';
import { ScrollContext } from './context/ScrollContext';
import { Footer } from './views/footer';

import styles from './App.module.scss';
import PricingByRoom from './views/pricingByRoom/PricingByRoom.tsx';

function App() {
  const aboutUsInfoRef = useRef<HTMLDivElement>(null);
  const cleaningInfoRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <BrowserRouter>
          <ScrollContext.Provider value={{ aboutUsInfoRef, cleaningInfoRef }}>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className={styles.first}>
                    <Main />
                    <AboutUs />
                    </div>
                    <Info />
                    <PricingByRoom />
                    <Faq />
                    <Footer />
                  </>
                }
              />
              <Route path="/send-form" element={<SendForm />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ScrollContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
