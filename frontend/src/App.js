import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PublicRoute restricted={false} component={HomePage} />} exact />
            <Route path="/login" element={<PublicRoute restricted={true} component={LoginPage} />} exact />
            <Route path="/signup" element={<PublicRoute restricted={true} component={SignupPage} />} exact />
            <Route path="/password-recovery" element={<PublicRoute restricted={true} component={PasswordRecoveryPage} />} exact />
            <Route path="/dashboard" element={<PrivateRoute component={HomePage} />} exact />
            {/* Adicione outras rotas privadas e públicas aqui */}
            <Route path="*" element={<div>404 - Página não encontrada</div>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;