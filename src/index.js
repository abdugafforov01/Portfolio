import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeProvider } from './darkMode/context';
import './index.css'
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </>
);
