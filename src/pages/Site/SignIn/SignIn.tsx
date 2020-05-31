import * as React from 'react';
import AuthContext from '../../../contexts/auth';

const SignIn: React.FC = () => {
  const { signIn } = React.useContext(AuthContext);

  function handleSignIn() {
    signIn();
  }

  return (
    <>
      <h1>SignIn</h1>
      <button onClick={handleSignIn}>
        SignIn
      </button>
    </>
  );
}

export { SignIn };