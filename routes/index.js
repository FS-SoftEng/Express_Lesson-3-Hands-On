

var express = require('express');
var router = express.Router();

var storyLine = require('../models/storyLine')
  
  // GET 

router.get('/beginning', function(req, res, next) {

  let storyScene = storyLine.storyPieces.find(part => {
    
    return part.storyPart === 'beginning'; 
  
  })
  
  res.render('beginning', { storyScene }); 

});

// GET

router.get('/middle', function(req, res, next) {

  let storyScene = storyLine.storyPieces.find(part => {
    
    return part.storyPart === 'middle'; 
  
  })
  
  res.render('middle', { storyScene }); 

});

// GET

router.get('/end', function(req, res, next) {

  let storyScene = storyLine.storyPieces.find(part => {
    
    return part.storyPart === 'end'; 
  
  })
  
  res.render('end', { storyScene }); 

});

module.exports = router;
