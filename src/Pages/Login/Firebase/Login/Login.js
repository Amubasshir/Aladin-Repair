import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
  const { signInUsinGoogle } = useAuth();
  return (
    <div className="mt-5">
      <h2>Please login</h2>
      <button onClick={signInUsinGoogle} className="btn btn-warning">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
