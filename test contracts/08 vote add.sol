pragma solidity ^0.4.0;

contract myContract {

    int public totalVotes = 0;

    function incrementer(uint userId){
        if (userId != 123 ) throw;
        totalVotes = totalVotes + 1;
    }

}