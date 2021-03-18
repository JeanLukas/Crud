import Crud from './components/Crud';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Routes from './components/Routes/Routes';

const Root = () => {
  return (
    <div >
     <Router>
       <Switch>
          <Route path="/list" component={Crud}/>
          <Routes path="/" component={Form}/>
       </Switch>
     </Router>
  
    </div>
  );
}

export default Root;