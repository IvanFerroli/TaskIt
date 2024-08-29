// // src/components/PublicRoute.js

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// // Componente PublicRoute
// const PublicRoute = ({ component: Component, restricted, ...rest }) => {
//   const isAuthenticated = /* lógica para verificar se o usuário está autenticado */;

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated && restricted ? (
//           <Redirect to="/home" />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   );
// };

// export default PublicRoute;
