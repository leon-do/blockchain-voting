/*
    https://www.youtube.com/watch?v=gMNPN2ofAvM
    user inputs an argument into myFunction which will change myInteger
    http://i.imgur.com/gbSEtNI.png
*/


pragma solidity ^0.4.0;

contract myContract {

    uint public myInteger;

    function myFunction(uint myArgument){
        myInteger = myArgument;
    }

}