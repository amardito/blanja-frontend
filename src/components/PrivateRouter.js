import React from 'react'
import { Route,Redirect } from 'react-router-dom';
import { connect } from "react-redux";

function PrivateRouter({children, auth, ...rest}) {
  // console.log(auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: {
                from: location,
              },
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = (state) => {
  return{
    auth: state
  }
}

export default connect(mapStateToProps)(PrivateRouter)