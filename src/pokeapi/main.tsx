import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>...loading</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
);
