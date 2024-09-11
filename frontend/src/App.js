import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import PasswordRecoveryPage from './components/PasswordRecoveryPage';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { TaskProvider } from './components/TaskProvider';
import { AuthProvider } from './components/AuthProvider';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Header />
        <TaskProvider>
          <main>
            <Routes>
              <Route 
                path="/" 
                element={
                  <PublicRoute restricted={false}>
                    <WelcomePage /> 
                  </PublicRoute>
                } 
              />
              <Route 
                path="/login" 
                element={
                  <PublicRoute restricted={true}>
                    <LoginPage />
                  </PublicRoute>
                } 
              />
              <Route 
                path="/register" 
                element={
                  <PublicRoute restricted={true}>
                    <RegisterPage />
                  </PublicRoute>
                } 
              />
              <Route 
                path="/password-recovery" 
                element={
                  <PublicRoute restricted={true}>
                    <PasswordRecoveryPage />
                  </PublicRoute>
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <HomePage /> 
                  </PrivateRoute>
                } 
              />
              <Route path="*" element={<div>404 - Página não encontrada</div>} />
            </Routes>
          </main>
        </TaskProvider>
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
