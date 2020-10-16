import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import Home from './Home'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        {/* <Route path ='/protected' component ={BubblePage}/> */}
        <Route path='/login' component={Login} />
        <PrivateRoute path='/protected' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
