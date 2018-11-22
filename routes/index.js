var express = require('express');
var router = express.Router();
var Heros =require('../models/heros')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SuperHeroes' });
});

router.get('/saveData', function(req, res, next) {
 //console.log(req.query);
 //res.send(req.query);
 Heros.saveNew(req.query) 
 .then(function(){
 res.redirect('/getAllHeros');
})
 .catch(console.log('ERR : in revolving the promise'))
});


router.get('/getAllHeros', function(req, res, next) {

	Heros.getAll()
	.then(function(retVal){
		res.render('heros',{data : retVal})
	})
	.catch(console.log('ERR :: in revolving the promise'))
});


 
router.get('/view',function(req,res,next){
	Heros.getHero(req.query)
	.then(function(retVal){
		res.render('view',{data : retVal})
	})
	.catch(console.log('ERR :: in revolving the promise'))
});



router.get('/deleteHero', function(req, res, next) {
  Heros.delete(req.query) 
 .then(function(){
 res.redirect('/getAllHeros');
})
 .catch(console.log('ERR : in revolving the promise'))
});


router.get('/update', function(req, res, next) {
  Heros.updateHero(req.query) 
 .then(function(retVal){
		res.render('update',{data : retVal})
})
 .catch(console.log('ERR : in revolving the promise'))
});

module.exports = router;
