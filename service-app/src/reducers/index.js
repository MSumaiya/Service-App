

import { combineReducers } from 'redux';
import services from './service'
import selectedService from './selectedService'
import auth from './auth'
//import user from './user'

const serviceApp = combineReducers({
    services,
    selectedService,
    auth,

})

export default serviceApp;