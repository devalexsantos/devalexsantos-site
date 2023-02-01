import styled from 'styled-components';

export const HomeContainer = styled.header`
  width: 100%;
  max-width: 1124px;
  padding: 0 2rem;
  margin: 0 auto;

  
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 2rem;
  background-color: ${(props)=> props.theme.secondary};
  padding: 2rem;
  border-radius: 8px;

  @media (max-width: 764px){
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

`

export const ImageContainer = styled.div`
  border-radius: 999px;
  overflow: hidden;
  min-height: 180px;
  max-height: 180px;
  max-width: 180px;
  min-width:180px;
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      font-size: 1rem;
      gap: 4px;
      cursor: pointer;
      svg {
        margin-top: -5px;
      }
    }

    @media (max-width: 764px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 1rem;
    }
  }

  footer {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      svg {
        fill: ${(props)=> props.theme.base};
      }
      
    }

    @media (max-width: 764px){
      flex-direction: column;
      align-items: center;
    }
  }

`