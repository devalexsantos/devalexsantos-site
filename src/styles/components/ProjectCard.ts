import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
  background-color: ${(props)=> props.theme.secondary};
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
`

export const LinksProjectContainer = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    border: 1px solid ${(props)=> props.theme.base};
    border-radius: 6px;
    color: ${(props)=> props.theme.base};
    background: none;
    cursor: pointer;

    padding: 3px 6px;

    display: flex;
    gap: 3px;
    align-items: center;

    &:hover {
      background-color: ${(props)=> props.theme.base};
      color: ${(props)=> props.theme.secondary};
    }
  }
`

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
      border-radius: 6px;
      height: 250px !important;
  }
`

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem 0;
  
  span {
    font-size: 0.8rem;
    border: 1px solid ${(props)=> props.theme.base};
    padding: 0.2rem;
    border-radius: 6px;
  }
`