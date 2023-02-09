import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Side>
          <MobileNav>
            <UnstyledButton>
              <Icon id='shopping-bag' />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id='search' />
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id='menu' />
            </UnstyledButton>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndBelow} {
    border-top: 4px solid var(--color-gray-900);
    padding: 16px 32px;
  }

  @media ${QUERIES.phoneAndBelow} {
    padding: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 10vw - 5rem, 3rem);
  margin: 0px clamp(2rem, 6vw - 1.75rem, 3rem);

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    justify-content: flex-end;
    gap: 48px;
  }

  @media ${QUERIES.phoneAndBelow} {
    gap: 24px;
  }
`;

export default Header;
