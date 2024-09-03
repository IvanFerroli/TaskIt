import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PasswordRecoveryPage from './components/PasswordRecoveryPage';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { TaskProvider } from './components/TaskProvider'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <TaskProvider>
        <main>
          <Routes>
            <Route path="/" element={<PublicRoute restricted={false} component={HomePage} />} />
            <Route path="/login" element={<PublicRoute restricted={true} component={LoginPage} />} />
            <Route path="/signup" element={<PublicRoute restricted={true} component={SignupPage} />} />
            <Route path="/password-recovery" element={<PublicRoute restricted={true} component={PasswordRecoveryPage} />} />
            <Route path="/dashboard" element={<PrivateRoute component={HomePage} />} />
            <Route path="*" element={<div>404 - Página não encontrada</div>} />
          </Routes>
        </main>
      </TaskProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default App;