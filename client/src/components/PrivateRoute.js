import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import BubblePage from './BubblePage';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <BubblePage {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );


export default PrivateRoute