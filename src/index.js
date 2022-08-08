import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {TolgeeProvider} from "@tolgee/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<TolgeeProvider
        filesUrlPrefix="i18n/"
        apiUrl={process.env.REACT_APP_TOLGEE_API_URL}
        apiKey={process.env.REACT_APP_TOLGEE_API_KEY}
        loadingFallback={<>Loading...</>}
    >

   <App />
    </TolgeeProvider>
  </React.StrictMode>
);

