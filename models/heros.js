var express = require('express');
//var JSONData = require('./heros.json');
//var fs = require("fs");
var mysql = require('mysql2');
    
let Heros= {}


Heros.getAll = function()
{
	return new Promise(function(resolve,reject){
//JSONData.push(newHeroData);
    //fs.writeFile('./heros.json', JSONData, function(err) {
      //  if(err){
        //    console.lgo('ERR.')
        //} 

		 // create the connection to database
  		const connection = mysql.createConnection({
  		host: 'localhost',
  		user: 'root',
  		database: 'superheros',
  		password: 'ccs#1234'
  		});  


	let query ='select * from hero where is_valid = 1';
	connection.query(query,function(err,results,fields){
	if (err){
		console.log(err);
		console.log('ERR :: fetching data from database.');
		reject();
	}
	else{
		
		resolve(results);
	}

	});
}); 

}
    
Heros.saveNew = function(newHeroData){
	return new Promise(function(resolve,reject){
		const connection = mysql.createConnection({
  		host: 'localhost',
  		user: 'root',
  		database: 'superheros',
  		password: 'ccs#1234'
  		});  

  		let query = `insert into hero(superhero,publisher,alter_ego,first_appearance,characters,is_valid,update_time) values('${newHeroData.superhero}','${newHeroData.publisher}','${newHeroData.alter_ego}','${newHeroData.first_appearance}','${newHeroData.characters}',1,'${new Date()}')`;
  		connection.query(query,function(err,results,fields){
	if (err){
		console.log(err);
		console.log('ERR :: fetching data from database.');
		reject();
	}
	else{
		resolve();
	}

	});

});
}

Heros.updateHero = function(newupdate){
	return new Promise(function(resolve,reject){
		const connection = mysql.createConnection({
  		host: 'localhost',
  		user: 'root',
  		database: 'superheros',
  		password: 'ccs#1234'
  		});  

  		let query = `update hero set superhero='${newupdate.superhero}',publisher='${newupdate.publisher}',alter_ego='${newupdate.alter_ego}',first_appearance='${newupdate.first_appearance}',characters='${newupdate.characters}',is_valid=1,update_time='${new Date()}' where id =${newupdate.id}`;
  		console.log(query);
  		connection.query(query,function(err,results,fields){
	if (err){
		console.log(err);
		console.log('ERR :: fetching data from database.');
		reject();
	}
	else{
		resolve(results);
	}

	});

});
}





	Heros.delete = function(value){
	return new Promise(function(resolve,reject){
		const connection = mysql.createConnection({
  		host: 'localhost',
  		user: 'root',
  		database: 'superheros',
  		password: 'ccs#1234'
  		});  

  		let query = `update hero set is_valid=0 where id =${value.id}`;
  		connection.query(query,function(err,results,fields){
	if (err){
		console.log(err);
		console.log('ERR :: fetching data from database.');
		reject();
	}
	else{
		resolve(results);
	}

	});

});
}
	Heros.getHero = function(val){
		return new Promise(function(resolve,reject){
		const connection = mysql.createConnection({
  		host: 'localhost',
  		user: 'root',
  		database: 'superheros',
  		password: 'ccs#1234'
  		}); 

let query =`select * from hero where id = '${val.id}'`;
connection.query(query,function(err,results,fields){
	if (err){
		console.log(err);
		console.log('ERR :: fetching data from database.');
		reject();
	}
	else{
		
		resolve(results);
	}

	});
});
	}

module.exports = Heros;