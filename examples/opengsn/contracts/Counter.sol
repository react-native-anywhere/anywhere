pragma solidity ^0.6.2;

import "@opengsn/gsn/contracts/BaseRelayRecipient.sol";

contract Counter is BaseRelayRecipient {

  uint public counter;
  address public lastCaller;

  constructor(address _forwarder) public {
    trustedForwarder = _forwarder;
  }

  function versionRecipient() external override view returns (string memory) {
    return "1.0.1";
  }

  function increment() public {
    counter++;
    lastCaller = _msgSender();
  }
} 
