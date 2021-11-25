const { FastifyPluginCallback } = require("fastify");

const store = require("../store");
const errHandler = (err) => {console.log(err);}

/**
 * @type {FastifyPluginCallback}
 */

const postPlugin = (fastify, opts, done) => {
    fastify.post("/pillars", async (req, reply) => {
        try {
            content = req.query;
            await store.postPillar(content);
            reply.code(201).send(content);
        }
        catch (err) {
            console.log(err);
            reply.send(err);
        }
    });
    fastify.post("/courses", async (req, reply) => {
        try {
            content = req.query;
            await store.postCourse(content);
            reply.code(201).send(content);
        }
        catch (err) {
            console.log(err);
            reply.send(err);
        }
    });
    fastify.post("/outcomes", async (req, reply) => {
        try {
            content = req.query;
            await store.postOutcome(content);
            reply.code(201).send(content);
        }
        catch (err) {
            console.log(err);
            reply.send(err);
        }
    });
    
        




    done();
}

module.exports = postPlugin;
