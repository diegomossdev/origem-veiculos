import * as React from 'react';
import {Link} from 'react-router-dom';
import useWindowDimensions from '../../../helpers/getWindowDimensions';

import logo from '../../../assets/admin/dm-logo.png';
import {
  FaCar,
  FaArrowRight,
  FaRegImage,
  FaHome,
  FaUsers,
  FaUser,
  FaAngleDoubleDown,
} from 'react-icons/fa'

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
                <FaRegImage />
                <span>
                  Banners
                </span>
              </div>
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link to="/admin/veiculos">
              <div>
                <FaCar />
                <span>
                  Todos veículos
                </span>
              </div>
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link to="/admin/pagina-home">
              <div>
                <FaHome />
                <span>
                  Página home
                </span>
              </div>
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link to="/admin/pagina-quem-somos">
              <div>
                <FaUsers />
                <span>
                  Página quem somos
                </span>
              </div>
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link to="/admin/contatos">
              <div>
                <FaUser />
                <span>
                  Contatos
                </span>
              </div>
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link to="/admin/rodape">
              <div>
                <FaAngleDoubleDown />
                <span>
                  Rodapé
                </span>
              </div>
              <FaArrowRight />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export {Sidebar};