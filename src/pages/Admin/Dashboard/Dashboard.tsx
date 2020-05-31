import * as React from 'react';
import AuthContext from '../../../contexts/auth';

const Dashboard: React.FC = () => {
  const {signOut} = React.useContext(AuthContext);

  function handleSignOut() {
    signOut();
  };

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>Logout</button>
    </>
  );
}

export { Dashboard };