
import { Navigate,Outlet } from "react-router-dom";

import React from "react";

function PrivateRoute() {

    let auth =  {'token' : false}

    return (
        auth.token ? <Outlet/> : <Navigate to="/Login"/> 
    )
}
export default PrivateRoute;