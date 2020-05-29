import styled from 'styled-components';
import { colors } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 300px;
  position: relative;
  width: 100%;
  top: 0;
  align-items: center;
  z-index: 2;
`;

export const HeaderTop = styled.div`
  display: flex;
  width: 100%;
  top: 0;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background: ${colors.admin.white};
  padding: 0 30px 0 30px;
`;

export const DateAndHour = styled.div`
  display: flex;
`;

export const Logout = styled.div`
  display: flex;

  button {
    border: none;
    background: transparent;
    box-shadow: none;
  }
  button:focus, button:hover, button:active {
    border: none;
    background: transparent;
    box-shadow: none;
  }
`;

export const SubHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  top: 0;
  align-items: center;
  height: 40px;
  background: ${colors.admin.secondary};
  padding: 0 30px 0 30px;
`;

export const TitlePage = styled.div`
  span {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.admin.primaryOnPrimary};
  }
`;

export const Breadcrumb = styled.div`
  ul {
    display: flex;
    li {
      margin: 0 5px;

      &:before {
        content: '/';
        margin-right: 5px;
      }

      &:first-child:before {
        display: none;
      }
      a {
        font-size: 12px;
        font-weight: bold;
        color: ${colors.admin.primaryOnPrimary};
      }
    }
  }
`;
