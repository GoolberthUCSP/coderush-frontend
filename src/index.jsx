/* @refresh reload */
import { render } from 'solid-js/web';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { WebSocketProvider } from './Contexts/WebSocketContext';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <WebSocketProvider>
      <App />
  </WebSocketProvider>
), root);