import styled from "styled-components"

export const PostContainer = styled.header`
  width: 100%;
  max-width: 1124px;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .back-to-homepage {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    a {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0.5rem 1rem;
      border: 1px solid ${(props)=> props.theme.base};
      border-radius: 6px;
      cursor: pointer;
    }
  }
`

export const HeaderPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  background-color: ${(props)=> props.theme.secondary};
  padding: 2rem;
  border-radius: 8px;
  margin-top: 70px;

  .tags-session {
      P {
        font-size: 0.9rem;
        line-height: 2rem;
      }
      span {
        padding: 0.2rem 1rem;
        border: 1px solid ${(props)=> props.theme.base};
        font-size: 0.9rem;
        border-radius: 6px;
      }
    }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 1rem;
      &:hover {
        text-decoration: underline;
      }
    }

    span {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 980px){
    h1 {
      font-size: 1.5rem;
    }
  }

`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  background-color: ${(props)=> props.theme.secondary};
  padding: 2rem;
  border-radius: 8px;
  margin-top: 20px;
`

export const CoverImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-width: 640px;
    height: 100%;
    border-radius: 6px;
  }
`

export const DescriptionContainer = styled.div`
  p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`