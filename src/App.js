import {
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
