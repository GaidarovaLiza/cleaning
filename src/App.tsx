import { Main } from './pages/main/Main';
import { Info } from './views/tariffs/Info';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SendForm from './views/sendForm/SendForm';
import { Header } from './views/header/Header';
import { useRef } from 'react';
import { ScrollContext } from './context/ScrollContext';
import { Footer } from './views/footer';

import style from './App.module.css';

function App() {
  const aboutUsInfoRef = useRef<HTMLDivElement>(null);
  const cliningInfoRef = useRef<HTMLDivElement>(null);

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <BrowserRouter>
          <ScrollContext.Provider value={{ aboutUsInfoRef, cliningInfoRef }}>
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
