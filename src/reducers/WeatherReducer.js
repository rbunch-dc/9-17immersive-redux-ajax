// This is a reducer.
// To make a reducer:
// 1. make a function that has 2 params:
// 	- state (usually set a default)
// 	- action 
// 2. The state param comtians THIS reducers state. Just like a variable.
// 3. The action param will contain whatever the object the dispatched action sent us
// 	- type (REQUIRED)
// 	- payload (data/JSON/stuff)
// 4. Check the action.type to see if I care.
// 4a. If I care, return some new state
// 4b. If I don't care, return state (old state)

export default function(state = null, action){ //item 1,3 & 4
	switch(action.type){
		case "GET_WEATHER":
			//do some stuff
			console.log(action);
			return action.payload;
			break;
		case "BAD_DATA":
			return {
				msg: "Please enter a valid zip code",
				code: 500
			}
		case "CLEAR_WEATHER":
		// 	// do some other stuff
			return null;
		// 	return state;
		// 	break;
		case "EDIT_WEATHER":
			return null;
		default:
			// If neither case happens, do this
			return state;
	}

}

// if(action.type == "GET_WEATHER"){
// 	//
// }else if(Action.type == "GET_STOCKS"){
// 	// do waht
// }

// A switch statement is an if statement that checks the value of ONE thing
// AND ONLY one thing.