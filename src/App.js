import {
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up">
          <SignUpPage/>
        </Route>
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
