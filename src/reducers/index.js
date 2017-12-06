// This the RootReducer!!!
// To make a RootReducer: 
// 1. Get combineReducers method from redux
// 2. Call combineReducers method an pass it an object
// 3. Each key/property of the object, will be a single piece of application/redux state
// 4. Each value will be a single reducer (imported)

import { combineReducers } from 'redux' //Item 1.
import WeatherReducer from './WeatherReducer';

const rootReducer = combineReducers({ // item 2
	weather: WeatherReducer, // 3 & 4
})

 export default rootReducer;