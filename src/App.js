import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/layout/Navbar";
import SignUp from "./components/pages/SignUp";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Navbar />

        <Switch>
          <Route exact path="/" component={SignUp} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
