'use strict';

var utils = require('../utils/writer.js');
var MatchController = require('../service/MatchControllerService');

module.exports.createMatch = function createMatch (req, res, next, body) {
  MatchController.createMatch(body)
    .then(MatchController.retrieveMatch)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMatch = function deleteMatch (req, res, next, id) {
  MatchController.deleteMatch(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveMatch = function retrieveMatch (req, res, next, id) {
  MatchController.retrieveMatch(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveMatches = function retrieveMatches (req, res, next) {
  MatchController.retrieveMatches()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMatch = function updateMatch (req, res, next, body, id) {
  MatchController.updateMatch(body, id)
    .then(MatchController.retrieveMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
