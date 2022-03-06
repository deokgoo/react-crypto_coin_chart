import { useQuery } from 'react-query';
import { CoinPriceInterface, getCoinPriceList } from '@/api/bitcoinAPI';
import MainHeader from '@/components/main-header';
import CoinItem from '@/components/coin-item';
import * as style from './style';

const Coins = () => {
  const { Container, Header, CointListWrapper, CoinList, LiveBoard } = style;
  const { isLoading, data: coinPriceList } = useQuery<CoinPriceInterface[]>('coinPriceList', getCoinPriceList);

  const updateDate = () => {
    if(!coinPriceList) return;

    const updatedDate = new Date(coinPriceList[0].last_updated);
    const year = updatedDate.getFullYear().toString();
    const month = updatedDate.getMonth().toString();
    const date = updatedDate.getDate().toString();
    const hour = updatedDate.getHours().toString();
    const minute = updatedDate.getMinutes().toString();
    const second = updatedDate.getSeconds().toString();
    return `${year}. ${month.padStart(2, '0')}. ${date.padStart(2, '0')} ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${second.padStart(2, '0')}`;
  }

  const renderCoinList = () => {
    if(!coinPriceList) return;

    const coinsTop10 = coinPriceList.slice(0, 10);
    return (
      <>
      {isLoading ?
        'update...':
        coinsTop10.map(x => (
          <CoinItem key={x.id} coinItem={x} />
        ))
      }
      </>
    )
  }

  return (
    <Container>
      <Header>
        <MainHeader />
      </Header>
      <CointListWrapper>
        {
          coinPriceList ? 
          <LiveBoard>🔴 UpdatedAt {updateDate()}</LiveBoard> :
          ''
        }
        <CoinList>
          {renderCoinList()}
        </CoinList>
      </CointListWrapper>
    </Container>
  );
};

export default Coins;
