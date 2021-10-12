import './App.css';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { BrowserRouter as Router, Route, Link, useHistory, useLocation, useParams } from "react-router-dom";
import { Posts } from './components/Posts';

function App() {

  return (
    <div>

      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        
        <Route path="/profile/:id" exact>
          <Profile />
        </Route>
      </Router>




    </div>
  );
}

export default App;
