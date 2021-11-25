const visualizationPlugin = require("./visualization");
const getPlugin = require("./get");
const postPlugin = require("./post");
const deletePlugin = require("./delete");
const updatePlugin = require("./update");

module.exports = {
    visualization: visualizationPlugin,
    get: getPlugin,
    post: postPlugin,
    delete: deletePlugin,
    update: updatePlugin
}
