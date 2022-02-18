var Web3 = require('web3');
var solc = require('solc');
var fs = require('fs');

// connect to the Ganache node
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')); 

var sourceCode = fs.readFileSync('C://projects//blockchain//ethereum//blockchain_examples//ethereum_hello_world//Hello.sol', 'utf-8').toString();
var compilerInput = {
  language: 'Solidity',
  sources: {
    contract: {
      content: sourceCode
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
}
// compile and get output JSON
var compiled = solc.compile(JSON.stringify(compilerInput));
var compilerOutput = JSON.parse(compiled);
//console.log(compilerOutput);

// extract ABI and EVM from output
var abi = compilerOutput.contracts.contract.EthereumHelloWorldExample.abi;
var bytecode = compilerOutput.contracts.contract.EthereumHelloWorldExample.evm.bytecode.object;
// prepare Contract wrapper and "deploy" transaction, estimate cost for deployment
var helloWorldContract = new web3.eth.Contract(abi);
var helloWorldDeployTx = helloWorldContract.deploy({data: bytecode});

helloWorldDeployTx.send({from: '0x28a9cCf41D12b7AFef074B6E29A7B1Cd518B7E65', gas: 1000000})
.on('error', function(error){
    console.log("Error: " + error);
})
.on('transactionHash', function(transactionHash){
    console.log("Deployment txn: " + transactionHash)
})
.on('receipt', function(receipt){
   console.log("New contract address: " + receipt.contractAddress)
});