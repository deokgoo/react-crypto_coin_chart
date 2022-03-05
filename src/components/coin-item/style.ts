import styled from 'styled-components';

export const Item = styled.li`
  padding: 12px;
  border-bottom: 1px solid #514F5A;

  &:last-child {
    border-bottom: none;
  }

  .coin {
    display: flex;
    align-items: center;

    .coin__img-wrapper {
      padding: 14px 12px 10px 12px;
      img {
        width: 35px;
        height: 35px;
      }
    }

    .coin__name {
      font-weight: bold;
      min-width: 180px;
    }
    .coin__name {
      padding: 12px;
    }
    .coin__market-cap {
      padding: 12px;
    }
    .coin__price {
      padding: 12px;
    }
    .coin__ath {
      padding: 12px;
    }
    .coin__change {
      padding: 12px;
    }
  }
  .red {
    color: red;
  }
  .green {
    color: green;
  }
`;
