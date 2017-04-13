pragma solidity ^0.4.0;

contract myContract {

    int public voteA = -1;
    int public voteB = -1;

    function totalVotes(uint[] userArray) returns (int){
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