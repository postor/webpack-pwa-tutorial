# webpack-pwa-tutorial
基于webpack只做PWA的例程

## 场景定义： todo list
一个支持离线的 todo list，感兴趣的同学可以补充下云端同步的功能。

## 步骤

### 初始化 React+webpack

安装依赖
```
npm init -y
npm i react react-dom webpack babel-loader @babel/core @babel/preset-react @babel/preset-env html-webpack-plugin -D
```

package.json 配置启动脚本
```
{
  ...
  "scripts": {
    "dev": "webpack serve --mode=development",
```

src/index.js 首页
```
import React from 'react'
import ReactDOM from 'react-dom'

let dom = document.createElement("div")
document.body.appendChild(dom)

ReactDOM.render(
  <div>Hello</div>,
  dom
)
```

webpack.config.js 配置webpack
```
const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ]
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
}
```

启动一下
```
npm run dev
```

![http://localhost:8080/](./docs/1.jpg)

# 开发 todo list