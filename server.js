var fs = require('fs')

var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//lists all of the test accounts
console.log('\n\n\n ACCOUNTS: \n' + web3.eth.accounts) 



// ===============MAKE CONTRACT========================================

//from the voting.sol file
var code = fs.readFileSync('voting.sol').toString()



// ===============COMIPILE CONTRACT========================================

//compile voting.sol contract.
var contract =  web3.eth.compile.solidity(code)
console.log('\n\n\n CONTRACT:')
//console.log(contract.info.abiDefinition)

/*
contract will have 2 important fields
1. contract.code: 0x60606040523461000057... source code deployed to blockchain
2. contract.info.abiDefinition: Application Binary Interface (ABI) aka template of the contract
*/



// ===============DEPLOY CONTRACT========================================

// deploy contract
var VotingContract = web3.eth.contract(contract.info.abiDefinition)


// VotingContract.new deploys the contract to the blockchain
// 'data: contract.code' is 0x60606040523461000057...aka the source code
// 'from' line 7: 0xfd38ec10cb7f8be16100b033193e38962646e340
// 'gas': cost to interact with blockchain. set max amount
VotingContract.new(['Rama','Nick','Jose'],{data: contract.code, from: web3.eth.accounts[0], gas: 4700000}, function(error, contract){
    if(!error) {

        if(!contract.address) {
        console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

        } else {

            // ===============INTERACT WITH CONTRACT========================================

            // contractInstance is used to interact with the contract
            var contractInstance = VotingContract.at(contract.address)

            // huge object from voting.sol
            console.log('\n\n\n CONTRACT INSTANCE:')
            console.log(contractInstance)

            // Vote #1
            contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]})

            // Vote #2
            contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]})

            // Vote #3
            contractInstance.voteForCandidate('Nick', {from: web3.eth.accounts[0]})


            // This function returns the total votes a candidate has received so far
            console.log('\n\n\n TOTAL VOTES:')
            console.log(contractInstance.totalVotesFor.call('Rama')) //should return a number

        }

    }
})






