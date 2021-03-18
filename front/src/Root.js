import Crud from './components/Crud';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


const Root = () => {
  return (
    <div >
     <Router>
       <Switch>
          <Route path="/list" component={Crud}/>
          <Route path="/" component={Form}/>
       </Switch>
     </Router>
  
    </div>
  );
}

export default Root;