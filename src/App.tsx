import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NotFound from './pages/NotFound';

const Index = lazy(() => import('./pages/Index'));
const Resume = lazy(() => import('./pages/resume'));

const queryClient = new QueryClient();

/** Must match `base` in vite.config.ts (GitHub project page /repo-name/). */
const GH_PAGES_BASE = '/particle-folio';
const routerBasename =
  import.meta.env.BASE_URL.replace(/\/$/, '') || GH_PAGES_BASE;

const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner
        position="top-center"
        theme="system"
        richColors
        expand={false}
        duration={3500}
        toastOptions={{
          classNames: {
            toast: 'bg-gradient-to-r from-primary to-accent/70 text-white shadow-lg rounded-xl',
          },
        }}
      />

      <BrowserRouter basename={routerBasename}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
