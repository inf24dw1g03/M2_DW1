'use strict';

var utils = require('../utils/writer.js');
var PlayerController = require('../service/PlayerControllerService');

module.exports.createPlayer = function createPlayer (req, res, next, body) {
  PlayerController.createPlayer(body)
    .then(PlayerController.retrievePlayer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePlayer = function deletePlayer (req, res, next, id) {
  PlayerController.deletePlayer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievePlayer = function retrievePlayer (req, res, next, id) {
  PlayerController.retrievePlayer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievePlayers = function retrievePlayers (req, res, next) {
  PlayerController.retrievePlayers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePlayer = function updatePlayer (req, res, next, body, id) {
  PlayerController.updatePlayer(body, id)
    .then(PlayerController.retrievePlayer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
