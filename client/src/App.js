import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './components/view/LandingPage/LandingPage';
import LoginPage from './components/view/LoginPage/LoginPage';
import RegisterPage from './components/view/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import 'antd/dist/antd.css';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route path="/login" component={Auth(LoginPage, false)} />
        <Route path="/register" component={Auth(RegisterPage, false)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
