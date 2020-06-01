import * as React from 'react';

import {widthSidebarAdmin} from '../../../helpers';
import useWindowDimensions from '../../../helpers/getWindowDimensions';

const Dashboard: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="content" style={{ width: width - widthSidebarAdmin }}>
        <div className="title-section">
          <h1>Seja bem vindo!</h1>
        </div>
        <div className="box">
          <p><strong>NOTA:</strong></p>
          <p>O sistema está em constante evolução.</p>
          <p style={{ fontStyle: 'italic' }}>Você vai notar que alguns links levam para páginas em construção, isso é chato.. mas está sendo resolvido :D</p>
          <p>Atualizações serão enviadas pra ele a qualquer momento.</p>
          <p>Não se assuste se algum dia desses ele ficar ainda melhor! :)</p>
          <p>Qualquer dúvida, ou bug no seu site me chamar no whats!</p>
          <p>
            <a href="https://api.whatsapp.com/send?phone=5551993072820&amp;text=Ola%20Diego%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank">
              51. 993072820
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export { Dashboard };

