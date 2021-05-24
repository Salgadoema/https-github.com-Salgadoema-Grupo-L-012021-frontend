import React from 'react';
import ReactDOM from 'react-dom';
import Resenia from './routes/Resenia';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import global_es from "./Translation/es/global.json";
import global_en from "./Translation/en/global.json";

i18next.init({
  interpolation: {escapeValue: false},
  lng:"es", //con que idioma arranca
  resources: {
    es:{
      global:global_es
    },
    en: {
      global:global_en
    }

  }

});


ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <Resenia/>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

