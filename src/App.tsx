import Home from "./pages/Home/Home.tsx";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}

export default App;
