const { assert } = require("chai");

const Message = artifacts.require("./Message.sol");

require("chai").use(require("chai-as-promised")).should();

contract("Message Contract", async (accounts) => {
  let message;

  before(async () => {
    message = await Message.deployed();
  });

  describe("Deployment", async () => {
    it("contract has an address", async () => {
      const address = await message.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });
  });
});
