import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import QueryClientWrapper from '@/lib/query-client-provider.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientWrapper>
      <App />
    </QueryClientWrapper>
  </StrictMode>
);
