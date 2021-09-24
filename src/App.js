import React,{useEffect} from 'react';

import './App.css';
import HomeScreen from "./screens/HomeScreen.js";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import { auth } from './firebase';
function App() {
  const user=null;
  const dispatch =useDispatch();
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //Logged In
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      }else{
        //Logged Out
        dispatch(logout);
      }
    });
    return unsubscribe;
  },[]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
