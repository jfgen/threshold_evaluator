
export default function fetchData(selectedCurrency) {
    const now = parseInt(new Date().getTime() / 1000, 10);
    const oneDayAgo = now - 86400;
    const apiURL = `https://poloniex.com/public?command=returnChartData&currencyPair=BTC_${selectedCurrency}&start=`;
    
    const data =  fetch(`${apiURL}${oneDayAgo}&end=${now}&period=300`)
                    .then(function(response) {
                        if(response.ok) {
                            return response.json();
                        }
                        throw new Error('Failed to fetch API data');
                    });

    return data;
}
