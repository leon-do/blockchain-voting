pragma solidity ^0.4.0;

contract SimpleStorage {
    uint public storedData;

    function set(uint x) {
        storedData = x;
    }

    function get() constant returns (uint) {
        return storedData;
    }
}