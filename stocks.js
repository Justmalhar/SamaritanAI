require('es6-promise').polyfill();
require('isomorphic-fetch');

var purchasedStocks = []

function addStock(stock){
    purchasedStocks.push(stock);
    console.log("Added " + stock + " to purchasedStocks.");
    console.log(purchasedStocks);
}
  
function deleteStock(stock){
    console.log(purchasedStocks);
    var index = purchasedStocks.indexOf(stock);
    if (index > -1) {
       purchasedStocks.splice(index, 1);
    }
    console.log("Removed " + stock + " from purchasedStocks.");
    console.log(purchasedStocks);
}

addStock("MSFT");
addStock("UBER");
deleteStock("MSFT");

function fetchStock(stock){
    var data = null;
    var price = null;
    var url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stock + "&apikey=TP6AAWOKRPYOM89T";
    fetch(url)
    .then((res) => res.json())
    .then((jsonData) => {
        //console.log("[AVSTOCK] API is called - ", symbol)
        data = jsonData
        if (data.hasOwnProperty("Note")) 
        {
            console.log("[AVSTOCK] Error: API Call limit exceeded.")
        }
        if (data.hasOwnProperty("Error Message")) 
        {
            console.log("[AVSTOCK] Error:", data["Error Message"])
        }
        if (data["Global Quote"]) 
        {
            if (!data["Global Quote"].hasOwnProperty("01. symbol")) 
            {
                console.log("[AVSTOCK] Data Error: There is no available data for", symbol)
            }
            //console.log("[AVSTOCK] Response is parsed - ", symbol)
           	//decimal Factor, converts decimals to numbers that needs to be multiplied for Math.round
            var price = parseFloat(data["Global Quote"]["05. price"]).toFixed(2);
            console.log(price);
        }
    })
    

}

fetchStock(purchasedStocks[0]);

