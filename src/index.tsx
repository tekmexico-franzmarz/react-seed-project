import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './components/root-app/App';
import Hello from './components/hello/Hello';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

/* ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
); */
ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
