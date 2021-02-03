require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth machine upgrade hockey local fresh genuine'; 
let testAccounts = [
"0x5103a925e8c9cd81fb8000a3ef050239f302537551fe1ec9781530134ecc2f17",
"0xf95f649fbb4a05294c50b881580d9e7fbcc50efdd82e9d9dbb0f6a13b9b28a08",
"0xe0617d1eb473efed7fdee2fdb96689cb76803ac50dbd56fc24d21beec1beacc7",
"0x00307902cc1df04b97b54d7c540013dc4772aab176702fa101ff6951b9b9cef3",
"0x7574cc014a7a864fe8a34299835297e0a758e9889eab837c182ad212ca458ff3",
"0x5f633c61748b6a615890a7f2bc2fe7fdd2998f3307168b82ad506960a347b78f",
"0x74d6e1d21d42fb2e48387d67a7e33fe731591d80c3098cebd75229555d9ac667",
"0xf2646874f01c818f4575bc34bd3bf9c34f67ad564cf104c5c82d2097bdf93bfd",
"0x55e7af98246d90242901a7f8865c7212887e67efd1f41b71ecede7bce679c771",
"0xc11e2fc78d3481fb79a3db7750669e646bc2fedec6ef24dc575a15547f3c7648"
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
            version: '^0.5.11'
        }
    }
};
