const { FastifyPluginCallback } = require("fastify");

const store = require("../store");
const errHandler = (err) => {console.log(err);}

/**
 * @type {FastifyPluginCallback}
 */

const updatePlugin = (fastify, opts, done) => {
    fastify.put("/pillars/:id", async (req, reply) => {
        try {
            content = req.query
            await store.updatePillar(req.params.id, req.query);
            reply.send(content)
        }
        catch (err) {
            reply.send(err);
        }
    });
    fastify.put("/courses/:id", async (req, reply) => {
        try {
            content = req.query
            await store.updateCourse(req.params.id, req.query);
            reply.send(content)
        }
        catch (err) {
            reply.send(err);
        }
    });
    fastify.put("/outcomes/:id", async (req, reply) => {
        try {
            content = req.query
            await store.updateOutcome(req.params.id, req.query);
            reply.send(content)
        }
        catch (err) {
            reply.send(err);
        }
    });
    


    done();
}

module.exports = updatePlugin;
