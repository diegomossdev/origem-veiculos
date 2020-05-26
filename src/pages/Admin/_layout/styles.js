import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: ${colors.admin.bgGrey};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 100px;
  padding: 30px 30px 30px 330px;
  background: #dee1e2;
  z-index: 1;
`;
