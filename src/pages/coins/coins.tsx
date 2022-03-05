import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { CoinInterface, getCoinList } from '../../services/bitcoinAPI';
import * as style from './style';

const Coins = () => {
  const { Container, Header, Title, CoinList, Coin } = style;
  const { isLoading, data: coinsList } = useQuery<CoinInterface[]>('coinList', getCoinList);

  const renderCoinList = () => {
    return (
      <>
      {isLoading || !coinsList ?
        'update...':
        coinsList.map(x => (
          <Coin key={x.id}>
            <Link to={`/${x.id}`}>
              <img src={`https://cryptoicon-api.vercel.app/api/icon/${x.symbol.toLowerCase()}`} alt={x.name} />
              {x.name}
            </Link>
          </Coin>
        ))
      }
      </>
    )
  }

  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      <CoinList>
        {renderCoinList()}
      </CoinList>
    </Container>
  );
};

export default Coins;
