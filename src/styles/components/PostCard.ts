import styled from 'styled-components';

export const PostCardContainer = styled.div`
  background-color: ${(props)=> props.theme.secondary};
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  margin: auto;

  p {
    &:hover {
      text-decoration: underline;
    }
  }

  
`

export const PostImageContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
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