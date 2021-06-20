import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './Pages/Register/Signup'
import Login from './Pages/Login/Login'
import DashBoard from './Pages/DashBoard/DashBoard';
import Charts from './Pages/DashBoard/Charts';
import Profile from './Pages/DashBoard/Profile';


function App() {
  return (
    <div className="app">
    <BrowserRouter>
      {/* <Layout> */}
      <Switch>
        <Route exect path="/register" component={Register} />
        <Route exect path="/login" component={Login} />
        <Route exect path="/dashboard" component={DashBoard} />
        <Route exect path="/charts" component={Charts} />
        <Route exect path="/profile" component={Profile} />

      </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  </div>
  );
}

export default App;
