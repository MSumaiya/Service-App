/* import React from 'react';

import { Provider } from 'react-redux'
import initStore from './store'
import { ToastProvider } from 'react-toast-notifications';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import HomePage from './pages/Home';
import FaqPage from './pages/Faq';
import ProfilePage from './pages/Profile';
import ServicesPage from './pages/Services'
import ServiceDetailPage from './pages/ServiceDetail'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'


const store = initStore()

function App() {
  return (
    <Provider store={store}>
        <ToastProvider>
        <Router>
        <Navbar />
         <Navbar id="navbar-clone"/>
          <Sidebar />
          <Switch>
          <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/services/:serviceId">
              <ServiceDetailPage />
            </Route>
            <Route path="/services">
              <ServicesPage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/faq">
              <FaqPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
        </ToastProvider>
    </Provider>
  );
}

export default App;
 */
import React from 'react';

import { Provider } from 'react-redux'
import { ToastProvider } from 'react-toast-notifications'
import initStore from './store'

import { BrowserRouter as Router } from 'react-router-dom'
import ServiceApp from './ServiceApp'
import { onAuthStateChanged, storeAuthUser } from './actions'
//import auth from './reducers/auth';

const store = initStore()

class App extends React.Component {

componentDidMount(){
  this.unsubscribeAuth = onAuthStateChanged(authUser=>{
      store.dispatch(storeAuthUser(authUser))
    })
}
componentWillUnmount(){
  this.unsubscribeAuth()
}

  render(){
    return (
      <Provider store={store}>
        <ToastProvider>
          <Router>
            <ServiceApp />
          </Router>
        </ToastProvider>
      </Provider>
    );
  }
}

export default App;