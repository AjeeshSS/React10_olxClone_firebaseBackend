import React, { useEffect, useContext } from 'react';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Authcontext, FirebaseContext } from './store/Context';
import Post from './store/PostContext';


function App() {
  const { setUser } = useContext(Authcontext)

  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    })
  })

  return (
    <div className="App">
      <Post>
        <Router>

          <Route exact path='/' component={Home} />

          <Route path='/signup'>
            <Signup />
          </Route>

          <Route exact path='/login' component={Login} />

          <Route exact path='/create' component={Create} />

          <Route exact path='/view' component={View} />

        </Router>
      </Post>
    </div>
  );
}

export default App;
