import styled from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

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
`

export const NavDesktop = styled.nav`
  ul {
    display: flex;
    gap: 1rem;
    list-style: none;

    a {
      cursor: pointer;
    }
  }

  @media (max-width: 764px){
    display: none;
  }
`

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: 764px){
    display: block;
  }
`

export const NavContent = styled(DropdownMenu.Content)`
  width: 200px;
  margin-top: 10px;
  margin-left: 10px;
  background-color: ${(props)=> props.theme.backgroundNavMobile};
  border-radius: 6px;
`

export const NavItem = styled(DropdownMenu.Item)`
  padding: 0.5rem 1rem;
`

export const NavSeparator = styled(DropdownMenu.Separator)`
  height: 1px;
  background-color: ${(props)=> props.theme.base};
  opacity: 0.2;
  margin: 5px;
`

export const NavButton = styled(DropdownMenu.Trigger)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 999px;
  background-color: ${(props)=> props.theme.secondary};
  color: ${(props)=> props.theme.base};
`

export const Footer = styled.footer`
  width: 100%;
  max-width: 1124px;
  margin: auto;
  align-items: center;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 01rem;
  gap: 20px;

  span {
    margin-bottom: 40px;
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
  font-size: 1.2rem;

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