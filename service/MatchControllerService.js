'use strict';
var sql = require('../utils/db.js');


/**
 * Create match
 *
 * body Match  (optional)
 * returns Match
 **/
exports.createMatch = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO matches (date, team_1_id, team_2_id, hour, location) Values (?, ?, ?, ?, ?)", [body.date, body.team_1_id, body.team_2_id, body.hour, body.location], function (err, res) {
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
 * Delete match
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteMatch = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM matches WHERE id = ?", [id], function (err, res) {
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
  });  
}


/**
 * Retrieve match
 *
 * id Long 
 * returns Match
 **/
exports.retrieveMatch = function(id) {
  return new Promise(function(resolve, reject) {
   sql.query("SELECT * FROM matches WHERE id = ?", [id], function (err, res) {
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
 * Retrieve matches
 *
 * returns List
 **/
exports.retrieveMatches = function() {
  return new Promise(function(resolve, reject) {
   sql.query("SELECT * FROM matches", function (err, res) {
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
 * Update match
 *
 * body Match 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateMatch = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE matches set date = ?, team_1_id = ?, team_2_id = ?, hour = ?, location = ? WHERE id = ?", [body.date, body.team_1_id, body.team_2_id, body.hour, body.location, id], function (err, res) {
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

