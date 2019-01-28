import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App name="name" enthusiasmLevel= {123} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
