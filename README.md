### Introduction

Cryptool is a cryptocurrency utility tool for a strategy to buy and sell the marketcap top x till y periodically.

### Installation

Preconditions:
    - Git (optional), Node and npm are installed

1. Create the directory where cryptool will be installed
2. Use your CLI: 
3. Run command 'git clone https://github.com/albrechtm85/cryptool.git'
4. Run command 'npm install' 

### Run

Use your CLI: Run command 'node tool.js'
    - This will run the tool with default configuration

### Example

Given you want to buy the top 20 to 50 alts of coinmarketcap, and you only have accounts at Cryptopia, HitBTC and BitTrex (and you prefer to buy as much as you can in this order of exchanges). 
Configure config.json as follows:

    {
        "exchanges" : 
            [
                "Cryptopia",
                "HitBTC",
                "BitTrex"
            ],
        "top" : 
            [
                20,
                50
            ]
    }

Next, run the tool and the result is a list of coins and where to buy each coin, for example:

    [ [ 'LSK', Promise { 'HitBTC' } ],
    [ 'PPT', Promise { 'HitBTC' } ],
    [ 'XRB', Promise { 'Cryptopia' } ],
    [ 'USDT', Promise { 'BitTrex' } ],
    [ 'OMG', Promise { 'Cryptopia' } ],
    [ 'STEEM', Promise { 'HitBTC' } ],
    [ 'ZEC', Promise { 'Cryptopia' } ],
    [ 'STRAT', Promise { 'Cryptopia' } ],
    [ 'SC', Promise { 'Cryptopia' } ],
    [ 'BCN', Promise { 'Cryptopia' } ],
    [ 'BNB', Promise { 'No suitable exchange found' } ],
    [ 'XVG', Promise { 'Cryptopia' } ],
    [ 'BTS', Promise { 'BitTrex' } ],
    [ 'SNT', Promise { 'HitBTC' } ],
    [ 'WTC', Promise { 'HitBTC' } ],
    [ 'ARDR', Promise { 'HitBTC' } ],
    [ 'ZRX', Promise { 'HitBTC' } ],
    [ 'WAVES', Promise { 'Cryptopia' } ],
    [ 'MKR', Promise { 'No suitable exchange found' } ],
    [ 'REP', Promise { 'Cryptopia' } ],
    [ 'RHOC', Promise { 'No suitable exchange found' } ],
    [ 'KCS', Promise { 'No suitable exchange found' } ],
    [ 'VERI', Promise { 'HitBTC' } ],
    [ 'DOGE', Promise { 'Cryptopia' } ],
    [ 'KMD', Promise { 'Cryptopia' } ],
    [ 'AE', Promise { 'HitBTC' } ],
    [ 'HSR', Promise { 'Cryptopia' } ],
    [ 'ARK', Promise { 'Cryptopia' } ],
    [ 'DGB', Promise { 'Cryptopia' } ],
    [ 'GAS', Promise { 'No suitable exchange found' } ],
    [ 'DCR', Promise { 'Cryptopia' } ] ]

### TODO

- Make exchanges in config.json case-insensitive
- (Coming soon)

### Appreciate me

BTC: 13puGJNVvE3CTeF5XP6xd8ay2cNWNiSfiv