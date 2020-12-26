import {
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/success">
          <SuccessPage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
