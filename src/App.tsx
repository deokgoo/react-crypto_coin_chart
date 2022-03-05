import { Routes, Route } from 'react-router-dom';
import Coins from './pages/coins';
import CoinDetail from './pages/coin-detail';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path=":coinId" element={<CoinDetail />} />
        </Routes>
      </QueryClientProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
