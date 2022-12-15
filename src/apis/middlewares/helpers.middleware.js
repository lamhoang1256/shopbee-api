"use strict";
exports.__esModule = true;
var express_validator_1 = require("express-validator");
var status_1 = require("../constants/status");
var response_1 = require("../utils/response");
var validate_1 = require("../utils/validate");
var idRule = function () {
    var id = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        id[_i] = arguments[_i];
    }
    return id.map(function (item) {
        return (0, express_validator_1.check)(item).isMongoId().withMessage("".concat(item, " kh\u00F4ng \u0111\u00FAng \u0111\u1ECBnh d\u1EA1ng"));
    });
};
var listIdRule = function (list_id) {
    return (0, express_validator_1.body)(list_id)
        .custom(function (value) { return value.findIndex(function (item) { return !(0, validate_1.isMongoId)(item); }); })
        .withMessage("".concat(list_id, " kh\u00F4ng \u0111\u00FAng \u0111\u1ECBnh d\u1EA1ng"));
};
var idValidator = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty())
        return next();
    var error = errors.array().reduce(function (result, item, index) {
        result[item.param] = item.msg;
        return result;
    }, {});
    var response = {
        status: status_1.STATUS.BAD_REQUEST,
        error: error,
        name: "",
        message: Object.values(error)[0] || "Lỗi"
    };
    return (0, response_1.responseError)(response, res);
};
var entityValidator = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty())
        return next();
    var error = errors
        .array({ onlyFirstError: true })
        .reduce(function (result, item, index) {
        result[item.param] = item.msg;
        return result;
    }, {});
    var response = {
        status: 422,
        error: error,
        name: "",
        message: Object.values(error)[0] || "Lỗi"
    };
    return (0, response_1.responseError)(response, res);
};
var helpersMiddleware = {
    idRule: idRule,
    idValidator: idValidator,
    entityValidator: entityValidator,
    listIdRule: listIdRule
};
exports["default"] = helpersMiddleware;
