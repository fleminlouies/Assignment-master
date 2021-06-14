import './App.css';
import { Route , Switch } from 'react-router-dom';
import Home from './Pages/Home';
import DetailPage from './Pages/DetailPage';

function App() {
  return (
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/DetailPage/:slug" component={DetailPage}/>
  </Switch>
  );
}

export default App;
