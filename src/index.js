// In order to wire up a redux React app we need the following:
// 1. Provider component. THis comes from react-redux
// 2. createStore. This comes from redux.
// 3. reducers to give to createStore
// 4. Make a single rootReducer (3) to import our individual reducers
// 5. Make at least one indidivual reducer to import into root (4)
// 6. Create theStore (2) with the reducers (3 -> 4 -> 5)
// 7. Put the Provider Component (1) with a prop of store with the store (6) around <App />

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux stuff
import { Provider } from 'react-redux'; //Item 1
import { createStore } from 'redux'; // Item 2
import reducers from './reducers/index' //item 3 & 4 & 5

const theStore = createStore(reducers); //item 6

ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

