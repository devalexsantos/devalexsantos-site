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
  color: ${(props)=> props.theme.base}
`

export const Footer = styled.footer`
  display: flex;
  margin: auto;
  margin: 4rem 0;
  justify-content: center;

  font-size: 01rem;
`