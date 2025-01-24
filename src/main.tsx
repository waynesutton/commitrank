import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { routeTree } from './routeTree.gen';
import './index.css';

const router = createRouter({ routeTree });
const queryClient = new QueryClient();
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ConvexProvider>
  </StrictMode>
);