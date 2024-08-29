import React from 'react';
import PasswordRecoveryForm from '../components/PasswordRecoveryForm';

const PasswordRecoveryPage = () => {
  const handlePasswordRecovery = (data) => {
    // Lógica para recuperação de senha
  };

  return (
    <div>
      <h1>Recover Password</h1>
      <PasswordRecoveryForm onSubmit={handlePasswordRecovery} />
    </div>
  );
};

export default PasswordRecoveryPage;
