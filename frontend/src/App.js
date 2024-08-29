import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <PublicRoute restricted={false} component={HomePage} path="/" exact />
            <PublicRoute restricted={true} component={LoginPage} path="/login" exact />
            <PublicRoute restricted={true} component={SignupPage} path="/signup" exact />
            <PublicRoute restricted={true} component={PasswordRecoveryPage} path="/password-recovery" exact />
            <PrivateRoute component={HomePage} path="/dashboard" exact />
            {/* Adicione outras rotas privadas e públicas aqui */}
            <Route path="*" component={() => <div>404 - Página não encontrada</div>} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
