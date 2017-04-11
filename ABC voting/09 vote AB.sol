pragma solidity ^0.4.0;

// user 123 votes A [123,1]

contract myContract {

    uint public totalVotesA = 0;
    uint public totalVotesB = 0;

    function incrementer(uint[] userArray){
        if (userArray[0] != 123) throw;
        
        if (userArray[1] == 1){
            totalVotesA = totalVotesA + 1;
        }
        
        
        if (userArray[1] == 2){
            totalVotesB = totalVotesB + 1;
        }
    }    
}