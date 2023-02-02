import styled from 'styled-components';

export const HeaderNavigation = styled.div`
  width: 100%;
  padding: 1rem 0;
  margin: auto;
  position: fixed;
  top: 0px;
  background-color: ${(props)=> props.theme.backgroundNav};
  backdrop-filter: blur(14px);

  .react-switch {
  vertical-align: middle;
  margin-left: 4px;
}
`

export const NavigationContent = styled.div`
  margin: auto;
  padding: 0 2rem;
  width: 100%;
  max-width: 1124px;
  display: flex;
  justify-content: space-between;

  nav ul {
    display: flex;
    gap: 1rem;
    list-style: none;

    a {
      cursor: pointer;
    }
  }

`

export const Footer = styled.footer`
  display: flex;
  margin: auto;
  margin: 4rem 0;
  justify-content: center;

  font-size: 01rem;
`