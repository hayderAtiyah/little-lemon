module.exports = {
  babel: {
    plugins: [
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-proposal-optional-chaining",
    ],
  },
  webpack: {
    configure: (cfg) => {
      const oneOf = cfg.module.rules.find((r) => r.oneOf).oneOf;
      oneOf.forEach((rule) => {
        if (rule.loader?.includes("babel-loader")) {
          // also transpile @mui
          rule.exclude = /node_modules[\\/](!@mui)[\\/]/;
        }
      });
      return cfg;
    },
  },
};
