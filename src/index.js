import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {TolgeeProvider} from "@tolgee/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<TolgeeProvider
         staticData={{
          en: () => import('./i18n/en.json'),
          de: () => import('./i18n/de-DE.json'),
        }}
        loadingFallback={<>Loading...</>}
    >

   <App />
    </TolgeeProvider>
  </React.StrictMode>
);

