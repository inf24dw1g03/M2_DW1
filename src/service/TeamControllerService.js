'use strict';
var sql = require('../utils/db.js');


/**
 * Create team
 *
 * body Team  (optional)
 * returns Team
 **/
exports.createTeam = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO teams (name, fundation_year) Values (?, ?)", [body.name, body.fundation_year], function (err, res) {
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
 * Delete team
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteTeam = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM teams WHERE id = ?", [id], function (err, res) {
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
 * Retrieve team
 *
 * id Long 
 * returns Team
 **/
exports.retrieveTeam = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM teams WHERE id = ?", [id], function (err, res) {
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
 * Retrieve teams
 *
 * returns List
 **/
exports.retrieveTeams = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM teams", function (err, res) {
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
 * Update team
 *
 * body Team 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateTeam = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE teams set name = ?, fundation_year = ? WHERE id = ?", [body.name, body.fundation_year,id], function (err, res) {
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

