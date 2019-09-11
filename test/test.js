const assert = require('assert');
const { COIN_COUNT, QUARTER, DIME, NICKEL, PENNY, fewestCoins } = require('../index');

describe('FewestCoins', function() {

  it('tests the fewestCoins function', function() {
    const testCases = [{
      dollarAmt: 10,
      expectedCoinCount: { ...COIN_COUNT, [DIME.name]: 1, },
    }, {
      dollarAmt: 100,
      expectedCoinCount: { ...COIN_COUNT, [QUARTER.name]: 4, },
    }, {
      dollarAmt: 112,
      expectedCoinCount: {
        ...COIN_COUNT,
        [QUARTER.name]: 4,
        [DIME.name]: 1,
        [PENNY.name]: 2,
      },
    }, {
      dollarAmt: 117,
      expectedCoinCount: {
        ...COIN_COUNT,
        [QUARTER.name]: 4,
        [DIME.name]: 1,
        [NICKEL.name]: 1,
        [PENNY.name]: 2,
      },
    }, {
      dollarAmt: 'foo bar',
      expectedCoinCount: {
        ...COIN_COUNT,
      },
    }, {
      dollarAmt: ['foo bar'],
      expectedCoinCount: {
        ...COIN_COUNT,
      },
    }, {
      dollarAmt: { foo: 'bar' },
      expectedCoinCount: {
        ...COIN_COUNT,
      },
    }, {
      dollarAmt: () => { },
      expectedCoinCount: {
        ...COIN_COUNT,
      },
    }, {
      dollarAmt: null,
      expectedCoinCount: {
        ...COIN_COUNT,
      },
    }, {
      dollarAmt: undefined,
      expectedCoinCount: {
        ...COIN_COUNT,
      },
    }];

    for (const testCase of testCases) {
      const actualCoinCount = fewestCoins(testCase.dollarAmt);
      assert.deepStrictEqual(actualCoinCount, testCase.expectedCoinCount, 'Coin Counts don\'t match');
    }
  });
});
