import { FormControlStatic } from "react-bootstrap";

const Marketplace = artifacts.require("./Marketplace.sol");

contract("Marketplace", (accounts) => {
  //declaring smart contract with the variable below
  let marketplace;

  before(async () => {
    marketplace = await Marketplace.deployed();
  });

  describe("deployment", async () => {
    it("deploys succesfully", async () => {
      const address = await marketplace.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await marketplace.name();
      assert.equal(name, "Brent's Blockchain Marketplac");
    });
  });
});

