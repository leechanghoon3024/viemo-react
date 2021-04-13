
import './App.css';
import Vimeo from "@u-wave/react-vimeo";
import {useCallback, useEffect, useState} from "react";
import {BrowserRouter, Switch, Route, Redirect, HashRouter} from "react-router-dom";
import Video from "./Video";
function App() {
  return (

      <BrowserRouter  basename={process.env.PUBLIC_URL}>
          <Switch>
              <Route path="/:id" exact component={Video} />
              <Redirect path="*" to="/" />
          </Switch>
      </BrowserRouter>

  );
}

export default App;
