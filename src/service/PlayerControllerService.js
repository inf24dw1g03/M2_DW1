'use strict';
var sql = require('../utils/db.js');


/**
 * Create player
 *
 * body Player  (optional)
 * returns Player
 **/

exports.createPlayer = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO players (name, team_id, age) Values (?, ?, ?)", [body.name, body.team_id, body.age], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    }); 
  });
}

/**
 * Delete player
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deletePlayer = function(id) {
  sql.query("DELETE FROM players WHERE id = ?", [id], function (err, res) {
    if (err || !res.affectedRows) {
      console.log(err);
      console.log(res);
      reject();
    }
    else {
      console.log(res);
      resolve({"deleted":id});
    }
  });
}


/**
 * Retrieve player
 *
 * id Long 
 * returns Player
 **/
exports.retrievePlayer = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM players WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log.apply(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
     });
  });
}


/**
 * Retrieve players
 *
 * returns List
 **/
exports.retrievePlayers = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM players", function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res);
      }
     })
  });
}


/**
 * Update player
 *
 * body Player 
 * id Long 
 * no response value expected for this operation
 **/
exports.updatePlayer = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE players set name = ?, team_id = ?, age = ? WHERE id = ?", [body.name, body.team_id, body.age, id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(id);
      }
    });
  });
}

