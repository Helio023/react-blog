import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './core/sass/styles.scss';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import displayReducer from './core/redux/displayAnimation';

const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});

reactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
