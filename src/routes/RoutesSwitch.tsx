import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const SendForm = lazy(() => import('../views/sendForm/SendForm'));

export const RoutesSwitch = () => {
  return (
    <Routes>
      <Route element={<SendForm />} path="/send-form" />
      <Route element={<Navigate to={'/'} />} path={'/*'} />
    </Routes>
  );
};
