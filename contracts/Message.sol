// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22;

contract Message {
    string public message;

    function setMessage(string memory _message) public {
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
