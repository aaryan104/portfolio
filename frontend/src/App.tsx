import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './pages/Home';
import { ResumePage } from './pages/ResumePage';
import { useStore } from './store/useStore';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  const { theme } = useStore();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${theme === 'dark' ? 'dark bg-background-base' : 'bg-gray-100 text-gray-900'} text-gray-300 min-h-screen relative overflow-hidden`}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
