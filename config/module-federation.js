const deps = require("../package.json").dependencies;
const { ModuleFederationPlugin } = require("webpack").container;
const {
  NodeFederationPlugin,
  StreamingTargetPlugin,
} = require("@module-federation/node");

module.exports = {
  client: new ModuleFederationPlugin({
    name: "remote1",
    filename: "remoteEntry.js",
    remotes: {},
    exposes: {
      "./Content": "./src/components/Content",
    },
    shared: {
      ...deps,
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
    },
  }),
  server: [
    new NodeFederationPlugin({
      name: "remote1",
      filename: "remoteEntry.js",
      library: { type: "commonjs-module" },
      remotes: {},
      exposes: {
        "./Content": "./src/components/Content",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new StreamingTargetPlugin({
      name: "remote1",
      library: { type: "commonjs-module" },
      remotes: {},
    }),
  ],
};
