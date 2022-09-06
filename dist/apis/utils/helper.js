"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genrateTrackingNum = exports.randomNumber = exports.formatDateVN = void 0;
const formatDateVN = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
};
exports.formatDateVN = formatDateVN;
const randomNumber = () => Math.trunc(Math.random() * 10);
exports.randomNumber = randomNumber;
const genrateTrackingNum = (tracking = "GHNXXXXXXXXVN") => {
    return tracking.replace(/X/g, exports.randomNumber.toString());
};
exports.genrateTrackingNum = genrateTrackingNum;
