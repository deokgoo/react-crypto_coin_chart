import axios from 'axios';
import { CoinInterface } from '../pages/coins/atom/cointState';

const BASE_URL = 'https://api.coinpaprika.com/v1';

export const getCoinList = async (): Promise<CoinInterface[]> => {
  const url = `${BASE_URL}/coins`;
  const fetchData = await axios.get(url);
  // parse fetchData

  return fetchData.data;
}
