const { FastifyPluginCallback } = require("fastify");

const store = require("../store");
const errHandler = (err) => {console.log(err);}

/**
 * @type {FastifyPluginCallback}
 */

const getPlugin = (fastify, opts, done) => {
    fastify.get("/:first_id", async (req, reply) => {
        try {
            const data = await store.getGroup(req.params.first_id);
            reply.send(data);
        }
        catch(err) {
            reply.send(err);
        }
        
    });
    fastify.get("/:first_id/:second_id", async (req, reply) => {
        try {
            const data = await store.getSingle(req.params.first_id, req.params.second_id);
            reply.send(data);
        }
        catch(err) {
            reply.send(err);
        }
        
    });


    done();
}

module.exports = getPlugin;
