import { useQuery } from 'react-query';
import { CoinPriceInterface, getCoinPriceList } from '@/api/bitcoinAPI';
import MainHeader from '@/components/main-header';
import CoinItem from '@/components/coin-item';
import * as style from './style';

const Coins = () => {
  const { Container, Header, CointListWrapper, CoinList, LiveBoard } = style;
  const { isLoading, data: coinPriceList } = useQuery<CoinPriceInterface[]>('coinPriceList', getCoinPriceList);

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
          <LiveBoard>🔴 UpdatedAt {coinPriceList[0].last_updated}</LiveBoard> :
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
