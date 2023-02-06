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
  margin-top: 70px;

  @media (max-width: 980px){
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

    @media (max-width: 980px){
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

    @media (max-width: 980px){
      flex-direction: column;
      align-items: center;
    }
  }

`

export const MyProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  align-items: center;
  gap: 1rem;

  img {
    width: 100%;
    height: 100%;
  }

  p {
    &:hover {
      text-decoration: underline;
    }
  }

  a.more-projects-link {
    padding: 0.3rem 1rem;
    border: 1px solid ${(props)=> props.theme.base};
    border-radius: 6px;


    &:hover {
      background-color: ${(props)=> props.theme.base};
      color: ${(props)=> props.theme.secondary};
      text-decoration: none;
    }
  }
`

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;

  @media (max-width: 1160px){
      grid-template-columns: repeat(2, 1fr);
    }

  @media (max-width: 768px){
      grid-template-columns: repeat(1, 1fr);
    }

`

export const MyPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  align-items: center;
  gap: 1rem;

  a.more-projects-link {
    padding: 0.3rem 1rem;
    border: 1px solid ${(props)=> props.theme.base};
    border-radius: 6px;


    &:hover {
      background-color: ${(props)=> props.theme.base};
      color: ${(props)=> props.theme.secondary};
      text-decoration: none;
    }
  }
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  align-items: center;
  gap: 1rem;

  a.more-projects-link {
    padding: 0.3rem 1rem;
    border: 1px solid ${(props)=> props.theme.base};
    border-radius: 6px;


    &:hover {
      background-color: ${(props)=> props.theme.base};
      color: ${(props)=> props.theme.secondary};
      text-decoration: none;
    }
  }
`

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 8px;

  img {
    max-width: 350px;
    border-radius: 6px;
  }

  p {
    text-indent: 10px;
    margin-top: 0.5rem;
  }

  background-color: ${(props)=> props.theme.secondary};

  @media (max-width: 1080px){
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }

  
`