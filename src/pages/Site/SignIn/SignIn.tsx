import * as React from 'react';
import AuthContext from '../../../contexts/auth';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../../assets/admin/dm-logo.png';

const SignIn: React.FC = () => {
  const { signIn } = React.useContext(AuthContext);
  const [loading] = React.useState(false);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório.'),
    password: Yup.string().required('A senha é obrigatória.'),
  });

  function handleSignIn(data) {
    const {email, password} = data;
    
    signIn(email, password);
  };

  return (
    <>
      <div className="auth-wrapper">
        <img src={logo} alt="DM-logo"/>

        <Form schema={schema} onSubmit={handleSignIn}>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        </Form>
      </div>
    </>
  );
};

export { SignIn };