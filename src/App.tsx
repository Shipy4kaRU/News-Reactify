import Home from "./pages/Home/Home.tsx";
import { Route, Switch, Redirect } from "react-router-dom";
import ThemeProvider from "./providers/ThemeProvider.tsx";

function App() {
  return (
    <ThemeProvider>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
