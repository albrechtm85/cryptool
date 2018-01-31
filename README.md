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

    [ [ 'BTG', 'HitBTC' ],
    [ 'PPT', 'HitBTC' ],
    [ 'XRB', 'Cryptopia' ],
    [ 'USDT', 'BitTrex' ],
    [ 'OMG', 'Cryptopia' ],
    [ 'STEEM', 'HitBTC' ],
    [ 'ZEC', 'Cryptopia' ],
    [ 'STRAT', 'Cryptopia' ],
    [ 'BNB', 'No suitable exchange found' ],
    [ 'BCN', 'Cryptopia' ],
    [ 'SC', 'Cryptopia' ],
    [ 'BTS', 'BitTrex' ],
    [ 'XVG', 'Cryptopia' ],
    [ 'ZRX', 'HitBTC' ],
    [ 'SNT', 'HitBTC' ],
    [ 'WTC', 'HitBTC' ],
    [ 'MKR', 'No suitable exchange found' ],
    [ 'ARDR', 'HitBTC' ],
    [ 'WAVES', 'Cryptopia' ],
    [ 'REP', 'Cryptopia' ],
    [ 'VERI', 'HitBTC' ],
    [ 'KCS', 'No suitable exchange found' ],
    [ 'RHOC', 'No suitable exchange found' ],
    [ 'DOGE', 'Cryptopia' ],
    [ 'DCR', 'Cryptopia' ],
    [ 'AE', 'HitBTC' ],
    [ 'KMD', 'Cryptopia' ],
    [ 'HSR', 'Cryptopia' ],
    [ 'GAS', 'No suitable exchange found' ],
    [ 'DRGN', 'No suitable exchange found' ],
    [ 'ARK', 'Cryptopia' ] ]

### TODO

- Add prefered tradingpair
- (Coming soon)

### Appreciate me

BTC: 13puGJNVvE3CTeF5XP6xd8ay2cNWNiSfiv