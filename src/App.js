import {
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/Home';

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
