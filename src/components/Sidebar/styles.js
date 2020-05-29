import styled from 'styled-components';
import { lighten } from 'polished';
import { colors } from '~/styles/colors';

export const Container = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  background: #222;
  position: fixed;
  flex-direction: column;
  z-index: 2;
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  background: ${colors.admin.primary};
`;

export const MenuSidebar = styled.div`
  width: 100%;
  display: flex;
  padding-top: 30px;

  nav {
    width: 100%;
    display: flex;

    ul {
      width: 100%;
      li {
        width: 100%;
        display: flex;
        a {
          width: 100%;
          padding: 15px 30px 15px 30px;
          color: ${colors.admin.text.normal};

          &:hover {
            background: ${lighten(0.05, `${colors.admin.darken}`)};
          }
        }
      }
    }
  }
`;

export const DivisorMenu = styled.div`
    margin-top: 15px;
    padding: 15px 0 5px 30px;
    border-top: 1px solid ${lighten(0.05, `${colors.admin.darken}`)};

    &:before {
      content: '::: ${props => props.text}';
      margin-right: 5px;
      color: ${colors.admin.text.weak};
      font-weight: 600;
      font-size: 12px;
    }
`;
