# Simple FlexNet (testnet) load testing tool

This set of scripts emulates concurrent  send transactions between selected number of FlexNet accounts. Basic idea is to spin up numerous processes which perform send transactions in a loop, but only if the account ballance is sufficient.

You need Linux and NodeJS to run this tool. Then install the needed NPM modules withing the working directory:
```
npm --install web3
```

## Configuration

Default configuration:
- Using 100 wallets - to change this modify `create-wallets.sh`.
- FlexNet rpc preloaded - to chainge this modify the value of `rpcNodeURL` in `agent.js`.

To create wallets simply run:
```
./create-wallets.sh
```
this creates lots of wallets and stores them in `./wallets/` directory.

## Running the load test

**At this point you should faucet some FLEX to any of addresses create by the script above!**

Now you can run the agents:
```
./run-agents.sh
```
At the beginning of execution some of the agents may report starving becuase they will have no FLEX. But after some time the FLEX will be spread bettwen wallets.
