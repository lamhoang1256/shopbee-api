"use strict";
exports.__esModule = true;
exports.genrateTrackingNum = exports.randomNumber = exports.formatDateVN = void 0;
var formatDateVN = function (timestamp) {
    return new Date(timestamp).toLocaleDateString();
};
exports.formatDateVN = formatDateVN;
var randomNumber = function () { return Math.trunc(Math.random() * 10); };
exports.randomNumber = randomNumber;
var genrateTrackingNum = function (tracking) {
    if (tracking === void 0) { tracking = "GHNXXXXXXXXVN"; }
    return tracking.replace(/X/g, (0, exports.randomNumber)().toString());
};
exports.genrateTrackingNum = genrateTrackingNum;
