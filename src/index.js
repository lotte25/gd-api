const levels = require("./routes/levels");
const users = require("./routes/users");

const request = require("./misc/request");

module.exports = Object.assign({}, levels, users, { request });
