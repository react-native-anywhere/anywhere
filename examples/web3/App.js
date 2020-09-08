import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Web3 } from "@react-native-anywhere/anywhere";

export default function App() {
  useEffect(
    () => {
      (async () => {
        const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/<your-api-key>"));
        const latestBlock = await web3.eth.getBlock("latest");
        console.warn({ latestBlock });
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
