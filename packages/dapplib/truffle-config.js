require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski street rescue situate clutch good narrow flat gesture'; 
let testAccounts = [
"0x8096b679e15a1b9e9ff53ce43ef4e4af37cdfb439b10b7eee92bf1f161cb24b3",
"0xb37b2ff0bfeee694ffa8a86fddae68f391d762ee81cb2e4621bc918d2d09ab8d",
"0x65dc34f775bf4e4f340ca0b119343d534664fc1f2176811af2c9ed0f009cf491",
"0x350a484c11bf9d8e80352db3e605c05cce1aa9fcd6c5681173aa619827e24898",
"0x4208c1d1d5801fbddb9582cbe612f9da85ddc6651e43dea69cad615a2cb9d663",
"0x78f5a5cb5757584d2ba5ba47cb0d0b8efd5dea28151cbf5dc83abbcc0b57f290",
"0xf965fb82c060eae270394a5f3601ede71d3d8841faac41bdc3c8460cf127a152",
"0x4c27ec1d700482a8680f7d9ee40abc9315df961c50251a96fdd6a407795fcdcf",
"0xb65270dc6e0eba1d26402e3b06c23f13c4c67277f1bb022a10890fd5afb20054",
"0xc0638de181c5521048470700c873b05ab5d2cf1d0bfff57ffadbaa87e8136cbe"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

