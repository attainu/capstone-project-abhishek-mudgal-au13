import './App.css';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom'
import Register from './Pages/Register/Signup'
import Login from './Pages/Login/Login'
import DashBoard from './Pages/DashBoard/DashBoard';
import Charts from './Pages/DashBoard/Charts';
import Profile from './Pages/DashBoard/Profile';
import PrivateRoute from './PrivateRoute';
import jwtDecode from 'jwt-decode';
import Page from './Pages/Page/Page';


function App() {
  return (
    <div className="app">
    <BrowserRouter>
      {/* <Layout> */}
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={DashBoard} />
        <PrivateRoute exact path="/charts" component={Charts} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/:userName" component={Page} />

      </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  </div>
  );
}

export default App;
