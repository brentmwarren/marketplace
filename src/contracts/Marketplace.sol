pragma solidity^0.5.0;

contract Marketplace {
// contract will be responsible for buying and selling everything on the blockchain.
//write and read from the blockchain
//all-in-one back end

//state variable. its special because the value of it is actually stored on the blockchain
    string public name;
//constructor is a funtion in solidity that gets run only once
constructor() public {
    name = "Brent's Blockchain Marketplace";
}

}