import React from 'react';
import ReactDOM from 'react-dom/client'; // Adaugă acest import
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import App from './components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
