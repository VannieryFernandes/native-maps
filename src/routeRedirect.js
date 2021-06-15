import React from "react";

import Map from "./views/Map/Map";
import { Route } from "react-router-native";

const RouteRedirect = () => {
 
  let LayoutRedirect = () => {
    
    return (
      <div>
        <Switch>
            <Route exact path={"/"} component={Map} />
        </Switch>

      </div>
    );
  };

  return <LayoutRedirect />;
};

export default RouteRedirect;