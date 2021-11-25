const { FastifyPluginCallback } = require("fastify");

const store = require("../store");
const errHandler = (err) => {console.log(err);}

/**
 * @type {FastifyPluginCallback}
 */
const visualizationPlugin = (fastify, opts, done) => {
    fastify.get("/", async (req, reply) => {
        try {
            const data = await store.getAll().catch(errHandler);
            reply.send(data);
        }
        catch(err){
            reply.send(err)
        }

    });
    done();
}

module.exports = visualizationPlugin;

