module.exports = {
  mount: {
    source: { url: "/" },
  },
  plugins: ["@snowpack/plugin-sass", "@snowpack/plugin-postcss"],
  /*
  optimize: {
    entrypoints: ["source/index.html"],
    sourcemap: false,
    splitting: false,
    treeshake: true,
    minify: false,
    target: "es2017",
  },
  */
  devOptions: {
    port: 3000,
  },
  buildOptions: {
    out: "release",
    metaUrlPath: "libraries",
  },
};
