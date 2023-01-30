import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Auth from './components/Auth.js';
import Tasks from './components/Tasks.js';
import { useContext } from 'react';
import { UserContext } from './context/UserContext.js';

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/tasks" component={Tasks}></Route>
        <Route exact path="/">
          <>
            {user && <Redirect to="/tasks" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
