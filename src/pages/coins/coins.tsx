import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';
import coinListState, { CoinInterface } from './atom/cointState';
import { getCoinList } from '../../services/bitcoinAPI';
import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.header``;

const CoinList = styled.ul``;

const Coin = styled.li``;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Coins = () => {
  const coinsList = useRecoilValue(coinListState);
  const { isLoading, error, data, isFetching} = useQuery<Promise<CoinInterface[]>>('repoData', () => {
    
    return getCoinList();
  });

  return (
    <>
      <Container>
        <Header>
          <Title>Coin</Title>
        </Header>
        <CoinList>
          {coinsList.map(x => (
            <Coin key={x.id}>
              <Link to={`/${x.id}`}>{x.name}</Link>
            </Coin>
          ))}
        </CoinList>
      </Container>
    </>
  );
};

export default Coins;
