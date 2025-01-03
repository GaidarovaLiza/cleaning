import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useRef } from 'react';

import { ScrollContext } from 'src/context';
import { Header } from '../header';
import { Main } from 'src/pages/main/Main';
import { Info } from './Info';
import { Footer } from '../footer';
import SendForm from '../sendForm/SendForm';

import styles from './App.module.scss';

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
                    <Main />
                    <Info />
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
