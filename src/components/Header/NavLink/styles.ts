import { lighten } from 'polished';
import styled from 'styled-components';

type NavLinkContainerProps = {
  isActive: boolean;
};

export const NavLinkContainer = styled.li<NavLinkContainerProps>`
  a {
    text-transform: uppercase;
    color: ${({ theme, isActive }) =>
      isActive ? theme.primary : theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${({ theme, isActive }) =>
        isActive
          ? lighten(0.2, theme.primary)
          : lighten(0.2, theme.textHighlight)};
    }
  }
`;
