import * as React from 'react';
import AuthContext from '../../../contexts/auth';

import {Dropdown} from 'react-bootstrap';

import {widthSidebarAdmin} from '../../../helpers';
import useWindowDimensions from '../../../helpers/getWindowDimensions';

import { FaUser } from 'react-icons/fa';

const Top: React.FC = () => {
  const { user, signOut } = React.useContext(AuthContext);
  const { width } = useWindowDimensions();

  function handleSignOut() {
    signOut();
  };

  return (
    <>
      <div className="header-top" style={{ width: width - widthSidebarAdmin }}>
        <div className="user-data">
          <div className="img-user">
            <FaUser />
          </div>
          <span>{user?.name}</span>
          <Dropdown>
            <Dropdown.Toggle split id="dropdown-arrow" />

            <Dropdown.Menu>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export {Top};