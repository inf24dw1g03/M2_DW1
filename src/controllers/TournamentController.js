'use strict';

var utils = require('../utils/writer.js');
var TournamentController = require('../service/TournamentControllerService');

module.exports.createTournament = function createTournament (req, res, next, body) {
  TournamentController.createTournament(body)
    .then(TournamentController.retrieveTournament)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTournament = function deleteTournament (req, res, next, id) {
  TournamentController.deleteTournament(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTournament = function retrieveTournament (req, res, next, id) {
  TournamentController.retrieveTournament(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTournaments = function retrieveTournaments (req, res, next) {
  TournamentController.retrieveTournaments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTournament = function updateTournament (req, res, next, body, id) {
  TournamentController.updateTournament(body, id)
    .then(TournamentController.retrieveTournament)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
