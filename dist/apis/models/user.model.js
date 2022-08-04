"use strict";
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    fullname: String,
    avatar: String,
    phone: String,
    password: { type: String, required: true },
    addressHome: String,
    addressAdministrative: String,
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
module.exports = mongoose.model("User", userSchema);
