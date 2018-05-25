
export default function fetchData(selectedCurrency) {
    //Get current date and then subtract 24 hours to get the 24 hour range
    const now = parseInt(new Date().getTime() / 1000, 10);
    const oneDayAgo = now - 86400;

    const apiURL = `https://poloniex.com/public?command=returnChartData&currencyPair=BTC_${selectedCurrency}&start=`;
    
    //Calls the API with the 24 hour range and the user selected cryptocurrency
    const data =  fetch(`${apiURL}${oneDayAgo}&end=${now}&period=300`)
                    .then(function(response) {
                        if(response.ok) {
                            return response.json();
                        }
                        return Promise.reject(new Error('Failed to fetch API data'));
                    });

    return data;
}
