import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>  
        <Switch>
          <Route path="/services" exact component={Services}></Route>
        </Switch> 
        <Switch>
          <Route path="/products" exact component={Products}></Route>
        </Switch> 
        <Switch>
          <Route path="/sign-up" exact component={SignUp}></Route>
        </Switch> 
      </Router>
    </>
  );
}

export default App;
