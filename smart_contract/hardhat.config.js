// https://eth-ropsten.alchemyapi.io/v2/hDLTGqEX5ZYVurYJ7yvDj3pJ2Dsox50x

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/hDLTGqEX5ZYVurYJ7yvDj3pJ2Dsox50x',
      accounts: [ '731edafc7a72f145f8abecc4b891d960c2b48e7eaf53dd8d2a22f116d74d0e43' ]
    }
  }
}