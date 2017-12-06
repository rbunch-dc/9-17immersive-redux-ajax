import axios from 'axios';

function fetchStock (stockSymbol){
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=1min&apikey=DIN8YBJNMQS3UZGS`
	const data = axios.get(url)
	console.log(data);
	return{
		type:'GET_STOCKS',
		payload: data
	}
}

export default fetchStock

