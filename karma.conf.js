// Karma configuration

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractPlugin = new ExtractTextPlugin({
  filename: "main.css"
});

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "src/test",

    frameworks: ["jasmine"],

    plugins: ["karma-jasmine", "karma-webpack", "karma-chrome-launcher"],
    files: [
      { pattern: "./**/*.spec.js", watched: false }
      // each file acts as entry point for the webpack configuration
    ],
    colors: true,

    preprocessors: { "./**/*.spec.js": ["webpack"] },

    webpack: {
      resolve: {
        extensions: [".ts", ".js"]
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: "ts-loader",
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.scss$/,
            use: extractPlugin.extract({
              use: ["css-loader", "sass-loader"]
            })
          }
        ]
      }
    },
    webpackServer: { noInfo: true },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],

    // web server port
    port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    browsers: ["ChromeHeadless"],

    customLaunchers: {
      ChromeTravisCi: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"]
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
