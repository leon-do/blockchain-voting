pragma solidity ^0.4.0;

contract myContract {

    address public mySender;

    function myFunction(){
        // msg.sender = 0xca35b7d915458ef540ade6068dfe2f44e8fa733c
        mySender = msg.sender;
    }

}