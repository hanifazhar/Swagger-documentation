'use strict';

var utils = require('../utils/writer.js');
var Misc = require('../service/MiscService');

module.exports.deleteMahasiswa = function deleteMahasiswa (req, res, next) {
  var body = req.swagger.params['Body'].value;
  Misc.deleteMahasiswa(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMahasiswa = function getMahasiswa (req, res, next) {
  Misc.getMahasiswa()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMahasiswabyID = function getMahasiswabyID (req, res, next) {
  var id = req.swagger.params['id'].value;
  Misc.getMahasiswabyID(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storeMahasiswa = function storeMahasiswa (req, res, next) {
  var body = req.swagger.params['Body'].value;
  Misc.storeMahasiswa(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMahasiswa = function updateMahasiswa (req, res, next) {
  var body = req.swagger.params['Body'].value;
  Misc.updateMahasiswa(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
