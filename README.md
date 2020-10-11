# react-redux-practice

1) With dependncies, change your webpack.config.js
2) Add rules
3) For style-bundler :
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }

#Boilerplate

node modules
npm init -y

webpack
npm install --save-dev webpack
npm install --save lodash

webpack devserver
npm install webpack-dev-server --save-dev

react
npm install --save react react-dom

react router
npm install --save react-router

react router dom
npm install react-router-dom

babel
npm install --save-dev babel-preset-env

babel for ES2015
npm install --save-dev babel-preset-es2015

babel for jsx
npm install --save-dev babel-preset-react

redux
npm install --save redux

npm install --save react-redux

npm install --save-dev redux-devtools


Loaders for webpack
Babel loader

npm install --save-dev babel-loader babel-core babel-preset-env webpack

For css

npm install style-loader --save-dev

Flexbox-grid react

npm install --save react-flexbox-grid

styled components

npm install --save styled-components

For files

npm install --save-dev file-loader

HotModule replacement with css

npm install --save-dev style-loader css-loader


Plugins
npm install html-webpack-plugin --save-dev

npm install --save react-hot-loader@next

---------------------------------------------------------------------------------------------------
Jest and Enzyme
https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675

If not using CRA install Jest:

npm install --save-dev jest babel-jest

Install Enzyme:

npm install --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json

Update your package.json :

"jest": {
  "snapshotSerializers": ["enzyme-to-json/serializer"]
}

enzyme-to-json provides a better component format for snapshot comparison than Enzyme’s internal component representation. snapshotSerializers allows you to minimise code duplication when working with snapshots. Without the serializer each time a component is created in a test it must have the enzyme-to-json method .toJson() used individually before it can be passed to Jest’s snapshot matcher, with the serializer you never use it individually.

