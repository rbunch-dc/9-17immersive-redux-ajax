import React, { Component } from 'react';
import { connect } from 'react-redux';


class Stocks extends Component{
	render(){
		console.log(this.props.stockData);
		if(this.props.stockData === null){
			return(
				<h1>Please search for a stock above.</h1>
			)
		}else{
			console.log(this.props.stockData['Meta Data']);
			const stockData = this.props.stockData.data['Meta Data'];
			return(
				<h1>{stockData}</h1>
			)
		}
	}
}

function mapStateToProps(state){
	return{
		stockData: state.stocks
	}
}

// connect takes max of 2 args,
// 1. state function
// 2. dispatch/action function
export default connect(mapStateToProps)(Stocks);
// export default Weather;
// export {Weather};
