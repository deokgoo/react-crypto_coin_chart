import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {} from 'recoil';

const Container = styled.div``;

const Header = styled.header``;

const CoinList = styled.ul``;

const Coin = styled.li``;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Coins = () => {
  

  return (
    <>
      <Container>
        <Header>
          <Title>Coin</Title>
        </Header>
        <CoinList>
          {/* {coins.map(x => (
            <Coin key={x.id}>
              <Link to={`/${x.id}`}>{x.name} &rarr</Link>
            </Coin>
          ))} */}
        </CoinList>
      </Container>
    </>
  );
};

export default Coins;
