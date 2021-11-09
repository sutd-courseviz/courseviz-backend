const { FastifyPluginCallback } = require("fastify");

const store = require("../store");
const errHandler = (err) => {console.log(err);}

/**
 * @type {FastifyPluginCallback}
 */
const visualizationPlugin = (fastify, opts, done) => {
    fastify.get("/", async (req, reply) => {
        const data = await store.getAll().catch(errHandler);
        reply.send(data);
    });
    done();
}

module.exports = visualizationPlugin;
