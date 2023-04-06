import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <div>sample2</div>
      <div>
        <a href="../sample1/index.html">to sample1</a>
      </div>
      <div>
        <a href="../pokeapi/index.html">to pokeapi</a>
      </div>
    </div>
  </React.StrictMode>,
);
