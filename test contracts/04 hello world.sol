//https://www.youtube.com/watch?v=8jI1TuEaTro 

pragma solidity ^0.4.0;

contract helloWorld{

    uint public balance;

    //function is a constructor
    //runs once
    function hello(){
        balance = 1000;
    }

}