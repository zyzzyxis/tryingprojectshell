import './App.css';
import Home from './pages/Home';
import {Switch, Route} from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';

function App() {
  return (
    <>
    <NavBar />
    <Container>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
    </Container>
    </>
  );
}

export default App;
