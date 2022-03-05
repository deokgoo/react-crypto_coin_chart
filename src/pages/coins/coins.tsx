import { useQuery } from 'react-query';
import { CoinInterface, getCoinList } from '@/api/bitcoinAPI';
import MainHeader from '@/components/main-header';
import CoinItem from '@/components/coin-item';
import * as style from './style';

const Coins = () => {
  const { Container, Header, CointListWrapper, CoinList } = style;
  const { isLoading, data: coinsList } = useQuery<CoinInterface[]>('coinList', getCoinList);

  const renderCoinList = () => {
    return (
      <>
      {isLoading || !coinsList ?
        'update...':
        coinsList.map(x => (
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
        <CoinList>
          {renderCoinList()}
        </CoinList>
      </CointListWrapper>
    </Container>
  );
};

export default Coins;
