var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
var portfolio = [['XYZ', 20], ['BBB', 10]];

function totalPortfolioValue(ticker, portfolio){
	var portfolioFlattened = portfolio.reduce(function(a,b){
		return a.concat(b);
	},
	[]
	)

	var portfolioTickerValues = [];
	var amountInPortfolio = [];
	for (var i =0; i < ticker.length; i++){
		for (var j = 0; j < portfolioFlattened.length; j++){
			if (typeof ticker[i] === 'string' && ticker[i] === portfolioFlattened[j]){
				portfolioTickerValues.push(ticker[i + 1]);
				amountInPortfolio.push(portfolioFlattened[j + 1]);	

			}

		}
	}

console.log(portfolioFlattened);
console.log(portfolioTickerValues);
console.log(amountInPortfolio);

return portfolioTickerValues.reduce(function(r,a,i){return r+a*amountInPortfolio[i]},0);

}


console.log(totalPortfolioValue(ticker, portfolio));




