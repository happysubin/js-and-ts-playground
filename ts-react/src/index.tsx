import React from 'react';
import ReactDOM from 'react-dom/client';

import NonStateModalApp from './modal/non_state/NonStateModalApp';
import StateModalApp from "./modal/state/StateModalApp";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    //<NonStateModalApp />
    <StateModalApp/>
  //</React.StrictMode>
);

