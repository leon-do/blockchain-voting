// The very first migration 1_initial_migration.js deploys a contract named Migrations to the blockchain and is used to store the latest contract you have deployed

var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
