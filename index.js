// Construct a program that will make change for a given dollar
// amount in cents using the fewest number of coins. 

// coin definitions
const COIN = { name: '', amount: 0 }

// coin types
const QUARTER = { ...COIN, name: 'quarter', amount: 25 };
const DIME = { ...COIN, name: 'dime', amount: 10 };
const NICKEL = { ...COIN, name: 'nickel', amount: 5 };
const PENNY = { ...COIN, name: 'penny', amount: 1 };

const COIN_COUNT = {
  [QUARTER.name]: 0,
  [DIME.name]: 0,
  [NICKEL.name]: 0,
  [PENNY.name]: 0,
}

/**
 *  fewestCoins will take a dollar amount and return the
 *  smallest number of coins needed for that amount
 *
 * @param {Number} dollarAmt - the amount (in cents) we are estimating
 * @returns {Object} an object (see COIN_COUNT object for schema)
 */
function fewestCoins(dollarAmt = 0) {
    const coinCount = { ...COIN_COUNT };

    // todo return better default
    if (typeof dollarAmt !== 'number') return coinCount;

    // iterate over available coins
    const availableCoins = [QUARTER, DIME, NICKEL, PENNY];

    for (const coin of availableCoins) {
      const numCoins = Math.floor(dollarAmt / coin.amount);

      if (numCoins > 0) {
        dollarAmt -= numCoins * coin.amount;
        coinCount[coin.name] = numCoins;
      }
    }

    return coinCount;
}

module.exports = {
  QUARTER,
  DIME,
  NICKEL,
  PENNY,
  COIN_COUNT,
  fewestCoins,
}
