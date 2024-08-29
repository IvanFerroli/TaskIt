// // src/components/PrivateRoute.js
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// // Componente PrivateRoute
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   // Substitua a lógica abaixo pela sua lógica real de autenticação
//   const isAuthenticated = /* lógica para verificar se o usuário está autenticado */;

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
