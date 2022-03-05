import axios from 'axios';

const BASE_URL = 'https://api.coinpaprika.com/v1';

export interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export interface CoinDetailInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

export interface CoinPriceInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

export const getCoinList = async (): Promise<CoinInterface[]> => {
  const url = `${BASE_URL}/coins`;
  const fetchData = await axios.get(url);

  return fetchData.data.slice(0, 10);
}

export const getCoinDetail = async (coinId: string): Promise<CoinDetailInterface> => {
  const url = `${BASE_URL}/coins/${coinId}`;
  const fetchData = await axios.get(url);

  return fetchData.data;
}

export const getCoinPrice = async (coinId: string): Promise<CoinPriceInterface> => {
  const url = `${BASE_URL}/tickers/${coinId}`;
  const fetchData = await axios.get(url);

  return fetchData.data;
}

export const fetchCoinHistory = async (coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  const url = `${BASE_URL}/coins/${coinId}/ohlcv/history?start=${startDate}&end=${endDate}`;
  const fetchData = await axios.get(url);

  return fetchData.data;
}