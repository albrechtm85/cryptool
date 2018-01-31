const fetch = require("node-fetch");
const config = require('./config.json');

var top = [];

async function getCoinInfo() {
    var topLowest = config.top[0] - 1;
    var topHighest = config.top[1];
    var limit = topHighest - topLowest;
    var targetUrl = 'https://api.coinmarketcap.com/v1/ticker/?start='+ topLowest +'&limit=' + limit;
    try {
        const coins = await fetch(targetUrl);
        try {
            const response = await coins.json();
            top = response;
        } catch(e) {
            console.log('Something went wrong during the parsing of the coins json. Ended with error: ' + e);
        }
    } catch(e) {
        console.log('Something went wrong during the fetch of the coins. Ended with error: ' + e);
    }
}

async function getMarketInfo(symbol) {
    var targetUrl = 'https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=' + symbol + '&tsym=BTC';
    try {
        const marketsPerCoin = await fetch(targetUrl);
        try {
            const response = await marketsPerCoin.json();
            markets = response;
            return response;
        } catch(e) {
            console.log('Something went wrong during the parsing of the exchanges json. Ended with error: ' + e);            
        }
    } catch(e) {
        console.log('Something went wrong during the fetch of the exchanges. Ended with error: ' + e);
    }
}

async function selectMarket(exchanges) {
    var preferedExchanges = config.exchanges;
    var availableExchanges = exchanges.map((exchange) => exchange.MARKET.toLowerCase());
    for (var i = 0; i < preferedExchanges.length; i++) {
        if (availableExchanges.includes(preferedExchanges[i].toLowerCase())) {
            return preferedExchanges[i];
        }
    }
    return "No suitable exchange found";
}

async function run() {
    await getCoinInfo();
    var coinSymbols = top.map((coin) => coin.symbol);
    var markets = [];
    const request = async () => {
        for (var i = 0; i < coinSymbols.length; i++) {
            const marketsPerCoin = await getMarketInfo(coinSymbols[i]);
            if (marketsPerCoin.Response == "Success") {
                var exchange = await selectMarket(marketsPerCoin.Data.Exchanges);
                markets.push([coinSymbols[i], exchange]);
            } else {
                markets.push([coinSymbols[i], "ERROR"]);
            }
        }
        console.log(markets);
    }
    request();
}

run();