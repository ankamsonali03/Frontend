import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Landing/Home';
import AddTariff from './Components/AddTariff';
import UpdateTariff from './Components/UpdateTariff';
import DeleteTariff from './Components/DeleteTariff';
import FetchTarrifs from './Components/ViewAllTarifss';
import FetchAllTariffs from './Components/FetchAllTariffs';
import ContactUs from './Components/Landing/ContactUs';
import FetchById from './Components/FetchById';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contactus" component={ContactUs}/>
        <Route path="/fetchall" component={FetchAllTariffs}/>
        <Route path="/Add" component={AddTariff} />
        <Route path="/update/:id" component={UpdateTariff} />
        <Route path="/delete/:id" component={DeleteTariff} />
        <Route path="/view" component={FetchTarrifs} />
        <Route path="/search" component={FetchById}/>
      </Switch>
    </Router>
  );
}

export default App;
