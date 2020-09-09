# @react-native-anywhere/anywhere
[`@react-native-anywhere/anywhere`](https://www.npmjs.com/package/@react-native-anywhere/anywhere) is a build tool to help you expose [**browserified**](https://github.com/browserify/browserify) libraries to [**React Native**](https://reactnative.dev).

There are a lot of really amazing libraries that we don't get to use in React Native because they assume the availability of core [**Node.js**](https://nodejs.org/en/) libraries such as [`crypto`](https://stackoverflow.com/questions/29836434/requiring-unknown-module-crypto-in-react-native-environment) or [**Web3**](https://github.com/ethereum/web3.js/).

This tool can be used to compile compatible implementations of these libraries for the React Native runtime.

## 🚀 Getting Started

Using [`yarn`]():

```
yarn add @react-native-anywhere/anywhere
```

Next, append the following command to your [`postinstall`](https://docs.npmjs.com/misc/scripts) script:

```
npx @react-native-anywhere/anywhereify
```

Finally, declare an [`anywhere.config.json`](https://github.com/react-native-anywhere/anywhere/blob/main/examples/opengsn/anywhere.config.json) at the root of your project. Here, you declare the libraries and naming conventions you'd like to expose to the React Native runtime:

```json

{
  "exports": [
    { "name": "@react-native-anywhere/polyfill-base64" },
    { "name": "web3-providers-http", "alias": "Web3HttpProvider" },
    { 
      "name": "@opengsn/gsn",
      "alias": "OpenGSN",
      "exports": [
        { "name": "dist/RelayProvider", "alias": "RelayProvider" },
        { "name": "dist/GSNConfigurator", "alias": "GSNConfigurator" }
      ]
    }
  ]
}
```

Now you're all set! ✨

Whenever you reinstall your project, `npx @react-native-anywhere/anywhereify` will recompile the dependencies defined in you `anywhere.config.json` into a React native compatible format. Once this is done, they will become available via imports:

```javascript
import { Web3HttpProvider, OpenGSN } from "@react-native-anywhere/anywhere";
const { RelayProvider, GSNConfigurator } = OpenGSN;
```

You can check out some **Example Projects** [**here**](https://github.com/react-native-anywhere/anywhere/tree/main/examples).

## ✌️ License
[**MIT**](./LICENSE)
