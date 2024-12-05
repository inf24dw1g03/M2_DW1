'use strict';

var utils = require('../utils/writer.js');
var TeamController = require('../service/TeamControllerService');

module.exports.createTeam = function createTeam (req, res, next, body) {
  TeamController.createTeam(body)
    .then(TeamController.retrieveTeam)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTeam = function deleteTeam (req, res, next, id) {
  TeamController.deleteTeam(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTeam = function retrieveTeam (req, res, next, id) {
  TeamController.retrieveTeam(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTeams = function retrieveTeams (req, res, next) {
  TeamController.retrieveTeams()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTeam = function updateTeam (req, res, next, body, id) {
  TeamController.updateTeam(body, id)
    .then(TeamController.retrieveTeam)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
