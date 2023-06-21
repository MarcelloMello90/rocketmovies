import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main{
    grid-area: content;
    overflow-y: scroll;
    padding: 32px 0;

    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
  }

  Header{
    margin-bottom: 20px;
  }
`;



export const Content = styled.div`
  max-width: 1150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  .buttonText{
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 20px;
    
    background: none;
    color: ${({ theme }) => theme.COLORS.TEXT_600};
    
    border: none;
    font-size: 16px;
    font-weight: 400;

  }

  .titleMovies{
    display: flex;
    align-items: center;
    margin: 24px 0;
    gap: 20px;
    
    > h1{
      height: 47px;
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
      color: ${({ theme }) => theme.COLORS.TEXT_400};
    };

  };
  
  .profile2{
    display: flex;
    gap: 8px;
    background: none;
    margin-bottom: 40px;
    align-items: center;

    > img{
      box-sizing: border-box;
      width: 16px;
      height: 16px;
     
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: ${({ theme}) => theme.COLORS.BACKGROUND_500};
      border-radius: 35px;
    };

    > strong{
      height: 19px;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: ${({ theme }) => theme.COLORS.TEXT_400};
    };

  };
  
  .contentPage{
    display: flex;
    flex-direction: column; 
    gap: 40px;

     > .tag1{
      display: flex;
      gap: 8px;
    };
     
    > p {
      display: flex;
      text-align: justify;
      align-items: center;

      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      margin-bottom: 40px;


      color: ${({ theme }) => theme.COLORS.TEXT_400};
    }
  };
`;
