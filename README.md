How to interact with local ganache ethereum node
----------------------------------------


Prerequisite NPM packages:  
* `solc@^0.8.6`
* `web3@^1.4.0`

# Setup
To start ethereum node using ganache-cli
* install Ganache-cli
* run command 'ganache-cli' on terminal
* it will create 10 accounts and corresponding private keys and a wallet like below
$ ganache-cli
Ganache CLI v6.12.2 (ganache-core: 2.13.2)

Available Accounts
==================
(0) 0x28a9cCf41D12b7AFef074B6E29A7B1Cd518B7E65 (100 ETH)
(1) 0x971F0533Ae93A7933d6C203820371EF08002841d (100 ETH)
(2) 0x24d8afCcB65EaCc11D31E5EC44A37f702f697feF (100 ETH)
(3) 0x38104903b716709a31B4D5257836526Fb557654b (100 ETH)
(4) 0x80E6C0681E852B8599229CF752c735B3A9F2741d (100 ETH)
(5) 0x5a969e92AF999150862A9FdfD73B3e1663f8f12b (100 ETH)
(6) 0x8Dc101d2C1e46f46EF13a33ADE76409EacFa8abe (100 ETH)
(7) 0xF1EBc1bcA17131d1d01189b2f02d62aA8ad00725 (100 ETH)
(8) 0xe4f6d3957b58Ae559F5061c796a1aC5a2b0A1ce2 (100 ETH)
(9) 0x72dc1FBF227bdE589ef9b648e817579783461340 (100 ETH)

Private Keys
==================
(0) 0x918fdb573e8bf53119d83f29b290f00d4c500719950703be4307fdccda1a8fec
(1) 0xe7904a32a727066008c001bd7fbb314bb781c66294c64d172b8f1e1b8cfc462c
(2) 0x41a3c720072a33071c24c066947793f3fbd8ffd56f982476bf6b7d83f6ea79e8
(3) 0xa2bc554b3b52140c60494079d27a51f37297a1e1d817d2630cd6c2ca85278ac7
(4) 0x353a5f62df81da56d89330328abdfa6c4dda44a89d62318b2666c989b38a48a4
(5) 0x5db0d3d216fb64923f7745f7b717d7099d6eb005e7fc8e418233250c45eee8d0
(6) 0x0aa7e3930871151b218157b51e43ea6a46ad5005165cbaa481bc7b707f2340ec
(7) 0x4c8bddc2da182550d56bf23cd8dddb26e65f502171e68abae01c29d1bc10d3f3
(8) 0x825b9c1f7ec9e8d1e9a2b555516186fd322de4280ded4135c1f0df6f212bb3f2
(9) 0xd9262c7408238ed4b0b805b5a375d13528d2929f96dff309cfb73145a890a368

HD Wallet
==================
Mnemonic:      "dolphin fiction document sunny place link black innocent pencil soda orcccc unuxxxx"
Base HD Path:  m/44'/60'/0'/0/{account_index}

# Usage
To deploy a new contract instance  
* Replace the account address placeholder in `deploy.js`.
* `node deploy.js`

To interact with the contract instance  
* Replace the account address placeholder(used in deploy.js) in `interact.js`.
* Replace the contract address taken from output of (node deploy.js) in 'interact.js' at line no 32.
* `node interact.js`