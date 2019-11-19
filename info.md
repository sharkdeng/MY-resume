1) npm init -y
2) 
npm i -D webpack
npm i -D webpack-cli
npm i -D webpack-dev-server

npm i -D @babel/core
npm i -D @babel/preset-env
npm i -D @babel/preset-react
npm i -D babel-loader

npm i -D html-webpack-plugin

npm i -D react
npm i -D react-dom

npm i -D react-router
npm i -D react-router-dom

npm i -D css-loader
npm i -D style-loader

npm i -D react-bootstrap

npm i -D file-loader url-loader

npm i -D mdbreact
npm i -D mdbootstrap

npm install gh-pages


3) modify package.json, add
"build": "webpack --mode production",
"dev": "webpack --mode development",
"start": "webpack-dev-server --open --hot --mode production"

4) add index.js and index.html in src folder

5) add .babelrc and webpack.config.js

6) npm run build
if there are index.html and main.js, them build is successful
7) npm start


--- react-router ---


