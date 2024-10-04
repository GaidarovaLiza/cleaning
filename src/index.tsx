import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Dolphin.by</title>
      <meta name="description" content="Доверьте уборку профессионалам" />
    </Helmet>
    <App />
  </React.StrictMode>
);
