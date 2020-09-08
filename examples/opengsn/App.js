import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Buffer } from "buffer";
import { ethers } from "ethers";
import { Web3HttpProvider } from "@react-native-anywhere/anywhere";

import Counter from "./build/contracts/Counter";
//import { RelayProvider, resolveConfigurationGSN } from "@react-native-anywhere/gsn";

export default function App() {
  useEffect(
    () => {
      (async () => {
        // XXX: You need to get these values from starting `ganache-cli` and then running `yarn-gsn`!
        const forwarderAddress = "0x933351C811dAa8D4Fb0FEaE18b8c6702Dbd7a77a";
        const paymasterAddress = "0xc5031D4B6c6630Af6099Fa3ec332Bd825aeD42e9";

        const httpProvider = new Web3HttpProvider("http://localhost:8545");
        const deploymentProvider = new ethers.providers.Web3Provider(httpProvider);
        const factory = new ethers.ContractFactory(Counter.abi, Counter.bytecode, deploymentProvider.getSigner());

        const deployment = await factory.deploy(forwarderAddress);
        await deployment.deployed();

      //  const config = await resolveConfigurationGSN(
      //    web3provider,
      //    {
      //      verbose: true,
      //      forwarderAddress,
      //      paymasterAddress,
      //    },
      //  );

      //  const gsnProvider = new RelayProvider(web3provider, config);

      //  const account = new ethers.Wallet(Buffer.from("1".repeat(64), "hex"));
      //  const { address: from } = account;
      //  gsnProvider.addAccount({
      //    address: from,
      //    privateKey: Buffer.from(account.privateKey.replace("0x", ""), "hex"),
      //  });

      //  const etherProvider = new ethers.providers.Web3Provider(gsnProvider);
      //  const counter = deployment.connect(etherProvider.getSigner(from));
      //  const countBefore = await counter.counter();
      //  await counter.increment();
      //  const countAfter = await counter.counter();

      //  console.warn('delta is', countBefore, countAfter);
      })();
    },
    [],
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
    </View>
  );
}
