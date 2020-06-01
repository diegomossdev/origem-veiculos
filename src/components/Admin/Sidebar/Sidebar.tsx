import * as React from 'react';
import {Link} from 'react-router-dom';
import useWindowDimensions from '../../../helpers/getWindowDimensions';

import logo from '../../../assets/admin/dm-logo.png';

const Sidebar: React.FC = () => {
  const { height } = useWindowDimensions();

  return (
    <>
      <div className="sidebar" style={{ height }}>
        
        <div className="logo">
          <img src={logo} alt="DM-admin"/>
        </div>

        <ul>
          <li>
            <Link to="/admin/banners">
              <div>
                <span>
                  Banners
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admin/veiculos">
              <div>
                <span>
                  Todos veículos
                </span>
              </div>

            </Link>
          </li>
          <li>
            <Link to="/admin/pagina-home">
              <div>
                <span>
                  Página home
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admin/pagina-quem-somos">
              <div>
                <span>
                  Página quem somos
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admin/contatos">
              <div>
                <span>
                  Contatos
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admin/rodape">
              <div>
                <span>
                  Rodapé
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export {Sidebar};