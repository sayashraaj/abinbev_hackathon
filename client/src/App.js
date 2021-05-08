import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignIn from './modules/signin/SignIn';
import SignUp from './modules/signup/SignUp';
import NavBar from './modules/navbar/NavBar';
import Home from './modules/home/Home';


function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <NavBar/>
                <Switch>
              <Route path="/signin">
                  <SignIn/>
              </Route>
              <Route path="/signup">
                  <SignUp/>
              </Route>
              <Route path="/">
              	<Home/>
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
