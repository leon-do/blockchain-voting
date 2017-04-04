$ cd
$ mkdir
$ truffle init (makes files)
put .sol file in contracts folder
$ truffle compile (makes json file with binary inside of ./build/contracts folder)
go to ./migrations/2_deploy_contracts.js and edit   deployer.deploy(CONTRACT_NAME);
$ testrpc
$ truffle migrate