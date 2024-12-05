'use strict';
var sql = require('../utils/db.js');


/**
 * Create tournament
 *
 * body Tournament  (optional)
 * returns Tournament
 **/
exports.createTournament = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO tournaments (name, begin_date, end_date) Values (?, ?, ?)", [body.name, body.begin_date, body.end_date], function (err, res) {
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
 * Delete tournament
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteTournament = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM tournaments WHERE id = ?", [id], function (err, res) {
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
 * Retrieve tournament
 *
 * id Long 
 * returns Tournament
 **/
exports.retrieveTournament = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM tournaments WHERE id = ?", [id], function (err, res) {
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
 * Retrieve tournaments
 *
 * returns List
 **/
exports.retrieveTournaments = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM tournaments", function (err, res) {
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
 * Update tournament
 *
 * body Tournament 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateTournament = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE tournaments set name = ?, begin_date = ?, end_date = ? WHERE id = ?", [body.name, body.begin_date, body.end_date, id], function (err, res) {
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

