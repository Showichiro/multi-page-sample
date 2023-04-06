import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <div>sample1</div>
      <div>
        <a href="../sample2/index.html">to sample2</a>
      </div>
      <div>
        <a href="../pokeapi/index.html">to pokeapi</a>
      </div>
    </div>
  </React.StrictMode>,
);
