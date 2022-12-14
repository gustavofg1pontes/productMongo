const startDB = require("./db")

class Loaders {
    start() {
        startDB();
    }
}

module.exports = new Loaders();