import React from 'react';

import Signin from './pages/Signin';
// import SignUp from './pages/Signup';

import AuthContext from './contexts/AuthContext';

import GlobalsStyles from './styles/globals';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Edson Henrique' }}>
      <Signin />
    </AuthContext.Provider>
    <GlobalsStyles />
  </>
);

export default App;
