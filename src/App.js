import React from "react";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import List from "./Pages/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/home" exact />
          <Route component={List} path="/list" exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
