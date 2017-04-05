pragma solidity ^0.4.0;

contract myContract {

    uint public voteA = 0;
    uint public voteB = 0;

    function totalVotes(uint[] userArray) returns (uint){
        if (userArray[0] != 123) throw;
        
        if (userArray[1] == 1){
            voteA = voteA + 1;
            return voteA;
        }
        
        
        if (userArray[1] == 2){
            voteB = voteB + 1;
            return voteB;
        }
    }    
}