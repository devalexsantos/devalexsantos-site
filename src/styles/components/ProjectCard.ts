import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
  background-color: ${(props)=> props.theme.secondary};
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  margin: auto;

  
`

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
      border-radius: 6px;
  }
`

export const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 0;
  
  span {
    font-size: 0.8rem;
    border: 1px solid ${(props)=> props.theme.base};
    padding: 0.2rem;
    border-radius: 6px;
  }

  @media (max-width: 764px){
      justify-content: center;
    }
`