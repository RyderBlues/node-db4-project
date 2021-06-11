const express = require('express')
const Recipe = require('./model')
const router = express.Router()
const { checkRecipeId } = require('./middleware')

router.get('/:recipe_id', checkRecipeId, (req, res, next) => {
   res.status(200).json(req.recipe);
})

module.exports = router