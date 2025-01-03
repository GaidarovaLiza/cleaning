import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Helmet } from 'react-helmet';
import Logo from './assets/logo.png';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Dolphin.by</title>
      <link rel="icon" type="image/png" sizes="32x32" href={Logo}></link>
      <meta name="description" content="Доверьте уборку профессионалам" />
    </Helmet>
    <App />
  </React.StrictMode>
);
