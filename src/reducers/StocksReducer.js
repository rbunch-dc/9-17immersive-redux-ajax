
export default function(state = null, action){ //item 1,3 & 4
	switch(action.type){
		case "GET_STOCKS":
			// do some other stuff
			return action.payload;
			break;
		default:
			// If neither case happens, do this
			return state;
	}
}
