const express = require('express')
const RecipeRouter = require('./router')

const server = express()

server.use(express.json())
server.use('/api/recipes', RecipeRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });
  
  module.exports = server;