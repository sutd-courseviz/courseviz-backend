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
        }
        catch (err) {
            reply.send(err);
        }
        
        reply.send("Updated element from pillars"  + " with the ID " + req.params.id).status(200);
    });
    fastify.put("/courses/:id", async (req, reply) => {
        try {
            content = req.query
            await store.updateCourse(req.params.id, req.query);
        }
        catch (err) {
            reply.send(err);
        }
        
        reply.send("Updated element from courses"  + " with the ID " + req.params.id).status(200);
    });
    fastify.put("/outcomes/:id", async (req, reply) => {
        try {
            content = req.query
            await store.updateOutcome(req.params.id, req.query);
        }
        catch (err) {
            reply.send(err);
        }
        
        reply.send("Updated element from outcomes"  + " with the ID " + req.params.id).status(200);
    });
    


    done();
}

module.exports = updatePlugin;