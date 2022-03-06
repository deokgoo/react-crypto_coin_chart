import { CoinPriceInterface } from '@/api/bitcoinAPI';
import { Link } from 'react-router-dom';
import * as Style from './style';

const CoinItem = ({ coinItem }: {coinItem: CoinPriceInterface}) => {
  const { Item } = Style;

  const renderColumn = () => {
    const { 
      market_cap,
      price,
      ath_price,
      percent_change_24h,
    } = coinItem.quotes.USD;

    return (
      <>
        <div className="coin__title">
          <div className="coin__img-wrapper">
            <img src={`https://cryptoicon-api.vercel.app/api/icon/${coinItem.symbol.toLowerCase()}`} alt={coinItem.name} />
          </div>
          <div className="coin__name">${coinItem.name.toUpperCase()}</div>
        </div>
        <div className="coin__description">
          <div className="coin__description__wrapper">
            <div className="coin__description__title">MARKET CAP</div>
            <div className="coin__market-cap">${(market_cap/10000000000).toFixed(2)}B</div>
          </div>
          <div className="coin__description__wrapper">
            <div className="coin__description__title">PRICE</div>
            <div className="coin__price">${(price.toFixed(2))}</div>
          </div>
          <div className="coin__description__wrapper">
            <div className="coin__description__title">ATH</div>
            <div className="coin__ath">${(ath_price.toFixed(2))}</div>
          </div>
          <div className="coin__description__wrapper">
            <div className="coin__description__title">24H CHANGE</div>
            <div className={`coin__change ${percent_change_24h<0?'red':'green'}`}>{(percent_change_24h.toFixed(2))}%</div>
          </div>
        </div>
      </>
    )
  }
  return (
    <Item>
      <Link className="coin" to={`/${coinItem.id}`}>
        {renderColumn()}
      </Link>
    </Item>
  )
}

export default CoinItem;
