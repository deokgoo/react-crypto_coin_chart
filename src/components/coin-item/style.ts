import styled, { keyframes } from 'styled-components';

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Item = styled.li`
  padding: 12px;
  border-bottom: 1px solid #514F5A;
  animation: ${boxFade} 1s 1s linear;

  &:last-child {
    border-bottom: none;
  }

  .coin {
    display: flex;
    align-items: center;

    @media screen and (max-width: 670px){
      align-items: start;
      flex-direction: column;
    }

    .coin__title {
      width: 40%;
      display: flex;
      align-items: center;

      @media screen and (max-width: 670px){
        width: 100%;
      }
      
      .coin__img-wrapper {
        padding: 14px 12px 10px 12px;
        img {
          width: 35px;
          height: 35px;
        }
      }
      .coin__name {
        padding: 12px;
        font-weight: bold;
      }
    }

    .coin__description {
      width: 60%;
      display: flex;

      @media screen and (max-width: 670px){
        width: 100%;
      }

      .coin__description__wrapper {
        width: 25%;
        padding: 0 12px;
        display: flex;
        flex-direction: column;
        align-items: start;

        @media screen and (max-width: 670px){
          text-align: center;
          align-items: center;
          justify-content: space-between;
        }

        .coin__description__title {
          width: 100%;
          margin-bottom: 8px;
          color: #2B45D9;
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
  }

  .red {
    color: red;
  }
  .green {
    color: green;
  }
`;
