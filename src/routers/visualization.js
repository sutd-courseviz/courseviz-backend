const { FastifyPluginCallback } = require("fastify");

const store = require("../store");

/**
 * @type {FastifyPluginCallback}
 */
const visualizationPlugin = (fastify, opts, done) => {
    fastify.get("/", async (req, res) => {
        const data = await store.getAll();

        return data;
    })

    done();
}

module.exports = visualizationPlugin;
