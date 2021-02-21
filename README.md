# 简 UI  - 一个Vue UI 组件

[![Build Status](https://travis-ci.com/Straight-GZ/jian-ui.svg?branch=master)](https://travis-ci.com/Straight-GZ/jian-ui)

## 介绍
这是我在学习Vue的过程中做的一个UI框架，希望对你有帮助。

## 开始使用
1. CSS样式

    使用本框架前，请在CSS中开启 border-box
    ```
    *,*::before,*::after{box-sizing: border-box}
    ```
   IE8及以上支持此样式。
   
   你还需要设置默认颜色等变量（后续会改为`scss`变量）。
   ```
   html { 
         --button-height: 32px; --font-size: 14px; --button-bg: white;
         --button-active-bg: #eee; --border-radius: 4px; --color: #333;
        --border-color: #999; --border-color-hover: #666;
   }
    ```
   IE15及以上支持此样式。

2. 安装 jian-ui
    ```
   npm i --save jian-ui
    ``` 
3. 引入jian-ui
    ```
   import { Button } from "jian-ui";
   import "../node_modules/jian-ui/dist/index.css";
   export default {
     name: "App",
     components: {
       'g-button':Button,
     },
   };
   ```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

