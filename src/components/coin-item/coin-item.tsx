import { CoinInterface, CoinPriceInterface, getCoinPrice } from '@/api/bitcoinAPI';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import * as Style from './style';

const CoinItem = ({ coinItem }: {coinItem: CoinInterface}) => {
  const { data: coinPrice } = useQuery<CoinPriceInterface>(['coinPrice', coinItem.id], () => getCoinPrice(coinItem.id), { refetchInterval: 10000});
  const { Item } = Style;

  const renderColumn = () => {
    if(!coinPrice) return;
    const { 
      market_cap,
      price,
      ath_price,
      percent_change_24h,
    } = coinPrice.quotes.USD;

    return (
      <>
        <div className="coin__name">${coinItem.name.toUpperCase()}</div>
        <div className="coin__market-cap">${(market_cap/10000000000).toFixed(2)}B</div>
        <div className="coin__price">${(price.toFixed(2))}</div>
        <div className="coin__ath">${(ath_price.toFixed(2))}</div>
        <div className={`coin__change ${percent_change_24h<0?'red':'green'}`}>{(percent_change_24h.toFixed(2))}%</div>
      </>
    )
  }
  return (
    <Item>
      <Link className="coin" to={`/${coinItem.id}`}>
        <div className="coin__img-wrapper">
          <img src={`https://cryptoicon-api.vercel.app/api/icon/${coinItem.symbol.toLowerCase()}`} alt={coinItem.name} />
        </div>
        {renderColumn()}
      </Link>
    </Item>
  )
}

export default CoinItem;
