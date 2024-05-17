// mock/mockServer.js

import Mock from "mockjs";
import login from './login.json'
import products from './products.json'

Mock.mock('/mock/login', {
    code: 200,
    data: login
})
Mock.mock('/mock/products', {
    code: 200,
    data: products
})
