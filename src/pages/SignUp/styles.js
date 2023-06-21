import styled from "styled-components";
import backgroundImg from '../../assets/imageSignIn.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

`;


export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  text-align: center;

  > h1{
    height: 63px;
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;

    color: ${({ theme }) => theme.COLORS.TEXT_600};
  }
  
  > h2{
    height: 32px;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-align: center;

    margin: 48px 0;    

    color: ${({ theme }) => theme.COLORS.TEXT_400};
  }

  > p{
    height: 18px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: ${({ theme }) => theme.COLORS.TEXT_200};
  }

  > a {
    height: 21px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    
    display: flex;
    text-align: center;
    align-items: center;
    gap: 4px;

    margin: 0 auto;
    padding-top: 48px;

    color: ${({ theme }) => theme.COLORS.TEXT_600};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;