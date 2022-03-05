import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getCoinDetail, CoinDetailInterface, CoinPriceInterface, getCoinPrice } from '@/api/bitcoinAPI';

type RouteParams = 'coinId';

const CoinDetail = () => {
  const routeParams = useParams<Record<RouteParams, string>>();
  const { data: coinDetail } = useQuery<Promise<CoinDetailInterface>>('coinDetail', () => getCoinDetail(routeParams.coinId??''));
  const { data: coinPrice } = useQuery<Promise<CoinPriceInterface>>('coinPrice', () => getCoinPrice(routeParams.coinId??''));

  return (<>
    {routeParams.coinId}
    {coinDetail && Object.keys(coinDetail).toString()}
    {Object.keys(coinPrice??{}).toString()}
  </>);
}

export default CoinDetail;
